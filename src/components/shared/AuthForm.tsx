"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreateUserSchema,
  CreateUserType,
  SignInSchema,
  SignInType,
} from "@/lib/validation";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createUser } from "@/lib/actions/user.actions";
import Spinner from "./Spinner";
// import { signIn } from "@/lib/actions/auth.actions";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { toast } from "../ui/use-toast";
import { IUser } from "@/lib/database/models/user.model";
import ImageUploader from "./ImageUploader";
import { signIn } from "next-auth/react";

type AuthFormType = {
  type: "SignIn" | "SignUp";
};

const AuthForm = ({ type }: AuthFormType) => {
  const SIGN_UP = type === "SignUp";
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [imgUrl, setImgUrl] = useState("");

  const initialValue = {
    name: "",
    email: "",
    password: "",
    imageUrl: "",
  };

  const form = useForm<CreateUserType | SignInType>({
    resolver: zodResolver(SIGN_UP ? CreateUserSchema : SignInSchema),
    defaultValues: SIGN_UP ? initialValue : { email: "", password: "" },
  });

  const onSubmit = async (data: CreateUserType | SignInType) => {
    if (SIGN_UP) {
      try {
        const newUser = await createUser(data as IUser);
        if (newUser?.error) {
          toast({
            title: "Something went wrong!",
            description: newUser.error,
            variant: "destructive",
            duration: 5000,
          });

          router.replace("/");
        }

        router.push("/auth/sign-in");
      } catch (error) {
        throw error;
      }
    } else {
      try {
        const user = await signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false,
        });

        if (user?.error) {
          toast({
            title: "Something went wrong!",
            description: user.error,
            variant: "destructive",
            duration: 5000,
          });
          return;
        }
        router.refresh();
        router.push("/");
      } catch (error) {
        throw error;
      }
    }
  };

  const handleShowPassword = () => {
    setShowPassword((p: boolean) => !p);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="form">
        {SIGN_UP && (
          <>
            <div className="py-1">
              <FormField
                name="imageUrl"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <ImageUploader
                        publicId={field.value}
                        onValueChange={(e) => field.onChange(e)}
                        setImgUrl={setImgUrl}
                        imgUrl={imgUrl}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="py-1">
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        className="form-input"
                        placeholder="User name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </>
        )}

        <div className="py-2">
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    className="form-input"
                    placeholder="Email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="py-2">
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="inline-flex w-full items-center relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      className="form-input"
                      placeholder="Password"
                      {...field}
                    />
                    <div
                      onClick={handleShowPassword}
                      className="absolute right-6"
                    >
                      {showPassword ? (
                        <EyeClosedIcon className="w-6 h-6 text-APP_GREEN" />
                      ) : (
                        <EyeOpenIcon className="w-6 h-6 text-APP_GREEN" />
                      )}
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-2 w-full items-center">
          <Button
            disabled={form.formState.isSubmitting}
            type="submit"
            className="form-btn"
            size="lg"
          >
            {SIGN_UP ? "sign up" : "sign in with credentials"}

            {form.formState.isSubmitting && <Spinner />}
          </Button>
          <span>
            {SIGN_UP
              ? "Already have an account ? "
              : "Don't have an account ? "}

            <Link
              className="text-grad-3 hover:text-grad-2"
              href={SIGN_UP ? `/auth/sign-in` : "/auth/sign-up"}
            >
              {SIGN_UP ? "sign-in" : "sign-up"}
            </Link>
          </span>
        </div>
      </form>
    </Form>
  );
};

export default AuthForm;
