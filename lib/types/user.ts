export type UserCredentials = {
  email: string;
  password: string;
};

export type UserRegister = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

export type UserSafe = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  isLoggedIn: boolean;
}

export type UserSession = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  isLoggedIn: boolean;
}

export type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};
