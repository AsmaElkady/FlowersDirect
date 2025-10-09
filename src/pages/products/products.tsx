import { Container, Row, Col } from "react-bootstrap";
import Filter from "../../components/Filter/Filter";
import "../../index.css";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";

export interface Product {
    id: string;
    name: string;
    desc: string;
    image: string;
    colors: string[];
    category: string;
    price: number;
    orderedItems: number;
    rating: number;
    reviews: {
        total: number;
        breakdown: Record<string, number>;
    };
    isFavorite: boolean;
    totalQuantity: number;
    refund: number;
}


export default function Products() {
    const [products, setProducts] = useState<Product[]>([]);
    // const [apiError, setApiError] = useState("");
    useEffect(() => {
        fetch("http://localhost:3000/products")
            .then(res => res.json())
            .then(data => setProducts(data));        
    }, []);
    return (
        <Container className="py-5">
            <h2 className="fw-bold mb-4 text-primary">Shop All Flowers</h2>
            <Row>
                <Col md={3}>
                    <Filter />
                </Col>
                <Col md={9}>
                    <Row className="g-4">
                        {products.map((product) => (
                            <Col key={product.id} md={4}>
                                <ProductCard
                                    id={product.id}
                                    name={product.name}
                                    image={product.image}
                                    price={product.price}
                                    category={product.category}
                                />
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}