const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: { type: String,
           required: true },
  content: String
});

// model(Name, nameOfSchema)
mongoose.model('Post', postSchema);
