import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

  name : {type:String},
  age : {type:Number},
  email : {type:String},

})



export default mongoose.model('users' ,userSchema );