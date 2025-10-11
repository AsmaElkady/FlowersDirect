import { Container, Row, Col, Spinner, Pagination } from "react-bootstrap";
import Filter from "../../components/Filter/Filter";
import "../../index.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import type { Product } from "../../types/Product";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function Products() {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalItems, setTotalItems] = useState<number>(0);
    const itemsPerPage = 6;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    async function getProducts() {
        const res = await axios.get(`http://localhost:3000/products?_page=${currentPage}&_limit=${itemsPerPage}`,
            {
                headers: {
                    "Cache-Control": "no-store",
                    Pragma: "no-cache",
                },
            });

        const totalCount = res.headers["x-total-count"];

        console.log("x-total-count:", totalCount);
        console.log("currentPage:", currentPage);
        console.log("totalPages:", Math.ceil(totalCount / itemsPerPage));

        if (totalCount) setTotalItems(Number(totalCount));
        return res.data;
    }

    let { data, isLoading, isError } = useQuery({
        queryKey: ["Products", currentPage],
        queryFn: getProducts,
        placeholderData: (prev) => prev,
        refetchOnWindowFocus: true,
        staleTime: 0
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
                            <Col key={product.id} md={4}>
                                <ProductCard product={product} />
                            </Col>
                        ))}
                    </Row>
                    {/* Pagination */}
                    <div className="d-flex justify-content-center mt-4 text-danger">
                        <Pagination>
                            {[...Array(totalPages)].map((_, i) => (
                                <Pagination.Item
                                    key={i + 1}
                                    active={i + 1 === currentPage}
                                    onClick={() => setCurrentPage(i + 1)}
                                >
                                    {i + 1}
                                </Pagination.Item>
                            ))}
                        </Pagination>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}