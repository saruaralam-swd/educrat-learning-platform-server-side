const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const port = process.env.PORT || 5000;

const allCourses = require('./data/courses.json');

app.get('/', (req, res) => {
  res.send('server is running');
});

app.get('/courses', (req, res) => {
  res.send(allCourses);
})

app.listen(port, () => {
  console.log('server is running on port', port);
});