const height = Number(process.argv[2]);
const weight = Number(process.argv[3]);

if (isNaN(height + weight)) throw new Error('Invalid argument');

const calculateBmi = (height: number, weight: number) => {
  const bmi = Math.round((weight / (height / 100) ** 2) * 10) / 10;
  return bmi < 16.0
    ? 'Underweight (Severe thinness)'
    : 16.0 <= bmi && bmi <= 16.9
    ? 'Underweight (Moderate thinness)'
    : 17.0 <= bmi && bmi <= 18.4
    ? 'Underweight (Mild thinness)'
    : 18.5 <= bmi && bmi <= 24.9
    ? 'Normal range'
    : 25.0 <= bmi && bmi <= 29.9
    ? 'Overweight (Pre-obese)'
    : 30.0 <= bmi && bmi <= 34.9
    ? 'Obese (Class I)'
    : 35.0 <= bmi && bmi <= 39.9
    ? 'Obese (Class II)'
    : 'Obese (Class III)';
};

console.log(calculateBmi(height, weight));
