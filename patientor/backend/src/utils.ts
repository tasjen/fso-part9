import { NewPatient, Gender } from './types';

const isString = (param: unknown): param is string => {
  return typeof param === 'string' || param instanceof String;
};

const isDate = (param: string): boolean => {
  return Boolean(Date.parse(param));
};

const isGender = (param: string): param is Gender => {
  return Object.values(Gender)
    .map((e) => e.toString())
    .includes(param);
};

const parseName = (name: unknown): string => {
  if (!isString(name)) {
    throw new Error('Incorrect or missing name');
  }
  return name;
};

const parseDateOfBirth = (date: unknown): string => {
  if (!isString(date) || !isDate(date)) {
    throw new Error(`Incorrect or missing date: ${date}`);
  }
  return date;
};

const parseSsn = (ssn: unknown): string => {
  if (!isString(ssn)) {
    throw new Error('Incorrect or missing ssn');
  }
  return ssn;
};

const parseGender = (gender: unknown): Gender => {
  if (!isString(gender) || !isGender(gender)) {
    throw new Error(`Incorrect or missing gender: ${gender}`);
  }
  return gender;
};

const parseOccupation = (occupation: unknown): string => {
  if (!isString(occupation)) {
    throw new Error('Incorrect or missing occupation');
  }
  return occupation;
};

const toNewPatient = (object: unknown): NewPatient => {
  if (
    !object ||
    typeof object !== 'object' ||
    !(
      'name' in object &&
      'dateOfBirth' in object &&
      'ssn' in object &&
      'gender' in object &&
      'occupation' in object
    )
  ) {
    throw new Error('Incorrect or missing data');
  }
  const newPatient: NewPatient = {
    name: parseName(object.name),
    dateOfBirth: parseDateOfBirth(object.dateOfBirth),
    ssn: parseSsn(object.ssn),
    gender: parseGender(object.gender),
    occupation: parseOccupation(object.occupation),
  };
  return newPatient;
};

export default toNewPatient;
