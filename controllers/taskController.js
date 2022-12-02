// import { request, response } from "express";
import Task from "../models/Task.js"; 


export const getTasks = async(req, res) =>{
    
    const tasks = await Task.find()
    res.json(tasks)
}

export const getTask = async(req, res) =>{
    
    const task = await Task.findById(req.params.id)
    res.json(task)
}

export const createTask = async(req, res) =>{
    const newTask = await Task.create(req.body)
    res.json(newTask)
}

export const updateTask = async(req, res) =>{
    const taskUpdate = await Task.findByIdAndUpdate(req.params.id,
        req.body,{
            new: true,
        })
    return res.json(taskUpdate)
}

export const deleteTask = async(req, res) =>{
    const task = await Task.findByIdAndDelete(req.params.id)
    res.json(task)
}