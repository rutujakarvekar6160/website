const express = require("express");
const router = express.Router();
const collection = require("../mongo");

// Login Route
router.post("/", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await collection.findOne({ email: email });
        if (user) {
            res.json("exist");
        } else {
            res.json("notexist");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

// Signup Route
router.post("/signup", async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await collection.findOne({ email: email });
        if (existingUser) {
            res.json("exist");
        } else {
            const newUser = { email: email, password: password };
            await collection.insertMany([newUser]);
            res.json("notexist");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
