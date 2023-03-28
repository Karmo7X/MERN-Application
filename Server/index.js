import express from 'express';
import mongoose from 'mongoose';
import userModel from './model/Users.js'
import cors from 'cors';


/* Configuration */
const app = express();

/* Middle Ware */
app.use(cors({
    origin: "http://localhost:3000"
}));
app.use(express.json());

app.get('/users' ,async (req , res)=> {
    // res.status(200).json( await userModel.find());
    const getData = await userModel.find({});
    res.status(200).json(getData);
})

app.post('/createUser' , async (req , res)=> {
    const newUser = new userModel(req.body)
    await newUser.save();

    res.status(200).json(req.body)
})



/* Connect DB */
mongoose.connect('mongodb+srv://salamk88:salamk88@cluster0.fygi17e.mongodb.net/mern?retryWrites=true&w=majority');
app.listen(3001 , ()=> console.log("http://localhost:3001"));