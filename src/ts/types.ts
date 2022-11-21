export interface IUser {
  email: string;
  name: string;
  surname: string;
  salary: number;
  phone: string;
  cname: string;
}

export interface IDisease {
  disease_code: string;
  pathogen: string;
  description: string;
  id: number;
}

export interface IDiseaseType {
  id: number;
  description: string;
}

export interface ICountry {
  cname: string;
  population: number;
}

export interface IDiscover {
  cname: string;
  disease_code: string;
  first_enc_date: string;
}

export interface IServants {
  email: string;
  department: string;
}

export interface IDoctor {
  email: string;
  degree: string;
}

export interface ISpezialize {
  id: number;
  email: string;
}

export interface IRecord {
  email: string;
  cname: string;
  disease_code: string;
  total_deaths: number;
  total_patients: number;
}
