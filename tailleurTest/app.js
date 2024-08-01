import express from 'express';
import bodyParser from 'body-parser';
import Post from './models/Post.js';

const app = express();
app.use(bodyParser.json());




// Get all products
app.get('/models', (req, res) => {
  //
  try {
    res.json(Post.getAll());


  } catch (error) {
    throw new Error(error);
  }

});

app.get('/models/:id', (req, res) => {
  //

});

// app.post('/models', (req, res) => {
//  //

// });

app.get('/follow/:id', (req, res) => {
  //
  try {
    res.json(Post.getAll());


  } catch (error) {
    throw new Error(error);
  }

});


app.get('/signaler/:id', (req, res) => {
  //
  try {
    res.json(Post.getAll());


  } catch (error) {
    throw new Error(error);
  }

});

app.get('/like/:id', (req, res) => {
  //
  try {
    res.json(Post.getAll());


  } catch (error) {
    throw new Error(error);
  }

});

app.get('/publish/:id', (req, res) => {
  //
  try {
    res.json(Post.getAll());


  } catch (error) {
    throw new Error(error);
  }

});

app.get('/follow/:id', (req, res) => {
  //
  try {
    res.json(Post.getAll());


  } catch (error) {
    throw new Error(error);
  }

});



app.delete('/models/:id', (req, res) => {
  //

});

app.put('/models/:id', (req, res) => {
  //

});

app.patch('/models/:id', (req, res) => {
  //

});

////// PROFILE


app.get('/profiles', (req, res) => {
  //

});

app.get('/profiles/:id', (req, res) => {
  //

});

app.post('/profiles', (req, res) => {
  //

});

app.delete('/profiles/:id', (req, res) => {
  //

});

app.put('/profiles/:id', (req, res) => {
  //

});

app.patch('/profiles/:id', (req, res) => {
  //

});




app.listen(4000);