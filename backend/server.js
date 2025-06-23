// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const crypto = require("crypto");

dotenv.config();
const app = express();
// app.use(cors({
//   origin: 'https://whoweare-mbtioceantest-frontend.onrender.com',
//   credentials: true
// }));
// app.use(express.json());

const allowedOrigins = [
  "http://localhost:3000",
  "https://whoweare-mbtioceantest-frontend.onrender.com",
  "https://whoweare.in"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

// User verification schema
const userVerificationSchema = new mongoose.Schema({
  email: String,
  otp: String,
  createdAt: { type: Date, expires: 300, default: Date.now }, // OTP expires in 5 min
});

const UserVerification = mongoose.model("UserVerification", userVerificationSchema);

// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  photoUrl: String,
  createdAt: { type: Date, default: Date.now },
});
const User = mongoose.model("User", userSchema);

// Quiz Schema
const quizSchema = new mongoose.Schema({
  email: String,
  timestamp: { type: Date, default: Date.now },
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
const Quiz = mongoose.model("Quiz", quizSchema);


// ---------------- EMAIL OTP SYSTEM ------------------
// Email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Generate OTP
const generateOTP = () => crypto.randomInt(100000, 999999).toString();

// 📩 Send OTP Email
app.post("/send-otp", async (req, res) => {
  const { email } = req.body;
  const otp = generateOTP();

  try {
    await UserVerification.findOneAndUpdate(
      { email },
      { otp, createdAt: Date.now() },
      { upsert: true, new: true }
    );

    await transporter.sendMail({
      from: `"MBTI App" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Email Verification OTP",
      html: `<h2>Verify your email</h2><p>Your OTP is: <strong>${otp}</strong></p>`,
    });

    res.status(200).json({ success: true, message: "OTP sent!" });
  } catch (error) {
    console.error("OTP error:", error);
    res.status(500).json({ success: false, error: "Failed to send OTP" });
  }
});

// ✅ Verify OTP
app.post("/verify-otp", async (req, res) => {
  const { email, otp } = req.body;

  const record = await UserVerification.findOne({ email });

  if (!record || record.otp !== otp) {
    return res.status(400).json({ success: false, message: "Invalid OTP" });
  }

  await UserVerification.deleteOne({ email }); // OTP used
  res.status(200).json({ success: true, message: "Email verified!" });
});

// ---------------- USER PROFILE ------------------

app.post("/user/create", async (req, res) => {
  const { name, email, photoUrl } = req.body;
  try {
    const existing = await User.findOne({ email });
    if (!existing) {
      await User.create({ name, email, photoUrl });
    }
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get("/user/:email", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch user" });
  }
});

// ---------------- QUIZ SYSTEM ------------------

// function calculateMBTI(oceanScores) {
//   return {
//     I_E: oceanScores.E,
//     N_S: oceanScores.O,
//     F_T: oceanScores.A,
//     J_P: oceanScores.C,
//   };
// }

// function determineMBTI(mbtiScores) {
//   return (
//     (mbtiScores.I_E > 50 ? "E" : "I") +
//     (mbtiScores.N_S > 50 ? "N" : "S") +
//     (mbtiScores.F_T > 50 ? "F" : "T") +
//     (mbtiScores.J_P > 50 ? "J" : "P")
//   );
// }

// function getCluster(oceanScores) {
//   const { O, C, E, A, N } = oceanScores;
//   const total = O + C + E + A + N;
//   const avg = total / 5;
//   const cluster = avg > 75 ? 1 : avg > 60 ? 2 : avg > 45 ? 3 : avg > 30 ? 4 : 5;
//   const names = {
//     1: "The Idealist",
//     2: "The Analyst",
//     3: "The Realist",
//     4: "The Mediator",
//     5: "The Explorer",
//   };
//   return { cluster, typeName: names[cluster] };
// }

// app.post("/quiz/submit", async (req, res) => {
//   const { email, oceanScores } = req.body;

//   try {
//     const mbtiScores = calculateMBTI(oceanScores);
//     const mbtiType = determineMBTI(mbtiScores);
//     const { cluster, typeName } = getCluster(oceanScores);

//     const quiz = await Quiz.create({
//       email,
//       oceanScores,
//       oceanCluster: cluster,
//       oceanTypeName: typeName,
//       mbtiScores,
//       mbtiType,
//     });

//     res.status(200).json({ success: true, quizId: quiz._id });
//   } catch (err) {
//     res.status(500).json({ success: false, error: err.message });
//   }
// });

// app.get("/quiz/history/:email", async (req, res) => {
//   try {
//     const quizzes = await Quiz.find({ email: req.params.email }).sort({ timestamp: -1 });
//     res.json(quizzes);
//   } catch (err) {
//     res.status(500).json({ error: "Could not fetch history" });
//   }
// });

// app.get("/quiz/detail/:id", async (req, res) => {
//   try {
//     const quiz = await Quiz.findById(req.params.id);
//     res.json(quiz);
//   } catch (err) {
//     res.status(500).json({ error: "Quiz not found" });
//   }
// });



// profile page backend

// Get user profile by email
// app.get("/user/:email", async (req, res) => {
//   try {
//     const user = await User.findOne({ email: req.params.email });
//     if (!user) return res.status(404).json({ message: "User not found" });
//     res.json(user);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// Get quizzes for a user by email
// app.get("/quizzes/:email", async (req, res) => {
//   try {
//     const quizzes = await Quiz.find({ email: req.params.email });
//     res.json(quizzes);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

if (process.env.RUN_FIREBASE_SYNC === 'true') {
  const importFirebaseUsers = require('./fireUsers');
  importFirebaseUsers().then(() => {
    console.log('✅ Firebase users synced.');
  }).catch(err => {
    console.error('❌ Firebase sync error:', err);
  });
}


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
