
declare type UserType = {
  _id: string;
  username: string;
  email: string;
  // password: string;
  role?: string;
  imageUrl?: string;
};

declare type PostType = {
  _id: string;
  title: string;
  subtitle: string;
  body: string;
  author: string;
  date: Date;
  category: string;
  imageUrl?: any;
};