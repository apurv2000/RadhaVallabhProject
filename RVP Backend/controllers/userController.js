const { db } = require("../config/firebase");

exports.uploadProfileImage = async (req, res) => {
  const { userId } = req.params;
  if (!req.file) return res.status(400).json({ message: "No file uploaded" });

  const imageUrl = `http://192.168.1.21:5000/uploads/${req.file.filename}`;
  try {
    await db.collection("users").doc(userId).update({ profileImage: imageUrl });
    res.json({ message: "Profile image uploaded", imageUrl });
  } catch (err) {
    res.status(500).json({ message: "Upload failed", error: err.message });
  }
};

exports.updateProfile = async (req, res) => {
  const { userId } = req.params;
  const { phone, password } = req.body;
  const updates = {};
  if (phone) updates.phone = phone;
  if (password) updates.password = password;

  if (Object.keys(updates).length === 0) return res.status(400).json({ message: "No data provided" });

  try {
    await db.collection("users").doc(userId).update(updates);
    res.json({ message: "Profile updated successfully", updates });
  } catch (err) {
    res.status(500).json({ message: "Update failed", error: err.message });
  }
};
