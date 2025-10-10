import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { FormProvider, useForm } from "react-hook-form";
import type { IFormProps } from "../../types/components/FormProps";
import { getSchemaData } from "../../utils/schema";
import Stack from "react-bootstrap/Stack";
import { motion } from "motion/react";

function Form({ title, children, type }: IFormProps) {
  const { schema, defaultValues } = getSchemaData(type);

  const methods = useForm({
    defaultValues,
    resolver: zodResolver(schema),
    mode: "all",
  });

  return (
    <Stack className="m-auto p-5">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="text-primary text-center fs-1 mb-4"
        style={{ textShadow: "2px 1px 2px #3C1D30" }}
      >
        {title}
      </motion.h1>
      <FormProvider {...methods}>{children}</FormProvider>
    </Stack>
  );
}

export default Form;
