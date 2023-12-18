const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  picture: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  caption: String,
  date: {
    type: Date,
    default: Date.now,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId, // Fix the typo here (change 'types' to 'type')
      ref: "user",
    },
  ],
});

module.exports = mongoose.model("post", PostSchema);
