import { Diagnosis } from '../types';
import diagnosisData from '../../data/diagnoses';

const diagnoses: Diagnosis[] = diagnosisData;

const getDiagnoses = (): Diagnosis[] => {
  return diagnoses;
};

export default {
  getDiagnoses,
};
