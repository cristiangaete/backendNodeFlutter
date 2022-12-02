import express from "express";
import cors from "cors";
import "./database/connectdb.js";
import tasksRouter from "./routes/tasks.routes.js";

const app = express()

// middlewares
app.use(cors());
app.use(express.json());


// routes
app.use(tasksRouter)

app.listen(5000, ()=>console.log("conectado al puerto 5000"))