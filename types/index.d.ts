declare type UserType = {
  name: string;
  email: string;
  imageUrl?: string;
  _id: string;
  // password: string;
  role?: string;
};

declare type PostType = {
  _id: string;
  title: string;
  subtitle: string;
  body: string;
  author: string;
  date: Date;
  published?: boolean;
  category: string;
  imageUrl: any;
};
