import composables from '@/composables/nodemailer'
const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// app.use(bodyParser.json());

app.post('/user', (req, res) => {
  // Get form data from the request
  const formData = req.body;

  // Send email using Nodemailer
  // Implement your email sending logic here

  // Send a response to the Vue.js app
  res.send({ message: 'Email sent successfully!' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});