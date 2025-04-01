require('dotenv').config()
import mongoose from 'mongoose'
import connectdb from './db/db'

connectdb()
.then(()=>{
     application.listen(process.env.PORT||8000)
     console.log(`sever runing at port ${process.env.PORT}`)
})
.catch((err)=>{
    console.log(err)
    })
    