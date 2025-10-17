import { useState, useEffect } from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { useParams } from "react-router";
import "./OrderDetails.css";

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

const OrderDetails = () => {
  const { id } = useParams();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setOrder(mockOrder);
      setLoading(false);
    }, 500);
  }, [id]);

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

  const getStatusBadge = (status: Order["status"]) => {
    const badges = {
      pending: { bg: "warning", text: "Pending" },
      processing: { bg: "info", text: "Processing" },
      shipped: { bg: "primary", text: "Shipped" },
      delivered: { bg: "success", text: "Delivered" },
      cancelled: { bg: "danger", text: "Cancelled" },
    };
    return badges[status];
  };

  const statusBadge = getStatusBadge(order.status);

  return (
    <div className="order-details-root">
      <Container className="order-details-container">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="order-details-title mb-2">Order Details</h2>
          <div className="theme-divider mx-auto"></div>
          <p className="text-muted mt-3">Track your order and view details</p>
        </div>

        {/* Order Summary Header */}
        <div className="order-header-card mb-4">
          <Row className="align-items-center">
            <Col md={4} xs={12} className="mb-3 mb-md-0">
              <div className="order-info-item">
                <span className="label">Order Number</span>
                <span className="value">{order.orderNumber}</span>
              </div>
            </Col>
            <Col md={4} xs={6} className="mb-3 mb-md-0">
              <div className="order-info-item">
                <span className="label">Order Date</span>
                <span className="value">
                  {new Date(order.date).toLocaleDateString()}
                </span>
              </div>
            </Col>
            <Col md={4} xs={6}>
              <div className="order-info-item">
                <span className="label">Status</span>
                <Badge bg={statusBadge.bg} className="status-badge">
                  {statusBadge.text}
                </Badge>
              </div>
            </Col>
          </Row>
        </div>

        {/* Order Progress Tracker */}
        <div className="order-progress-card mb-4">
          <h5 className="section-title mb-4">Order Progress</h5>
          <div className="progress-tracker">
            <div
              className={`progress-step ${
                ["pending", "processing", "shipped", "delivered"].indexOf(
                  order.status
                ) >= 0
                  ? "completed"
                  : ""
              }`}
            >
              <div className="progress-dot"></div>
              <div className="progress-label">Order Placed</div>
            </div>
            <div className="progress-line"></div>
            <div
              className={`progress-step ${
                ["processing", "shipped", "delivered"].indexOf(order.status) >=
                0
                  ? "completed"
                  : ""
              } ${order.status === "pending" ? "active" : ""}`}
            >
              <div className="progress-dot"></div>
              <div className="progress-label">Processing</div>
            </div>
            <div className="progress-line"></div>
            <div
              className={`progress-step ${
                ["shipped", "delivered"].indexOf(order.status) >= 0
                  ? "completed"
                  : ""
              } ${order.status === "processing" ? "active" : ""}`}
            >
              <div className="progress-dot"></div>
              <div className="progress-label">Shipped</div>
            </div>
            <div className="progress-line"></div>
            <div
              className={`progress-step ${
                order.status === "delivered" ? "completed" : ""
              } ${order.status === "shipped" ? "active" : ""}`}
            >
              <div className="progress-dot"></div>
              <div className="progress-label">Delivered</div>
            </div>
          </div>
          {order.estimatedDelivery && order.status !== "delivered" && (
            <p className="estimated-delivery mt-4">
              <i className="bi bi-truck"></i> Estimated delivery:{" "}
              <strong>
                {new Date(order.estimatedDelivery).toLocaleDateString()}
              </strong>
            </p>
          )}
        </div>

        <Row className="g-4">
          {/* Order Items */}
          <Col lg={7}>
            <div className="order-section-card">
              <h5 className="section-title mb-3">Order Items</h5>
              <div className="theme-divider mb-4"></div>
              <div className="order-items-list">
                {order.items.map((item) => (
                  <div key={item.id} className="order-item-row">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="item-image"
                    />
                    <div className="item-details">
                      <div className="item-name">{item.name}</div>
                      <div className="item-category">{item.category}</div>
                      <div className="item-quantity">
                        Quantity: {item.quantity}
                      </div>
                    </div>
                    <div className="item-price">
                      <div className="unit-price">{item.price} EGP</div>
                      <div className="total-price">
                        {item.price * item.quantity} EGP
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>

          {/* Shipping & Payment Info */}
          <Col lg={5}>
            {/* Shipping Address */}
            <div className="order-section-card mb-4">
              <h5 className="section-title mb-3">Shipping Address</h5>
              <div className="theme-divider mb-4"></div>
              <div className="address-content">
                <div className="address-icon">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <div>
                  <p className="address-line">{order.shippingAddress.line1}</p>
                  {order.shippingAddress.notes && (
                    <p className="address-notes">
                      <i className="bi bi-chat-left-text"></i>{" "}
                      {order.shippingAddress.notes}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Payment Summary */}
            <div className="order-section-card">
              <h5 className="section-title mb-3">Payment Summary</h5>
              <div className="theme-divider mb-4"></div>
              <div className="payment-details">
                <div className="payment-row">
                  <span>Subtotal</span>
                  <span>{order.subtotal} EGP</span>
                </div>
                <div className="payment-row">
                  <span>Shipping</span>
                  <span>{order.shipping} EGP</span>
                </div>
                <hr className="payment-divider" />
                <div className="payment-row total-row">
                  <span>Total</span>
                  <span className="total-amount">{order.total} EGP</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Help Section */}
        <div className="help-section mt-5 text-center">
          <p className="text-muted">
            Need help with your order?{" "}
            <a href="/contact" className="help-link">
              Contact Support
            </a>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default OrderDetails;
