const express = require('express')
const connectDb = require("./config/dbConnections")
const app = express()
const config = require('dotenv').config()
const errorHandler = require("./middleware/errorHandler")
const PORT = process.env.PORT 

connectDb()
//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/", require("./routes/blogRoutes.js"));
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
