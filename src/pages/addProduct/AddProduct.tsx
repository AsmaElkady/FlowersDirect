import { Button, Col, Form, Row } from "react-bootstrap"
import { type AppDispatch, useAppDispatch, type RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { Product } from "../../classes/productClass";

function AddProduct() {
    const dispatch = useAppDispatch<AppDispatch>();

    const { items: products } = useSelector(
        (state: RootState) => state.products
    );

    useEffect(() => {
        dispatch(Product.getProducts());
    }, [dispatch]);

    const [form, setForm] = useState({
        name: "",
        desc: "",
        price: 0,
        totalQuantity: 0,
        category: "",
        color: "",
        image: "",
        rating: "0",
        isFavorite: false,
    });


    const categories = useMemo(() => {
        const unique = new Set(products.map((p) => p.category));
        return Array.from(unique);
    }, [products]);

    const colors = useMemo(() => {
        const unique = new Set(products.map((p) => p.color));
        return Array.from(unique);
    }, [products]);

    const handleChange =
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
            const { name, value } = e.target;
            setForm((prev) => ({ ...prev, [name]: value }));
        };

    const getNextId = () => {
        if (products.length === 0) return 1;
        const ids = products.map((p) => p.id);
        return Math.max(...ids) + 1;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const newProduct = new Product(
            getNextId(),
            form.name,
            Number(form.price),
            form.image,
            form.desc,
            form.category,
            form.color,
            form.rating,
            form.isFavorite,
            Number(form.totalQuantity)
        );

        try {
            await dispatch(Product.addProduct(newProduct)).unwrap();
            alert("Product added successfully!");
            setForm({
                name: "",
                desc: "",
                price: 0,
                totalQuantity: 0,
                category: "",
                color: "",
                image: "",
                rating: "⭐⭐⭐⭐",
                isFavorite: false,
            });
        } catch (error) {
            console.error("Error adding product:", error);
            alert("Failed to add product");
        }
    };

    return (
        <div className="p-3">
            <h4 className="mb-3">Add New Product</h4>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col md={6}>
                        <div className="p-4 border-1 border-black shadow">
                            <h4 className="mb-3">Basic Details</h4>
                            <Form.Group className="mb-3">
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control
                                    name="name"
                                    value={form.name}
                                    className="w-50"
                                    placeholder="name"
                                    required
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Product Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    name="desc"
                                    value={form.desc}
                                    className="w-50"
                                    placeholder="description"
                                    required
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <hr />
                            <div>
                                <h5>Pricing</h5>
                                <Form.Group className="mb-3">
                                    <Form.Label>Price (EGP)</Form.Label>
                                    <Form.Control
                                        type="number"
                                        min={0}
                                        max={500}
                                        value={form.price}
                                        name="price"
                                        className="w-50"
                                        placeholder="150 EGP"
                                        required
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </div>
                            <div className="section">
                                <h5>Inventory</h5>
                                <Row>
                                    <Col>
                                        <Form.Label>Stock Quantity</Form.Label>
                                        <Form.Control
                                            name="totalQuantity"
                                            type="number"
                                            min={0}
                                            className="w-50 mb-3"
                                            placeholder="quantity"
                                            value={form.totalQuantity}
                                            required
                                            onChange={handleChange}
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Label>Stock Status</Form.Label>
                                        <Form.Select>
                                            <option>In Stock</option>
                                            <option>Out of Stock</option>
                                        </Form.Select>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="p-4 border-1 border-black shadow">
                            <h4 className="mb-3">Upload Product Image</h4>
                            <Form.Control
                                type="file"
                                accept="image/*"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    const file = e.currentTarget.files?.[0];
                                    if (file) {
                                        const imageUrl = URL.createObjectURL(file);
                                        setForm({ ...form, image: imageUrl });
                                    }
                                }} />
                            {form.image && (
                                <div className="mt-3">
                                    <img src={form.image} alt="preview" width={120} />
                                </div>
                            )}
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
                        </div>
                        <Button
                            type="submit"
                            variant="outline-primary"
                            className="mt-3"
                        >
                            Publish Product
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default AddProduct
