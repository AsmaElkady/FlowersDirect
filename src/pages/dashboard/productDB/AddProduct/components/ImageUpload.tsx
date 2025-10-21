import { Form } from "react-bootstrap";
import { useFormContext } from "react-hook-form";

function ImageUpload() {
    const { setValue, watch } = useFormContext();
    const image = watch("image");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.value.split("\\").pop();
    if (file) {
      setValue("image", `/src/assets/${file}`);
    }
  };
    return (
        <>
            <h4 className="mb-3">Upload Product Image</h4>
            <Form.Control
                type="file"
                accept="image/*"
                onChange={handleFileChange} />
            {image && (
                <div className="mt-3">
                    <img src={image} alt="preview" width={120} />
                </div>
            )}
        </>
    )
}

export default ImageUpload
