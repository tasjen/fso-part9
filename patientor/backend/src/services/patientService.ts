import { NewPatient, Patient, PatientWithoutSsn } from '../types';
import patients from '../../data/patients';
import { v1 } from 'uuid';

const getPatients = (): Patient[] => {
  return patients;
};

const getNonSensitivePatients = (): PatientWithoutSsn[] => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return patients.map(({ ssn, ...patient }) => patient);
};

const addPatient = (object: NewPatient): Patient => {
  const newPatient = { id: v1(), ...object };
  patients.push(newPatient);
  return newPatient;
};

export default {
  getPatients,
  getNonSensitivePatients,
  addPatient,
};
