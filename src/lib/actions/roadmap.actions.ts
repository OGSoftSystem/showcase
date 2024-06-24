"use server";

import { revalidatePath } from "next/cache";
import Roadmap from "../database/models/roadmap.model";
import connectToDatabase from "../database/mongodb";
import { handleError } from "../utils";

export const createRoadmap = async (data: {
  title: string;
  completed: boolean;
}) => {
  try {
    await connectToDatabase();

    const newRoadmap = await Roadmap.create(data);
    if (newRoadmap) {
      revalidatePath("/admin/");
    }
    return JSON.parse(JSON.stringify(newRoadmap));
  } catch (error) {
    return {
      error: handleError(error),
    };
  }
};

export const findRoadmapById = async (roadmapId: string) => {
  try {
    await connectToDatabase();

    const roadmap = await Roadmap.findById(roadmapId);

    return JSON.parse(JSON.stringify(roadmap));
  } catch (error) {
    return {
      error: handleError(error),
    };
  }
};

export const findAllRoadmap = async () => {
  try {
    await connectToDatabase();

    const allRoadmap = await Roadmap.find();

    return JSON.parse(JSON.stringify(allRoadmap));
  } catch (error) {
    return {
      error: handleError(error),
    };
  }
};

export const findRoadmapByIdUpdate = async (
  roadmapId: string,
  roadmap: { title: string; completed: boolean }
) => {
  try {
    await connectToDatabase();

    const updatedRoadmap = await Roadmap.findByIdAndUpdate(roadmapId, roadmap, {
      new: true,
    });

    if (updatedRoadmap) {
      revalidatePath("/admin/");
    }

    return JSON.parse(JSON.stringify(updatedRoadmap));
  } catch (error) {
    return {
      error: handleError(error),
    };
  }
};

export const toggleRoadmapComplete = async (
  roadmapId: string,
  completed: boolean
) => {
  try {
    await connectToDatabase();

    const updatedRoadmap = await Roadmap.findByIdAndUpdate(
      roadmapId,
      {
        $set: {
          completed: completed,
        },
      },
      {
        new: true,
      }
    );

    return JSON.parse(JSON.stringify(updatedRoadmap));
  } catch (error) {
    return {
      error: handleError(error),
    };
  }
};

export const findRoadmapByIdAndDelete = async (roadmapId: string) => {
  try {
    await connectToDatabase();

    const deletedRoadmap = await Roadmap.findByIdAndDelete(roadmapId);
    if (deletedRoadmap) {
      revalidatePath("/admin/");
    }

    return JSON.parse(JSON.stringify(deletedRoadmap));
  } catch (error) {
    return {
      error: handleError(error),
    };
  }
};
