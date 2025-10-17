import { Container, Row, Col, Spinner } from "react-bootstrap";
import Filter from "../../components/Filter/Filter";
import "../../index.css";
import type { Product } from "../../Types/Product";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";

import { useMemo, useState } from "react";
import ProductList from "../../components/ProductList/ProductList";

export default function Products() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;
  const [filters, setFilters] = useState({
    color: "",
    category: "",
    price: 500,
  });

  async function getProducts() {
    const res = await axios.get(`http://localhost:3000/products`, {
      headers: {
        "Cache-Control": "no-store",
        Pragma: "no-cache",
      },
    });
    return res.data;
  }

  const {
    data = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["Products"],
    queryFn: getProducts,
    refetchOnWindowFocus: false,
    staleTime: 0,
  });

  const minPrice = useMemo(() => {
    return data.length > 0 ? Math.min(...data.map((p: Product) => p.price)) : 0;
  }, [data]);

  const maxPrice = useMemo(() => {
    return data.length > 0 ? Math.max(...data.map((p: Product) => p.price)) : 0;
  }, [data]);

  const filteredProducts = useMemo(() => {
    if (!data || data.length === 0) return [];

    const noFiltersApplied =
      !filters.color && !filters.category && filters.price === 0;

    if (noFiltersApplied) return data;

    return data.filter((product: Product) => {
      const matchesColor = filters.color
        ? product.color?.toLowerCase() === filters.color.toLowerCase()
        : true;
      const matchesCategory = filters.category
        ? product.category?.toLowerCase() === filters.category.toLowerCase()
        : true;
      const matchesPrice = filters.price
        ? product.price <= filters.price
        : true;

      return matchesColor && matchesCategory && matchesPrice;
    });
  }, [data, filters]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  if (isLoading)
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" role="status" variant="primary" />
      </div>
    );
  if (isError)
    return <h2>Errors....Failed to load products, Please try again later.</h2>;

  return (
    <Container className="py-5">
      <h2 className="fw-bold mb-4 text-primary">Shop All Flowers</h2>
      <Row>
        <Col md={3}>
          <Filter
            onFilterChange={setFilters}
            minPrice={minPrice}
            maxPrice={maxPrice}
            allProducts={data}
          />
        </Col>
        <Col md={9}>
          <ProductList
            products={paginatedProducts}
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </Col>
      </Row>
    </Container>
  );
}
