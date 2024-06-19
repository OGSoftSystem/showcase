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
import { ContactSchema, ContactType } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageCircle, X } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = ({ className }: { className?: string }) => {
  const { data: session } = useSession();

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
  const router = useRouter();

  const onSubmitForm = async (data: ContactType) => {
    console.log(data);
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
