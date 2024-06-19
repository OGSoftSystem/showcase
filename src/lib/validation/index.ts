import { z } from "zod";

export const SignInSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "password should be at least 6 character long" }),
});
export type SignInType = z.infer<typeof SignInSchema>;

export const CreateUserSchema = z.object({
  name: z
    .string()
    .min(4, { message: "Name should be at least 4 character long" }),
  about: z
    .string()
    .min(4, { message: "Name should be at least 4 character long" })
    .optional(),
  email: z
    .string()
    .email()
    .min(2, { message: "Email should be at least 2 character long" }),
  password: z
    .string()
    .min(6, { message: "password should be at least 6 character long" }),
  imageUrl: z.any(),
});
export type CreateUserType = z.infer<typeof CreateUserSchema>;

// Post
export const CreatePostSchema = z.object({
  title: z
    .string()
    .min(4, { message: "Title should be at least 4 character long" }),
  subtitle: z
    .string()
    .min(2, { message: "Subtitle should be at least 2 character long" }),
  body: z
    .string()
    .min(6, { message: "Body should be at least 6 character long" }),
  imageUrl: z.any(),
  // author: z
  //   .string()
  //   .min(2, { message: "Author should be at least 2 character long" }),
  category: z
    .string()
    .min(2, { message: "Category should be at least 2 character long" }),
});
export type CreatePostType = z.infer<typeof CreatePostSchema>;

// Contact
export const ContactSchema = z.object({
  name: z
    .string()
    .min(4, { message: "Name should be at least 4 character long" }),
  email: z.string().email(),
  message: z
    .string()
    .min(6, { message: "Message should be at least 6 character long" }),
});
export type ContactType = z.infer<typeof ContactSchema>;

// Comment
export const CommentSchema = z.object({
  // author: z
  //   .string()
  //   .min(4, { message: "Name should be at least 4 character long" }),
  comment: z
    .string()
    .min(1, { message: "Comment should be at least 1 character long" }),
});
export type CommentType = z.infer<typeof CommentSchema>;

// User Profile
export const ProfileSchema = z.object({
  name: z
    .string()
    .min(4, { message: "Name should be at least 4 character long" }),
  email: z.string().email(),
  about: z
    .string()
    .min(6, { message: "Message should be at least 6 character long" }),
  imageUrl: z.any(),
});
export type ProfileType = z.infer<typeof ProfileSchema>;
