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


export interface IUser {
  id:number ;
  email: string;
  password: string;
  username: string;
  cart:{
    cartItems:[],
    totalQuantity : number,
    totalPrice: number
  };
  favorites:[]
}
