export type User = {
  username: string;
  password: string;
  passwordConfirmation: string;
  email: string;
  firstName: string;
  lastName: string;
  image: string;
  identificationNumber: string;
  healthEntity: string;
};
export type LoginInfo = {
  email: string;
  password: string;
};

export type LogInResponse = {
  key: string;
};

export type UserInfo = {
  id: number;
  nombre: string;
  apellido: string;
  cedula: string;
  email: string;
  url: string;
  imagen: string;
};

export type DetailUserInfo = {
  password?: string;
  nombre?: string;
  apellido?: string;
  imagen?: string | null;
  entidad?: string;
};
