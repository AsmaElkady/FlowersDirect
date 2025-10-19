import { Button, Col, Form, Row } from "react-bootstrap"
import { type AppDispatch, useAppDispatch, type RootState } from "../../../../redux/store";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { Product } from "../../../../classes/productClass";
import BasicDetails from "./components/BasicDetails";
import PriceInventory from "./components/PriceInventory";
import ImageUpload from "./components/ImageUpload";
import CategoryColor from "./components/CategoryColor";
import Swal from "sweetalert2";

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
        rating: "⭐⭐⭐⭐",
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const newProduct = new Product(
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
            Swal.fire({
                icon: "success",
                title: "Success!",
                text: "Product added successfully!",
                confirmButtonColor: "#4e0629",
                background: "#fbeff4",
            });
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
            Swal.fire({
                icon: "error",
                title: "Oops!",
                text: "Failed to add product. Please try again.",
                confirmButtonColor: "#dc466a",
                background: "#fbeff4",
            });
        }
    };

    return (
        <div className="p-3">
            <h4 className="mb-3">Add New Product</h4>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col md={6}>
                        <div className="p-4 border-1 border-black shadow">
                            <BasicDetails form={form} handleChange={handleChange} />
                            <PriceInventory form={form} handleChange={handleChange} />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="p-4 border-1 border-black shadow">
                            <ImageUpload form={form} setForm={setForm} />
                            <CategoryColor form={form}
                                handleChange={handleChange}
                                categories={categories}
                                colors={colors} />
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
