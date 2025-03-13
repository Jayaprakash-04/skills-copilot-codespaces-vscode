// Create web server
const express = require('express');
const app = express();
const PORT = 3000;

// Create comments array
const comments = [
  { username: 'Tam', comment: 'Good job!' },
  { username: 'Tim', comment: 'Nice work!' },
  { username: 'Tom', comment: 'Great effort!' }
];

// Create GET route
app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
