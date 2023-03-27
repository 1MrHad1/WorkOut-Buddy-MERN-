const express=require('express')

const {createWorkout,getWorkouts,geteWorkout,deleteWorkout,updateWorkout}=require('../controllers/workoutController')

const router = express.Router()

//Get all workouts
router.get('/',getWorkouts)

// Get a single workout
router.get('/:id',geteWorkout)

//Post a new workout
router.post('/',createWorkout)
//Delete a workoit
router.delete('/:id',deleteWorkout)
//Update a  workout
router.patch('/:id',updateWorkout)

module.exports=router