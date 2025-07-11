const { db } = require("../config/firebase");

exports.signup = async (req, res) => {
  const { name, email, password, phone, gender, dob } = req.body;
  try {
    const userRef = db.collection('users').doc();
    await userRef.set({ name, email, password, phone, gender, dob, createdAt: new Date().toISOString() });
    res.json({ message: "Signup successful!" });
  } catch (err) {
    res.status(500).json({ message: "Signup failed", error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const snapshot = await db.collection("users").where("email", "==", email).where("password", "==", password).get();
    if (snapshot.empty) return res.status(401).json({ message: "Invalid email or password" });
    const doc = snapshot.docs[0];
    res.json({ message: "Login successful!", user: { id: doc.id, ...doc.data() } });
  } catch (err) {
    res.status(500).json({ message: "Login failed", error: err.message });
  }
};
