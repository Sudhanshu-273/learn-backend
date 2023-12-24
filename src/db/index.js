import mongoose from "mongoose"
import {DB_NAME} from "../constants.js"

const dbConnect = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log('MongoDb connected : ', connectionInstance.connection.host);
        // console.log('connection : ', connectionInstance)

    } catch (error) {
        console.log('Mongodb connection error ', error)
        throw error
    }
}

export default dbConnect