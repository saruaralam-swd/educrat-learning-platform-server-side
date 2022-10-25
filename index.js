const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const port = process.env.PORT || 5000;

const courses = require('./data/courses.json');
const courseDetails = require('./data/course.json');

app.get('/', (req, res) => {
  res.send('server is running');
});

app.get('/courses', (req, res) => {
  res.send(courses);
});

app.get('/courses/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const details  = courseDetails.find(c => c.categoryId === id);
  res.send(details);  
})

app.listen(port, () => {
  console.log('server is running on port', port);
});