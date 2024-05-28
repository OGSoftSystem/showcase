declare type SignInType = {
  email: string;
  password: string;
};

export type UserType ={
  _id:string;
  username: string;
  email: string;
  // password: string;
  role?: string
  imageUrl?: string;
}