const mongoose = require('mongoose');

const messageSchema =new  mongoose.Schema({
    senderId : {
        type : mongoose.Schema.Types.ObjectId,
        ref :"User",
        required : true ,
    },
    receiverId : {
        type : mongoose.Schema.Types.ObjectId,
        ref :"User",
        required : true ,
    },
    text : {
        type :String
    },
    image:{
        type:String
    }

},{timestamps : true});

// Add indexes for better query performance
messageSchema.index({ senderId: 1, receiverId: 1 });
messageSchema.index({ createdAt: -1 });

const Message = mongoose.model("Message" , messageSchema);

module.exports = { Message };