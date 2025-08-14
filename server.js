const express = require('express');
var cors = require('cors')
const app = express();

app.use(cors())
require('dotenv').config()

app.use(express.json());

// Connect to MongoDB

const connectDB = require('./config/connectionDB');
port = process.env.PORT || 3000;
connectDB();

// Import routes
app.use("/recipe", require('./routes/recipe'));
app.use("/user", require('./routes/user'));
app.use('/public', express.static('public'));




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});