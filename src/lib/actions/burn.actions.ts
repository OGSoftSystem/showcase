"use server";

import { revalidatePath } from "next/cache";
import connectToDatabase from "../database/mongodb";
import { BurnType } from "../validation";
import { handleError } from "../utils";
import Burn from "../database/models/burn.model";

export const createBurnValue = async (data: BurnType) => {
  try {
    await connectToDatabase();

    const newValue = await Burn.create(data);
    if (newValue) {
      revalidatePath("/burn");
    }

    return JSON.parse(JSON.stringify(newValue));
  } catch (error) {
    return {
      error: handleError(error),
    };
  }
};

export const findBurnValue = async () => {
  try {
    await connectToDatabase();

    const value = await Burn.find();

    return JSON.parse(JSON.stringify(value));
  } catch (error) {
    return {
      error: handleError(error),
    };
  }
};

export const updateBurnValue = async (burnId: string, { value }: BurnType) => {
  try {
    await connectToDatabase();

    const updatedValue = await Burn.findByIdAndUpdate(
      burnId,
      {
        $set: {
          value,
        },
      },
      { new: true }
    );

    if (updatedValue) {
      revalidatePath("/burn");
    }
    return JSON.parse(JSON.stringify(updatedValue));
  } catch (error) {
    return {
      error: handleError(error),
    };
  }
};
