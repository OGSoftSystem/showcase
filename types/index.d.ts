declare type UserType = {
  name: string;
  email: string;
  imageUrl?: string;
  _id: string;
  // password: string;
  role?: string;
  about?: string;
  isAdmin?: boolean;
};

declare type PostType = {
  _id: string;
  title: string;
  subtitle: string;
  body?: string;
  author: { name: string; imageUrl: string; about: string };
  date: Date;
  published: boolean;
  category: string;
  imageUrl: any;
  likedByMe?: string;
};

declare type CommentProps = {
  _id: string;
  author: { name: string; imageUrl: string };
  comment: string;
  createdAt: Date;
  updateAt: Date;
};
