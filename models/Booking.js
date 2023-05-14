import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
     type: String
    },
    userEmail: {
      type: String,
    },
    tourName:{
        type: String,
        required: true
    }
    ,
    fullName: {
      type: String,
     
    },
    guestSize:{
        type:Number,
       
    },
  
    phone:{
        type:Number,
        required:true
    },
    bookAt:{
        type:Date,
  
    }
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
