import { Form } from "react-bootstrap";

function ImageUpload({ form, setForm }: any) {
    return (
        <>
            <h4 className="mb-3">Upload Product Image</h4>
            <Form.Control
                type="file"
                accept="image/*"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const file = e.currentTarget.value.split("\\").pop();
                    if (file) {
                        setForm({ ...form, image: `/src/assets/${file}` });
                    }
                }} />
            {form.image && (
                <div className="mt-3">
                    <img src={form.image} alt="preview" width={120} />
                </div>
            )}
        </>
    )
}

export default ImageUpload
