const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
  // No matter which domain is running on, it allows access resources
  res.setHeader("Access-Control-Allow-Origin", "*");
  // domain sending request with the certain set of headers
  res.setHeader("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods",
  "GET, POST, PATCH. DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added successfully'
  });
});

app.get('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: "randomstrings123",
      title: "title from server",
      content: "hello there"
    },
    {
      id: "randomstrings124",
      title: "dummy title from server",
      content: "dummy content"
    },
  ];
  res.status(200).json({
    message: 'Post fetched successfully',
    posts: posts
  });
});

module.exports = app;
