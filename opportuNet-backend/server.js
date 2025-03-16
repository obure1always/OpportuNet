const express = require("express");
const cors = require("cors");
const pool = require("./db");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Import user routes
const usersRoutes = require("./routes/users");
app.use("/users", usersRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Opportunet API!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
