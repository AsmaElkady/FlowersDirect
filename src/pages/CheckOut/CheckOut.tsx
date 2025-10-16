import { useMemo, useState, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "./checkout.css";

type CartItem = {
  id: string;
  name: string;
  image: string;
  category?: string;
  price: number;
  quantity: number;
};

const STORAGE_KEY = "fd_cart_v1";

function readCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as CartItem[];
  } catch (e) {
    console.error(e);
    return [];
  }
}

export default function CheckOut() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    setCart(readCart());
  }, []);

  const subtotal = useMemo(
    () => cart.reduce((s, i) => s + i.price * i.quantity, 0),
    [cart]
  );

  const [address, setAddress] = useState({
    line1: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setAddress((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handlePlaceOrder = () => {
    // placeholder: in future submit address + cart to API
    console.log("Place order", { cart, address });
    alert("Order placed (demo). Check console for data.");
  };

  return (
    <div className="checkout-root py-5">
      <Container>
        <Row className="g-4">
          <Col lg={7}>
            <div className="card p-4 rounded-4 shadow-sm">
              <h4 className="mb-3">Shipping address</h4>
              <Form>
                <Form.Group className="mb-3" controlId="line1">
                  <Form.Label>Address line</Form.Label>
                  <Form.Control
                    name="line1"
                    value={address.line1}
                    onChange={handleChange}
                    placeholder="Street, building, unit"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="notes">
                  <Form.Label>
                    Notes (delivery details / instructions)
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="notes"
                    value={(address as any).notes}
                    onChange={handleChange}
                    placeholder="Add any notes for delivery (e.g. gate code, preferred time)"
                  />
                </Form.Group>

                <div className="mt-3">
                  <Button variant="primary" onClick={handlePlaceOrder}>
                    Place order
                  </Button>
                </div>
              </Form>
            </div>
          </Col>

          <Col lg={5}>
            <div className="card p-4 rounded-4 shadow-sm order-summary">
              <h5 className="mb-3">Order summary</h5>
              {cart.length === 0 ? (
                <p className="text-muted">Your cart is empty.</p>
              ) : (
                <div className="items-list">
                  {cart.map((it) => (
                    <div key={it.id} className="d-flex align-items-center mb-3">
                      <img
                        src={it.image}
                        alt={it.name}
                        style={{
                          width: 72,
                          height: 54,
                          objectFit: "cover",
                          borderRadius: 8,
                        }}
                      />
                      <div className="ms-3 flex-grow-1">
                        <div className="fw-semibold">{it.name}</div>
                        <div className="text-muted small">
                          {it.quantity} × {it.price} EGP
                        </div>
                      </div>
                      <div className="fw-bold">
                        {(it.price * it.quantity).toFixed(2)} EGP
                      </div>
                    </div>
                  ))}

                  <hr />
                  <div className="d-flex justify-content-between mt-2">
                    <div className="text-muted">Subtotal</div>
                    <div className="fw-bold">{subtotal.toFixed(2)} EGP</div>
                  </div>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
