// src/index.ts

import express from 'express';
import cors from 'cors';
import { transactions } from './data';

const app = express();
const port = 8080;

app.use(cors());

app.get('/api/transactions', (req, res) => {
  res.json(transactions);
});

app.use((req, res) => {
  res.status(404).send('Route not found');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
