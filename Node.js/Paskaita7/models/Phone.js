import mongoose from "mongoose";
const phoneSchema = new mongoose.Schema({
    brand: String,
    model: String,
    prise: Number,
    yaer: Number
})
export default mongoose.model("phone" , phoneSchema);