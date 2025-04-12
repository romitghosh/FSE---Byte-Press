const app = require("./app");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
dotenv.config();

// Port
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Server URL: http://localhost:${PORT}`);
});
