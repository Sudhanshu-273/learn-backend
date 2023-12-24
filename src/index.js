// require('dotenv').config({path: './env'})

import dotenv from "dotenv"

import dbConnect from "./db/index.js"

dotenv.config({path: './env'})


dbConnect();





/*
import express from "express";

const app = express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (err) => {
            console.log(`Error connecting to db : `, err)
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server is connected to db and running on port ${process.env.PORT}`)
        })
        
    } catch (error) {
        console.log(error)
        throw err
    }
})()

*/