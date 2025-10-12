export interface ILogin {
  email: string;
  password: string;
}

export interface ISignup {
  username: string;
  email: string;
  password: string;
  re_password: string;
}

export interface IAuthSlice {
  token: string;
  name: string;
  id: number;
}
