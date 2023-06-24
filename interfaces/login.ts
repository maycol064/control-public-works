export interface Login {
  username: string,
  password: string,
}

export interface LoginResponse {
  data: Data;
  status: number;
}

export interface Data {
  token: string | null;
  user: User | null
  message: string | null;
}

export interface DataError {
}

export interface User {
  id:       string;
  name:     string;
  lastname: string;
  username: string;
  role:     string;
}