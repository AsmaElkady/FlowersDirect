import { Form } from "react-bootstrap"

interface CategoryColorProps {
  form: {
    category: string;
    color: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  categories: string[];
  colors: string[];
}

function CategoryColor({
    form,
    handleChange,
    categories,
    colors,
}: CategoryColorProps) {
    return (
        <>
            <div className="mt-3">
                <h5>Categories</h5>
                <Form.Label>Product Category</Form.Label>
                <Form.Select
                    name="category"
                    value={form.category}
                    className="w-75"
                    required
                    onChange={handleChange}>
                    <option value="">Select Category</option>
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat}
                        </option>
                    ))}
                </Form.Select>

                <hr />
                <h5>Colors</h5>
                <Form.Label>Product Color</Form.Label>
                <Form.Select
                    name="color"
                    value={form.color}
                    className="w-75"
                    required
                    onChange={handleChange}
                >
                    <option value="">Select Color</option>
                    {colors.map((color) => (
                        <option key={color} value={color}>
                            {color}
                        </option>
                    ))}
                </Form.Select>
            </div>
        </>
    )
}

export default CategoryColor
