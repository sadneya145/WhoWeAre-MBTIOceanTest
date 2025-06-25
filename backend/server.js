// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

dotenv.config();
const app = express();

// ✅ UNCOMMENT THESE CRITICAL LINES:
const allowedOrigins = [
  'http://localhost:3000',
  'https://whoweare-mbtioceantest-frontend.onrender.com',
  'https://whoweare.in',
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  })
);

// ✅ THIS IS THE CRITICAL FIX - UNCOMMENT THIS LINE:
app.use(express.json());

// Add error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({success: false, error: 'Internal server error'});
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

// User verification schema
const userVerificationSchema = new mongoose.Schema({
  email: String,
  otp: String,
  createdAt: {type: Date, expires: 300, default: Date.now}, // OTP expires in 5 min
});

const UserVerification = mongoose.model(
  'UserVerification',
  userVerificationSchema
);

// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: {type: String, unique: true},
  photoUrl: String,
  createdAt: {type: Date, default: Date.now},
});
const User = mongoose.model('User', userSchema);

// Quiz Schema
const quizSchema = new mongoose.Schema({
  email: String,
  timestamp: {type: Date, default: Date.now},
  oceanScores: {
    O: Number,
    C: Number,
    E: Number,
    A: Number,
    N: Number,
  },
  oceanCluster: Number,
  oceanTypeName: String,
  mbtiScores: {
    I_E: Number,
    N_S: Number,
    F_T: Number,
    J_P: Number,
  },
  mbtiType: String,
});
const Quiz = mongoose.model('Quiz', quizSchema);

// ---------------- EMAIL OTP SYSTEM ------------------
// Email transporter


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


// Generate OTP
const generateOTP = () => crypto.randomInt(100000, 999999).toString();

// ✅ Add a root endpoint for health checks
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'MBTI Backend Server is running!',
    timestamp: new Date().toISOString(),
  });
});

// 📩 Send OTP Email - IMPROVED with better error handling
app.post('/send-otp', async (req, res) => {
  try {
    console.log("🔵 OTP request received:", req.body);

    const { email } = req.body;
    if (!email) {
      console.log("❌ No email provided");
      return res.status(400).json({ success: false, error: 'Email is required' });
    }

    const otp = generateOTP();
    console.log(`🔐 OTP generated for ${email}: ${otp}`);

    await UserVerification.findOneAndUpdate(
      { email },
      { otp, createdAt: Date.now() },
      { upsert: true, new: true }
    );
    console.log("✅ OTP saved in DB");

    await transporter.sendMail({
      from: `"MBTI App" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Email Verification OTP',
      html: `<h2>Your OTP is: <strong>${otp}</strong></h2><p>Expires in 5 minutes.</p>`,
    });
    console.log("📧 OTP email sent");

    res.status(200).json({ success: true, message: 'OTP sent successfully!' });

  } catch (error) {
    console.error("❌ Error in /send-otp:", error);
    res.status(500).json({ success: false, error: 'Failed to send OTP. Please try again.' });
  }
});

// ✅ Verify OTP - IMPROVED
app.post('/verify-otp', async (req, res) => {
  try {
    console.log('Received OTP verification:', req.body);

    const {email, otp} = req.body;

    if (!email || !otp) {
      return res.status(400).json({
        success: false,
        message: 'Email and OTP are required',
      });
    }

    const record = await UserVerification.findOne({email});

    if (!record) {
      return res.status(400).json({
        success: false,
        message: 'No OTP found for this email. Please request a new OTP.',
      });
    }

    if (record.otp !== otp.toString()) {
      return res.status(400).json({
        success: false,
        message: 'Invalid OTP. Please check and try again.',
      });
    }

    // OTP is valid, delete it
    await UserVerification.deleteOne({email});

    console.log(`OTP verified successfully for ${email}`);
    res.status(200).json({
      success: true,
      message: 'Email verified successfully!',
    });
  } catch (error) {
    console.error('OTP verification error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to verify OTP. Please try again.',
    });
  }
});
// ---------------- USER PROFILE ------------------

app.post('/user/create', async (req, res) => {
  const {name, email, photoUrl} = req.body;
  try {
    const existing = await User.findOne({email});
    if (!existing) {
      await User.create({name, email, photoUrl});
    }
    res.status(200).json({success: true});
  } catch (err) {
    res.status(500).json({success: false, error: err.message});
  }
});

app.get('/user/:email', async (req, res) => {
  try {
    const user = await User.findOne({email: req.params.email});
    res.json(user);
  } catch (err) {
    res.status(500).json({error: 'Failed to fetch user'});
  }
});

if (process.env.RUN_FIREBASE_SYNC === 'true') {
  const importFirebaseUsers = require('./fireUsers');
  importFirebaseUsers()
    .then(() => {
      console.log('✅ Firebase users synced.');
    })
    .catch(err => {
      console.error('❌ Firebase sync error:', err);
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
