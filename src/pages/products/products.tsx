import { Container, Row, Col, Spinner } from "react-bootstrap";
import Filter from "../../components/Filter/Filter";
import "../../index.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import type { Product } from "../../types/Product";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";


export default function Products() {
    async function getProducts() {
        const res = await axios.get("http://localhost:3000/products");
        return res.data;
    }
    let {data , isLoading , isError} = useQuery({
        queryKey: ["Products"],
        queryFn: getProducts,
    });

    if (isLoading)
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" role="status" variant="primary" />
      </div>
    );
    if (isError) return <h2>Errors....Failed to load products, Please try again later.</h2>
    
    return (
        <Container className="py-5">
            <h2 className="fw-bold mb-4 text-primary">Shop All Flowers</h2>
            <Row>
                <Col md={3}>
                    <Filter />
                </Col>
                <Col md={9}>
                    <Row className="g-4">
                        {data.map((product: Product) => (
                            <Link to={`/product/${product.id}`}>
                            <Col key={product.id} md={4}>
                                <ProductCard product={product}/>
                            </Col>
                            </Link>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}