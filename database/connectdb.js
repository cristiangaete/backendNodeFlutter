import mongoose from "mongoose";

(async()=>{
    try {
        const db = await mongoose.connect("mongodb://localhost/crudFlutterDb")
        console.log("db connected to", db.connection.name)
    } catch (error) {
        console.log(error)
    }
})()