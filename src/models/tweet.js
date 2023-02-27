const { default: mongoose } = require("mongoose");

const twitterSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    userEmail:{
        type:String,
        
    }
},{ timestamps: true })
const Tweet=mongoose.model('Tweet',twitterSchema);
module.exports = Tweet;