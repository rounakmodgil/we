const mongoose = require("mongoose");

let userSchema = new mongoose.Schema(
  {
    name:String,
    phone:String,
    email: String,
    gender:String,
    password: String,
    load:{
      type:Number,
      default:0
    },
    tokenVersion: {
      type: Number,
      default: 0,
    },
    AddedPosts:[
      {
        postid:String
      }
    ],
    InteractedPosts:[
      {
        postid: String,
        vote:Number
      }
      
    ],
    BookMarks:[
      {
        postid:String
      }
    ]
  },
  { collection: "authorization" }
);

let postSchema= new mongoose.Schema(
  {
    userid:String,
    username:String,
    usergender:String,
    timestamp:String,
    imageurl:String,
    upvote:[
      {
        userid:String
      }
    ],
    downvote:[
      {
        userid:String
      }
    ],
    description:String
  },
  
  { collection:"posts"}
);

var Users = mongoose.model("User", userSchema);
var Posts =mongoose.model("Post", postSchema);
module.exports = { Users, Posts };
