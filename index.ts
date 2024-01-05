import express from 'express';
import calculateBmi from './bmiCalculator';
const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.get('/bmi', (req, res): any => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);

  if (isNaN(height + weight)) {
    return res.status(400).json({ error: 'malformatted parameter' });
  }
  res.json({
    weight,
    height,
    bmi: calculateBmi(height, weight),
  });
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
