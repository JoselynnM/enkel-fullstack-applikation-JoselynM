import mongoose from "mongoose";



export const connectDB = async () => {
    try{
        await mongoose.connect("mongodb+srv://sofiamoreta:Joselyn2011@cluster0.vmn1ct2.mongodb.net/merndb");
        console.log(">>> DB is connected")
    } catch (error){
        console.log(error)
    }
}; 

