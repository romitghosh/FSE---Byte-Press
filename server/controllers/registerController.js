const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { user } = require("../models");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await user.findOne({ email });
    if (existingUser) {
      console.log("User already exists:", email); // Debug log
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await user.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({ message: "User registered successfully", token });
  } catch (error) {
    console.error("Register error:", error); // Debug log
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

module.exports = { registerUser };
