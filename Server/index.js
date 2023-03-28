import express from 'express';
import mongoose from 'mongoose';
import userModel from './model/Users.js'



/* Configuration */
const app = express();




app.get('/users' ,async (req , res)=> {
    // res.status(200).json( await userModel.find());
    const getData = await userModel.find({});
    res.status(200).json(getData);
})



/* Middle Ware */


/* Connect DB */
mongoose.connect('mongodb+srv://salamk88:salamk88@cluster0.fygi17e.mongodb.net/mern?retryWrites=true&w=majority');
app.listen(3001 , ()=> console.log("http://localhost:3001"));