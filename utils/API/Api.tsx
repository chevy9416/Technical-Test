import { API_URL } from "../Constants/env";
import { DetailUserInfo, LogInResponse, User, UserInfo } from "../Types/Types";

const createUser = async (user: User): Promise<any> => {
  const body = {
    username: user.username,
    password: user.password,
    password2: user.passwordConfirmation,
    email: user.email,
    nombre: user.firstName,
    apellido: user.lastName,
    image: "",
    cedula: user.identificationNumber,
    entidad: user.healthEntity,
  };

  const response = await fetch(`${API_URL}/api/registro/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const res = await response.json();
  return res;
};

const logInUser = async (
  userName: string,
  email: string,
  password: string
): Promise<LogInResponse> => {
  const body = {
    userName: userName,
    email: email,
    password: password,
  };

  const response = await fetch(`${API_URL}/api/login/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const token = await response.json();
  console.log("this is token on api: ", token);
  return token;
};

const getUsersList = async (Authorization: string): Promise<UserInfo[]> => {
  const response = await fetch(`${API_URL}/api/usuario/`, {
    method: "GET",
    headers: {
      Authorization: `Token ${Authorization}`,
    },
  });

  return response.json();
};

const searchUser = async (
  Authorization: string,
  query: { criteria: string; data: string }
): Promise<UserInfo[]> => {
  const search = query.criteria + "=" + query.data;
  const response = await fetch(`${API_URL}/api/usuario/?${search}`, {
    method: "GET",
    headers: {
      Authorization: `Token ${Authorization}`,
    },
  });

  return response.json();
};

const searchUserById = async (
  Authorization: string,
  id: number
): Promise<DetailUserInfo> => {
  const ID = id;
  const response = await fetch(`${API_URL}/api/usuario/${ID}/`, {
    method: "GET",
    headers: {
      Authorization: `Token ${Authorization}`,
    },
  });

  return response.json();
};
const modifyUser = async (
  Authorization: string,
  id: number,
  data: any
): Promise<any> => {
  const body = {
    password: data.password,
    nombre: data.name,
    apellido: data.lastName,
    entidad: data.entity,
  };

  console.log("this is on API: ", body);

  const ID = id;
  const response = await fetch(`${API_URL}/api/usuario/actualizar/${ID}`, {
    method: "PATCH",
    headers: {
      Authorization: `Token ${Authorization}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  console.log(response.status);

  return response.json();
};

export const ApiServices = {
  logInUser,
  createUser,
  getUsersList,
  searchUser,
  searchUserById,
  modifyUser,
};
