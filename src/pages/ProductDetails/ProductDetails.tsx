import { Container, Row, Col, Button } from "react-bootstrap";
import leave from "../../assets/Blackgroud img 1.png";
import leaveRight from "../../assets/Blackgroud img 2.png";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";
import "../../style/ProductDetails.css";
import MultiImageSlider from "../../sections/home/carousel";
import Swal from "sweetalert2";
import { addOrUpdateCartApi } from "../../redux/slices/cartApi";
import  { useState } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../redux/store";

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastBg, setToastBg] = useState<"danger" | "primary">("primary");
    
  const showNotification = (message: string, bg: "danger" | "primary") => {
    setToastMessage(message);
    setToastBg(bg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };
  const {
    data: product,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products", id],
    queryFn: () =>
      axios.get(`http://localhost:3000/products/${id}`).then((res) => res.data),
  });

  const { data: relatedProductsData } = useQuery({
    queryKey: ["relatedProducts", product?.category],
    queryFn: () =>
      axios
        .get(`http://localhost:3000/products?category=${product.category}`)
        .then((res) => res.data),
    enabled: !!product?.category,
  });
  const handelAddToCart = () => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(addOrUpdateCartApi({ product }));
      showNotification(`🛒 ${name} added to cart!`, "primary");
    } else {
      Swal.fire({
        title: "You Should Login first",
        html: "Please login to continue",
        icon: "error",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        customClass: {
          title: "swal-title",
          htmlContainer: "swal-text",
        },
        willClose: () => {
          navigate("/login");
        },
      });
    }
    console.log("cart");
    
  };

  if (isLoading) return <p className="text-center mt-5">Loading...</p>;
  if (error) return <p className="text-center mt-5">Error fetching product</p>;

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
          <Col lg={4} md={6} xs={12} className="mb-4 mb-lg-0">
            <h2 className="fw-bold product-title">{product.name}</h2>

            <p className="fw-semibold mt-3 product-desc">{product.category}</p>
            <p className="text-muted mt-3 product-price">
              Price: {product.price} EGP
            </p>
            <div className="d-flex gap-3 mt-4">
              <Button
                variant="outline-primary"
                onClick={handelAddToCart}
              >
                Add to Cart
              </Button>
            </div>
          </Col>

          <Col lg={4} md={6} xs={12} className="text-center mb-4 mb-lg-0">
            <div className="imgWrap mx-auto">
              <img
                src={product.image}
                alt={product.name}
                className="flower-img"
              />
            </div>
          </Col>

          <Col lg={4} md={12} xs={12} className="product-description">
            <h5 className="fw-semibold mb-3">Description</h5>
            <p className="text-muted">{product.desc}</p>
          </Col>
        </Row>
        <MultiImageSlider
          title="Shop by category"
          all="ALL CATEGORY"
          data={relatedProductsData}
        />
      </Container>
    </div>
  );
};

export default ProductDetails;
