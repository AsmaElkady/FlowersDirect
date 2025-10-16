import { Container, Row, Col, Button } from "react-bootstrap";
import leave from "../../assets/Blackgroud img 1.png";
import leaveRight from "../../assets/Blackgroud img 2.png";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import "../../style/ProductDetails.css";

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useQuery({
    queryKey: ["products", id],
    queryFn: () =>
      axios.get(`http://localhost:3000/products/${id}`).then((res) => res.data),
  });

  if (isLoading) return <p className="text-center mt-5">Loading...</p>;
  if (error) return <p className="text-center mt-5">Error fetching product</p>;

  const product = data;

  return (
    <div className="product-section position-relative bg-light">
      <img
        src={leave}
        alt="leaf left"
        className="leaf-left position-absolute"
      />
      <img
        src={leaveRight}
        alt="leaf right"
        className="leaf-right position-absolute"
      />
      <Container className="py-5">
        <Row className="align-items-center">
          <Col md={4} xs={12} className="mb-4 mb-md-0">
            <h2 className="fw-bold product-title">{product.name}</h2>

            <p className="fw-semibold mt-3 product-desc">{product.category}</p>
            <p className="text-muted mt-3 product-price">
              Price: {product.price} EGP
            </p>
            <div className="d-flex gap-3 mt-4">
              <Button variant="dark" className="rounded-pill px-4 py-2">
                Add to Cart
              </Button>
            </div>
          </Col>

          <Col md={4} xs={12} className="text-center mb-4 mb-md-0">
            <div className="imgWrap mx-auto">
              <img src={product.image} alt="flower" className="flower-img" />
            </div>
          </Col>

          <Col md={4} xs={12}>
            <h5 className="fw-semibold mb-3">Description</h5>
            <p className="text-muted">{product.desc}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetails;
