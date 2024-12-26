import mongoose from "mongoose";

export const connectDb=async()=>{
    await mongoose.connect('mongodb+srv://prajjwalchouhan080304:9399777474@cluster0.q815p.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}