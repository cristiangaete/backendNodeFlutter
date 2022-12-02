import { Schema, model } from "mongoose";



const taskSchema = new Schema({
    title: String,
    description: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean,
        default: false,
    },

}, 
{
    timestamps: true,
    versionKey: false,
})

export default model("Task", taskSchema)