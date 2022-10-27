const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const port = process.env.PORT || 5000;

const allCourses = require('./data/allCourse.json');

app.get('/', (req, res) => {
  res.send('server is running');
});

// for all course
app.get('/courses', (req, res) => {
  res.send(allCourses);
});

// for single course
app.get('/courses/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const details  = allCourses.find(c => c.categoryId === id);
  res.send(details);  
})

app.listen(port, () => {
  console.log('server is running on port', port);
});