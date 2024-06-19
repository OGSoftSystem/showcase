import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import parse from "html-react-parser";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export interface SessionData {
//   userId?: string;
//   name?: string;

//   isLoggedIn: boolean;
// }
// export const defaultSession: SessionData = {
//   name: "",
//   isLoggedIn: false,
// };
// export const sessionOptions: SessionOptions = {
//   password: process.env.SECRET_KEY as string,
//   cookieName: "liquity",
//   cookieOptions: {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//   },
// };

export function handleError(error: unknown) {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Oops, something went wrong.";
  }
  return message;
}

export const imgBaseUrl = process.env.IMAGE_URL;

export const formatDateTime = (date: Date) => {
  const formattedDate = new Intl.DateTimeFormat("en-Us", {
    dateStyle: "short",
    timeStyle: "short",
    // timeZone: "GMT+1",
    // timeZoneName: "short",
  }).format(date);

  return formattedDate;
};

// Clean Text for Rich Text Editor
export const cleanText = (text: string) => parse(text);

export const googleImageBaseUrl =
  "https://lh3.googleusercontent.com/a/ACg8ocKG7i4YsQ7JPPWQQgNk2ut3HZgdSyC3Ht_hz_s992Aa5iJ_J94=s96-c";