import { z } from "zod";

export const addCategorySchema = z.object({
  name: z
    .string()
    .regex(
      /^[A-Z][a-zA-Z]{1,5}/,
      "Please enter a valid name (e.g., Rose)"
    ),
  desc: z
    .string()
    .min(3, "Description must be at least 3 characters long")
    .max(150, "Description can't exceed 150 characters"),
  image: z
    .string()
    // .url("Please enter a valid image URL (e.g., https://...)")
    .optional(),
});

export type AddCategorySchemaType = z.infer<typeof addCategorySchema>;

export const addCategoryDefaultValues: AddCategorySchemaType = {
  name: "",
  desc: "",
  image: "",
};
