type Result = {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
};

// const target = Number(process.argv[2]);
// if (isNaN(target)) throw new Error('Invalid argument');
// const exerciseHours = process.argv.slice(3).map((e) => {
//   if (isNaN(Number(e))) throw new Error('Invalid argument');
//   return Number(e);
// });

const calculateExercises = (
  target: number,
  exerciseHours: number[]
): Result => {
  const average =
    exerciseHours.reduce((prev, curr) => prev + curr, 0) / exerciseHours.length;
  return {
    periodLength: exerciseHours.length,
    trainingDays: exerciseHours.filter((e) => e !== 0).length,
    success: average >= target,
    rating: Math.floor(Math.random() * 4),
    ratingDescription: 'not too bad but could be better',
    target,
    average,
  };
};

// console.log(calculateExercises(target, exerciseHours));

export default calculateExercises;