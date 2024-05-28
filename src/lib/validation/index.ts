import { z } from "zod";

export const SignInSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "password should be at least 6 character long" }),
});
export type SignInType = z.infer<typeof SignInSchema>;

export const CreateUserSchema = z.object({
  username: z
    .string()
    .min(4, { message: "password should be at least 4 character long" }),
  email: z
    .string()
    .email()
    .min(2, { message: "password should be at least 2 character long" }),
  password: z
    .string()
    .min(6, { message: "password should be at least 6 character long" }),
  imageUrl: z.any(),
});
export type CreateUserType = z.infer<typeof CreateUserSchema>;


// UPDATE USER
export const UpdateUserSchema = z.object({
  firstName: z.string().min(4, {
    message: "not less than 4 character short",
  }),
  lastName: z.string().min(4, {
    message: "not less than 4 character short",
  }),
  email: z.string().email().min(4, {
    message: "not less than 4 character short",
  }),
  phone: z.string().min(6, {
    message: "not less than 6 character short",
  }),

  imageUrl: z.any(),
});
export type UpdateUserType = z.infer<typeof UpdateUserSchema>;
