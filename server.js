const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

const users = [
  { id: 1, name: 'adam' },
  { id: 2, name: 'andrzej' },
  { id: 3, name: 'witek' },
];

app.get('/api/users', (req, res) => {
  // Replace this with your own data
  res.json(users);
});

app.get('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  res.json(users.filter((user) => user.id === id));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

