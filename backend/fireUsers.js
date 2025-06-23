// importUsers.js
module.exports = async function importFirebaseUsers() {
  const mongoose = require('mongoose');
  const admin = require('firebase-admin');
  const dotenv = require('dotenv');
  const fs = require('fs');

  dotenv.config();

  // const serviceAccount = require("./serviceAccountKey.json");

  const serviceAccountDecoded = Buffer.from(
    process.env.FIREBASE_KEY_BASE64,
    'base64'
  ).toString('utf8');
  const serviceAccount = JSON.parse(serviceAccountDecoded);

  // Initialize Firebase Admin
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

  // MongoDB connection
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch(err => {
      console.error('❌ MongoDB Error:', err);
      process.exit(1);
    });

  // Mongoose User schema (same as your backend)
  const userSchema = new mongoose.Schema({
    name: String,
    email: {type: String, unique: true},
    photoUrl: String,
    createdAt: {type: Date, default: Date.now},
  });

  const User = mongoose.model('User', userSchema);

  // Function to fetch all Firebase Auth users
  const importFirebaseUsers = async () => {
    const allUsers = [];

    const listAllUsers = async nextPageToken => {
      const result = await admin.auth().listUsers(1000, nextPageToken);
      result.users.forEach(user => {
        allUsers.push({
          name: user.displayName || '',
          email: user.email,
          photoUrl: user.photoURL || '',
        });
      });

      if (result.pageToken) {
        await listAllUsers(result.pageToken);
      }
    };

    await listAllUsers();

    console.log(`🧾 Found ${allUsers.length} users in Firebase.`);

    for (const user of allUsers) {
      if (!user.email) continue; // Skip if email is null
      try {
        await User.updateOne({email: user.email}, user, {upsert: true});
        console.log(`✅ Synced: ${user.email}`);
      } catch (err) {
        console.error(`❌ Failed for ${user.email}:`, err.message);
      }
    }

    console.log('🎉 All Firebase users imported to MongoDB!');
    process.exit();
  };
};

// importFirebaseUsers();
