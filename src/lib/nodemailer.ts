import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

type MailOptionType = {
  from: string;
  to: string;
  subject?: string;
  html?: string;
};

const sendEmail = async (options: MailOptionType) => {
  const transporter = nodemailer.createTransport({
    service: process.env.SERVICE,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions: MailOptionType = {
    from: options.from,
    to: options.to,
    subject: options.subject,
    html: options.html,
  };

  try {
    transporter.sendMail(
      mailOptions,
      function (err: Error | null, info: SMTPTransport.SentMessageInfo) {
        if (err) throw err;
      }
    );
  } catch (error) {
    throw error;
  }
};

export default sendEmail;
