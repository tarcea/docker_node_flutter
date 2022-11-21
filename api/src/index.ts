import express from 'express';
import morgan from 'morgan';

const app = express();
app.use(morgan('dev')); // logger

const data = [
  { name: 'johnny', age: 34 },
  { name: 'ida', age: 44 },
];

app.get('/', async (req, res) => {
  res.json(data);
});

const port = Number(process.env.PORT ?? 8080);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
