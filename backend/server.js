const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// Message model
const Message = require("./models/Message");

// API endpoint to handle form submissions
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(201).json({ success: true, message: "Message saved" });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server error" });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
//pp.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

app.get("/", (req, res) => {
    res.send("Server is up and running!");
});