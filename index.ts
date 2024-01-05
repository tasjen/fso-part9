import express from 'express';
import calculateBmi from './bmiCalculator';
import calculateExercises from './exerciseCalculator';

const app = express();

app.use(express.json());

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.post('/exercises', (req, res): any => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target } = req.body;
  if (daily_exercises === undefined || target === undefined) {
    return res.status(400).json({ error: 'parameters missing' });
  }
  if (
    typeof target !== 'number' ||
    !Array.isArray(daily_exercises) ||
    !daily_exercises.every((e) => typeof e === 'number')
  ) {
    return res.status(400).json({ error: 'malformatted parameter' });
  }
  res.json(calculateExercises(target, daily_exercises as number[]));
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
