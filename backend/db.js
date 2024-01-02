const mongoose =require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
mongoose.connect(process.env.DB_URL);
const todoschema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos',todoschema);
module.exports={
    todo
}