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
  author: z
    .string()
    .min(2, { message: "Author should be at least 2 character long" }),
  category: z
    .string()
    .min(2, { message: "password should be at least 2 character long" }),
});
export type CreatePostType = z.infer<typeof CreatePostSchema>;

// UPDATE POST
export const UpdatePostSchema = z.object({
  title: z
    .string()
    .min(4, { message: "body should be at least 4 character long" }),
  author: z
    .string()
    .min(2, { message: "password should be at least 2 character long" }),
  body: z
    .string()
    .min(6, { message: "password should be at least 6 character long" }),
  imageUrl: z.any(),
  subtitle: z
    .string()
    .min(2, { message: "password should be at least 2 character long" }),

  category: z
    .string()
    .min(2, { message: "password should be at least 2 character long" }),
});
export type UpdatePostType = z.infer<typeof UpdatePostSchema>;
