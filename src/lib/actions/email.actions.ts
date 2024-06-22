"use server";

import sendEmail from "../nodemailer";
import { handleError } from "../utils";
import { ContactType } from "../validation";

export const sendMessage = async (data: ContactType) => {
  try {
    await sendEmail({
      from: data.name,
      to: process.env.EMAIL as string,
      subject: data.email,
      html: data.message,
    });
  } catch (error) {
    return {
      error: handleError(error),
    };
  }
};
