import { useFormContext } from "react-hook-form";
import MyInput from "../../../../../components/Inputs/MyInput";

function BasicDetails() {
  const { register } = useFormContext();
  return (
    <>
      <h4 className="mb-3">Basic Details</h4>
      <MyInput id="name" label="Product Name" type="text" className="w-50" {...register("name")} />
      <MyInput id="desc" label="Description" type="text" className="w-50" {...register("desc")} />
      <hr />
    </>
  )
}

export default BasicDetails
