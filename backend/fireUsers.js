const mongoose = require('mongoose');
const admin = require('firebase-admin');
const dotenv = require('dotenv');

dotenv.config();

module.exports = async function importFirebaseUsers() {
  // 🛡️ Prevent re-initializing Firebase
  if (!admin.apps.length) {
    const serviceAccountDecoded = Buffer.from(
      process.env.FIREBASE_KEY_BASE64,
      'base64'
    ).toString('utf8');
    const serviceAccount = JSON.parse(serviceAccountDecoded);

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }

  // ✅ Connect to MongoDB if not already connected
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Connected to MongoDB (from fireUsers)');
  }

  // 🧠 Define or reuse User model
  const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    photoUrl: String,
    createdAt: { type: Date, default: Date.now },
  });

  const User = mongoose.models.User || mongoose.model('User', userSchema);

  // 🔁 Fetch all Firebase Auth users
  const allUsers = [];

  const listAllUsers = async (nextPageToken) => {
    const result = await admin.auth().listUsers(1000, nextPageToken);
    result.users.forEach((user) => {
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

  // 🔄 Sync users to MongoDB
  for (const user of allUsers) {
    if (!user.email) continue;
    try {
      await User.updateOne({ email: user.email }, user, { upsert: true });
      console.log(`✅ Synced: ${user.email}`);
    } catch (err) {
      console.error(`❌ Failed for ${user.email}:`, err.message);
    }
  }

  console.log('🎉 All Firebase users imported to MongoDB!');
};
