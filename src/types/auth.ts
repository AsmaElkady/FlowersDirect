import type { ICart } from "./cart";

export interface IUser {
  id?: number;
  email: string;
  username: string;
  password: string;
}
export type ILogin = Pick<IUser, "email" | "password">;

export interface ISignup extends ILogin {
  username: string;
  re_password: string;
}

export type IForgetPass = Pick<IUser, "email">;
export interface IResetPass {
  password: string;
  re_password: string;
}

export interface IAuthSlice {
  token: string;
  name: string;
  id: number;
  email: string;
  user: ICustomer | IUser;
}

export type ICustomer = {
  id?: number;
  email: string;
  password?: string;
  username: string;
  cart?: ICart;
  favorites?: [];
  orders: [];
};

export interface IChangePasswordProps {
  id?: number;
  checkResetStatus: (result: CallBack) => void;
}

export interface CallBack {
  status: boolean;
  msg: string;
}
