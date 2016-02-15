var mongoose = require("mongoose");


var postSchema = mongoose.Schema({
  //enter properties here
  userId: {type: String, required: true},
  profilePic: {type: String, required: false, default: 'https://beardownchallenge.com/assets/no-user-image-square-9f6a473a32ad639f619216331d10d61ce1b35c9271d5683920960e1a5ee45bb8.jpg'},
  firstName: {type: String, required: false},
  lastName: {type: String, required: false},
  comments: [{type: String, default: 0}],
  likes: [{type: String, default: 0}],
  typeOfPost: {type: String},
  waterbody: [{type: String}],
  postMessage:  {type: String},
  postPic: {type: String, required: false,},
  rating: {type: String},
  dateOfPost: {type: Date, default: Date.now}
});


module.exports = mongoose.model("Post", postSchema);
