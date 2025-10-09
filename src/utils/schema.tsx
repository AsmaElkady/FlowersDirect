import zod from "zod";

export const loginSchema = zod.object({
  email: zod.email("Please enter a correct email"),
  password: zod
    .string()
    .regex(/^[A-Z][a-z0-9]{5,8}$/, "Please enter a strong passwrod"),
});

export const loginDefaultValues = {
  email: "",
  password: "",
};

export const signUpSchema = zod
  .object({
    name: zod
      .string()
      .min(3, "Please Enter your fullname")
      .max(15, "max length is 15"),
    email: zod.email("Please Enter a correct email"),
    password: zod
      .string()
      .regex(/^[A-Z][a-z0-9]{5,8}$/, "Please enter a strong password"),
    re_password: zod.string(),
    // age: zod.coerce
    //   .number<string>({ invalide_type_error: "Age must be a number!" })
    //   .min(12, "You need to be above 11"),
  })
  .refine((data) => data.password === data.re_password, {
    message: "Passwords do not match",
    path: ["re_password"],
  });

export const signupDefaultValues = {
  name: "",
  email: "",
  password: "",
  re_password: "",
  //   age: "",
};

export const getSchemaData = (type: string) => {
  switch (type) {
    case "login":
      return { schema: loginSchema, defaultValues: loginDefaultValues };
    case "signup":
      return { schema: signUpSchema, defaultValues: signupDefaultValues };
    default:
      throw new Error("Invalid Type");
  }
};
