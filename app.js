const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/posts', (req, res) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added successfully'
  });
});

app.get('/api/posts',(req, res, next) => {
  const posts = [
    { 
      id: 'jiofwdwjnq', 
      title: 'First server-side post',
      content: 'This is coming from the server'
    },
    { 
      id: 'jiofwdwjnq', 
      title: 'Second server-side post',
      content: 'This is the second post content coming from the server'
    }

  ]
  res.status(200)
  .json({message: 'Fetched well', posts: posts});
});

module.exports = app;