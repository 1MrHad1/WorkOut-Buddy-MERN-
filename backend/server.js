require('dotenv').config()
const express =require('express')

//requring the workouts in our app
const workoutRoutes=require('./routes/workouts')
// requiring mongoose
const mongoose=require('mongoose')
mongoose.set('strictQuery', false)
//express app
const app =express()
//middleware
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

//Routes 
// useing the workouts inside our app
app.use('/api/workouts',workoutRoutes)
//connect to db
mongoose.connect(process.env.MONG_URI)
    .then(()=>{
        // listen for the request
        app.listen(process.env.PORT,()=>{
        console.log('connected to database & Listneing on port',process.env.PORT)
})
    })
    .catch((error)=>{
        console.log(error)
    })

