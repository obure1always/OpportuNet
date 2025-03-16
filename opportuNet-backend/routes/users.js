const express = require("express");
const router = express.Router();
const pool = require("../db");

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await pool.query("SELECT id, full_name, email, role FROM users");
    res.json(users.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Get a single user by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await pool.query("SELECT id, full_name, email, role FROM users WHERE id = $1", [id]);

    if (user.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Create a new user
router.post("/", async (req, res) => {
  try {
    const { full_name, email, password_hash, role } = req.body;
    const newUser = await pool.query(
      "INSERT INTO users (full_name, email, password_hash, role) VALUES ($1, $2, $3, $4) RETURNING *",
      [full_name, email, password_hash, role]
    );

    res.status(201).json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Update user details
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { full_name, email, role } = req.body;

    const updateUser = await pool.query(
      "UPDATE users SET full_name = $1, email = $2, role = $3 WHERE id = $4 RETURNING *",
      [full_name, email, role, id]
    );

    if (updateUser.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(updateUser.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Delete a user
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await pool.query("DELETE FROM users WHERE id = $1 RETURNING *", [id]);

    if (deleteUser.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
