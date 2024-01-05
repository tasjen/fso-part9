type Result = {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
};

const calculateExercises = (
  exerciseHours: number[],
  target: number
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
