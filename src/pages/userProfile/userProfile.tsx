import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./../../style/auth.css";
import type { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import ModalComponent from "../../components/Modal/Modal";
import EditModal from "./EditModal";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import Lottie from "lottie-react";
import Flower from "../../../public/lottie/Profile.json";
import "./stepper.css";
import Search from "../../components/Inputs/Search";
import SearchIcon from "@mui/icons-material/Search";

type OrderItem = {
  id: string;
  name: string;
  image: string;
  category?: string;
  price: number;
  quantity: number;
};

type Order = {
  id: string;
  orderNumber: string;
  date: string;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  total: number;
  shippingAddress: {
    line1: string;
    notes?: string;
  };
  estimatedDelivery?: string;
};

// Demo data - replace with API call
const mockOrder: Order = {
  id: "1",
  orderNumber: "FD-2025-1047",
  date: "2025-10-15",
  status: "processing",
  items: [
    {
      id: "1",
      name: "Rose Bouquet",
      image: "/img/Home/category/flower1.png",
      category: "Roses",
      price: 150,
      quantity: 2,
    },
    {
      id: "2",
      name: "Tulip Arrangement",
      image: "/img/Home/category/flower2.png",
      category: "Tulips",
      price: 120,
      quantity: 1,
    },
  ],
  subtotal: 420,
  shipping: 30,
  total: 450,
  shippingAddress: {
    line1: "123 Garden Street, Cairo, Egypt",
    notes: "Please call before delivery",
  },
  estimatedDelivery: "2025-10-20",
};

const UserProfile = () => {
  const user = useSelector((state: RootState) => state.auth.user!);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [id, setId] = useState(1);
  const [showInput, setShowInput] = useState(false);
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState("pending");
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!user) {
      navigate("/Login");
    }
  }, [user, navigate]);

  const handleEdit = ({ status, msg }: { status: boolean; msg: string }) => {
    if (status) {
      setShowModal(!showModal);
      toast("Your info changed correctly");
    } else {
      setShowModal(!showModal);
      toast.error(msg);
    }
  };

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setOrder(mockOrder);
      setId(1);
      setLoading(false);
    }, 500);
  }, [id]);

  useEffect(() => {}, [search]);

  if (loading) {
    return (
      <div className="order-details-root">
        <Container className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3 text-muted">Loading order details...</p>
        </Container>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="order-details-root">
        <Container className="text-center py-5">
          <h3>Order not found</h3>
          <p className="text-muted">
            We couldn't find this order. Please check the order number.
          </p>
        </Container>
      </div>
    );
  }

  return (
    <div className="pt-5">
      <Container fluid style={{ height: "100%" }}>
        <Row className="align-items-center " style={{ height: "35vh" }}>
          <div className="position-absolute d-flex flex-column align-items-center ">
            <Lottie animationData={Flower} style={{ width: "10vw" }} />
            <div className="d-flex align-items-center justify-content-center">
              <h2 className="text-center">
                {user?.username}
                <span></span>
              </h2>
              <i
                className="fas fa-edit  ps-2"
                style={{ cursor: "pointer" }}
                onClick={() => setShowModal(true)}
              ></i>
            </div>
            <h5 className="text-center">{user?.email}</h5>
            {/* <MyButton title="edit" varient="primary" isLoading={false} /> */}
          </div>
        </Row>
        <div className="order-progress-card mb-4">
          <div className="d-flex align-items-end justify-content-between">
            <h5 className="section-title">Order History</h5>
            <div className="d-flex align-items-center">
              <div>
                <Search
                  handleSearch={(e) => {
                    setSearch(e.target.value);
                  }}
                  show={showInput}
                />
              </div>
              <Button
                className="bg-light text-primary mx-2"
                onClick={() => setShowInput(!showInput)}
              >
                <SearchIcon />
              </Button>
            </div>
          </div>
          <div className="progress-tracker">
            <Button
              onClick={() => setActive("pending")}
              className={`progress-step bg-transparent border-0 completed ${
                active === "pending" ? "active" : ""
              }`}
            >
              <div className="progress-dot"></div>
              <div className="progress-label">Order Placed</div>
            </Button>
            <div className="progress-line"></div>
            <Button
              onClick={() => setActive("processing")}
              className={`progress-step bg-transparent border-0 completed ${
                active === "processing" ? "active" : ""
              }`}
            >
              <div className="progress-dot"></div>
              <div className="progress-label">Processing</div>
            </Button>
            <div className="progress-line"></div>
            <Button
              onClick={() => setActive("shipped")}
              className={`progress-step bg-transparent border-0 completed ${
                active === "shipped" ? "active" : ""
              }`}
            >
              <div className="progress-dot"></div>
              <div className="progress-label">Shipped</div>
            </Button>
            <div className="progress-line"></div>
            <Button
              onClick={() => setActive("Delivered")}
              className={`progress-step bg-transparent border-0 completed ${
                active === "Delivered" ? "active" : ""
              }`}
            >
              <div className="progress-dot"></div>
              <div className="progress-label">Delivered</div>
            </Button>
          </div>
        </div>
        <Row className="g-4 pb-4">
          {/* Order Items */}
          <Col lg={4}>
            <div className="order-section-card">
              <h5 className="section-title mb-3">Order Summery</h5>
              <div className="theme-divider mb-4"></div>
              <div className="order-items-list">
                <div className="d-flex">
                  <div className="item-details">
                    <div className="item-name">ID</div>
                  </div>
                  <div className="unit-price">{order.id}</div>
                </div>

                {order.items.map((item) => (
                  <div key={item.id} className="d-flex">
                    <div className="item-details">
                      <div className="item-name">{item.name}</div>
                    </div>
                    <div className="unit-price">
                      {item.quantity} x {item.price} EGP
                    </div>
                  </div>
                ))}

                <div className="d-flex">
                  <div className="item-details">
                    <div className="item-name">Total</div>
                  </div>
                  <div className="unit-price">{order.total}</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <ModalComponent
          show={showModal}
          title={"Edit User"}
          body={
            <>
              <EditModal
                user={user}
                checkEditStatus={({
                  status,
                  msg,
                }: {
                  status: boolean;
                  msg: string;
                }) => handleEdit({ status, msg })}
              />
            </>
          }
          showActions={false}
          handleClose={() => setShowModal(false)}
        />
      </Container>
      <ToastContainer />
    </div>
  );
};

export default UserProfile;
