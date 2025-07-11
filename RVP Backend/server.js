const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Static folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.get("/api/hello", (_, res) => res.json({ message: "Hello from Node.js backend!" }));
app.use("/api", require("./routes/authRoutes"));
app.use("/api", require("./routes/userRoutes"));

// Server
app.listen(5000, () => {
  console.log("Server running on http://192.168.1.21:5000");
});
