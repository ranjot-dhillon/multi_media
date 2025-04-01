import mongoose from 'mongoose '
import { DB_NAME } from '../constants'

const connectdb = async()=>{
    try{
         const connection= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    }
    catch{
        console.log('Error connecting to database')
    }
}
export default connectdb