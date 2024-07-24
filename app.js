const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use("/", userRoutes);

// MongoDB connection
mongoose.connect("mongodb://0.0.0.0:27017/furniture-record", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("Connection failed", err));

// Start the server
app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
