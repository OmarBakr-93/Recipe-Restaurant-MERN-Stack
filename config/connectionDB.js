const mongoose = require('mongoose');
const connectDB = async()=>{
await mongoose.connect(process.env.URI_CONNECTION)
.then(()=> console.log("MongoDB connected successfully"))


}

module.exports = connectDB;