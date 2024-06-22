"use client";

import Spinner from "@/components/shared/Spinner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import { sendMessage } from "@/lib/actions/email.actions";
import { ContactSchema, ContactType } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageCircle, X } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "../ui/use-toast";

const ContactForm = ({ className }: { className?: string }) => {
  const { toast } = useToast();

  const initialValue = {
    name: "",
    email: "",
    message: "",
  };

  const form = useForm<ContactType>({
    defaultValues: initialValue,
    resolver: zodResolver(ContactSchema),
  });

  const [toggled, setToggled] = useState(false);

  const onSubmitForm = async (data: ContactType) => {
    const message = await sendMessage(data);
    if (message?.error) {
      console.log(message.error);
      toast({
        title: "An error occurred.",
        description: message.error,
        variant: "destructive",
        className: "bg-red-400 text-white",
      });
    }

    toast({
      title: "Message sent successfully.",
      description: "We will get back to you shortly. Thank you.",
      variant: "default",
      className: "bg-[#1967FE] text-white",
    });
    form.reset();
    setToggled(false);
  };

  return (
    <div className={className}>
      {!toggled ? (
        <MessageCircle
          onClick={() => setToggled(true)}
          className="cursor-pointer hover:text-grad-3 hover:animate-pulse"
          size={60}
        />
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmitForm)}
            className="w-[320px] md:w-[400px] flex flex-col space-y-2 bg-grad-2/10 rounded-md p-8"
          >
            <div className="flex w-full justify-between mb-4">
              <p className="text-xl font-hind text-muted-foreground">
                Leave us a message.
              </p>
              <X onClick={() => setToggled(false)} />
            </div>

            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>

                  <FormControl>
                    <Input {...field} placeholder="email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="message"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>

                  <FormControl>
                    <Textarea rows={5} {...field} placeholder="message" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              className="btn bg-grad-2 text-white"
              type="submit"
              disabled={form.formState.isSubmitting}
            >
              Send
              {form.formState.isSubmitting && <Spinner />}
            </Button>
          </form>
        </Form>
      )}
    </div>
  );
};

export default ContactForm;
