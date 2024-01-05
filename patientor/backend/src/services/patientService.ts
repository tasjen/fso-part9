import { Patient, PatientWithoutSsn } from '../types';
import patientData from '../../data/patients';

const patients: Patient[] = patientData;

const getPatients = (): Patient[] => {
  return patients;
};

const getNonSensitivePatients = (): PatientWithoutSsn[] => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return patients.map(({ssn, ...patient}) => patient);
};

export default {
  getPatients,
  getNonSensitivePatients,
};
