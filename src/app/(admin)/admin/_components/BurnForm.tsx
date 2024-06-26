"use client";

import Spinner from "@/components/shared/Spinner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { createBurnValue, updateBurnValue } from "@/lib/actions/burn.actions";
import { BurnSchema, BurnType } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

type BurnFormType = {
  currentValue: { value: string };
  currentId: string;
};

const BurnForm = ({ currentValue, currentId }: BurnFormType) => {
  const initialValue = { value: "" };
  const form = useForm<BurnType>({
    defaultValues: currentValue
      ? { ...currentValue, value: currentValue.value }
      : initialValue,
    resolver: zodResolver(BurnSchema),
  });

  const router = useRouter();

  const onSubmitForm = async (data: BurnType) => {
    try {
      if (currentValue) {
        //update
        const updatedValue = await updateBurnValue(currentId, data as BurnType);
        if (updatedValue?.error) {
          toast({
            title: "An error occurred.",
            description: updatedValue.error,
            variant: "destructive",
            className: "bg-red-400 text-white",
          });
        }
        toast({
          title: "Value updated successfully",
          description: "New burn currentValue add",
          variant: "default",
          className: "bg-[#1967FE] text-white",
        });
      } else {
        const newValue = await createBurnValue(data);
        if (newValue?.error) {
          toast({
            title: "An error occurred.",
            description: newValue.error,
            variant: "destructive",
            className: "bg-red-400 text-white",
          });
        }
        toast({
          title: "Value created successfully",
          description: "New burn currentValue add",
          variant: "default",
          className: "bg-[#1967FE] text-white",
        });
      }
    } catch (error) {
      throw error;
    } finally {
      router.push("/burn");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmitForm)}
        className="max-w-4xl w-full flex flex-col space-y-4"
      >
        <FormField
          name="value"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} placeholder="Value" />
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
          {currentValue ? "Update" : "Create"}
          {form.formState.isSubmitting && <Spinner />}
        </Button>
      </form>
    </Form>
  );
};

export default BurnForm;
