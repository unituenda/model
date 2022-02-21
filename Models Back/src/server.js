import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({ nome : 'Hamilton Silva'});
});

app.listen(3333, () => {
  console.log('Port on http://localhost:3333/')
});