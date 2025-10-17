import zod from "zod";
import { PassRegex } from "../constants/main";

export const loginSchema = zod.object({
  email: zod.email("Please enter a correct email"),
  password: zod.string().regex(PassRegex, "Please enter a strong passwrod"),
});

export type LoginSchemaType = zod.infer<typeof loginSchema>;

export const loginDefaultValues = {
  email: "",
  password: "",
};

export const signUpSchema = zod
  .object({
    username: zod
      .string()
      .min(3, "Please Enter your fullname")
      .max(15, "max length is 15"),
    email: zod.email("Please Enter a correct email"),
    password: zod.string().regex(PassRegex, "Please enter a strong password"),
    re_password: zod.string(),
  })
  .refine((data) => data.password === data.re_password, {
    message: "Passwords do not match",
    path: ["re_password"],
  });

export type SignUpSchemaType = zod.infer<typeof signUpSchema>;

export const signupDefaultValues = {
  name: "",
  email: "",
  password: "",
  re_password: "",
};

export const forgetPassSchema = zod.object({
  email: zod.email("Please enter a correct email"),
});
export type ForgetPassSchemaType = zod.infer<typeof forgetPassSchema>;

export const forgetPassDefaultValues = {
  email: "",
};

export const resetPassSchema = zod
  .object({
    password: zod.string().regex(PassRegex, "Please enter a strong password"),
    re_password: zod.string(),
  })
  .refine((data) => data.password === data.re_password, {
    message: "Passwords do not match",
    path: ["re_password"],
  });

export type ResetPassSchemaType = zod.infer<typeof resetPassSchema>;

export const ResetPassDefaultValues = {
  password: "",
  re_password: "",
};

export const getSchemaData = (type: string) => {
  switch (type) {
    case "login":
      return { schema: loginSchema, defaultValues: loginDefaultValues };
    case "signup":
      return { schema: signUpSchema, defaultValues: signupDefaultValues };
    case "forgetPass":
      return {
        schema: forgetPassSchema,
        defaultValues: forgetPassDefaultValues,
      };
    case "resetPass":
      return { schema: resetPassSchema, defaultValues: ResetPassDefaultValues };
    default:
      throw new Error("Invalid Type");
  }
};
