import "../../style/cart.css";

export default function Cart() {
  return (
    <div className="cart-root container py-4">
      <h2 className="cart-title text-center">Your Flower Basket</h2>

      <div className="row g-4">
        <div className="col-lg-8">
          <div className="list">
            <div className="cart-item d-flex align-items-center p-3 rounded-4 shadow-sm">
              <div className="thumb me-3">
                <img
                  src="/src/assets/Image.png"
                  alt="Red Tulip"
                  style={{
                    width: 120,
                    height: 90,
                    objectFit: "cover",
                    borderRadius: 8,
                  }}
                />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-1">Red Tulip</h5>
                <p className="mb-1 text-muted small">Tulips</p>
                <div className="d-flex align-items-center gap-3">
                  <div className="qty-controls d-flex align-items-center">
                    <button className="qty-btn" aria-label="decrease" disabled>
                      −
                    </button>
                    <div className="quantity-badge">2</div>
                    <button className="qty-btn" aria-label="increase" disabled>
                      +
                    </button>
                  </div>
                  <div className="fw-bold">137 EGP</div>
                  <button className="btn btn-outline-danger btn-sm" disabled>
                    Remove
                  </button>
                </div>
              </div>
            </div>

            <div className="cart-item d-flex align-items-center p-3 rounded-4 shadow-sm">
              <div className="thumb me-3">
                <img
                  src="/src/assets/Image2.png"
                  alt="Yellow Tulip"
                  style={{
                    width: 120,
                    height: 90,
                    objectFit: "cover",
                    borderRadius: 8,
                  }}
                />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-1">Yellow Tulip</h5>
                <p className="mb-1 text-muted small">Tulips</p>
                <div className="d-flex align-items-center gap-3">
                  <div className="qty-controls d-flex align-items-center">
                    <button className="qty-btn" aria-label="decrease" disabled>
                      −
                    </button>
                    <div className="quantity-badge">1</div>
                    <button className="qty-btn" aria-label="increase" disabled>
                      +
                    </button>
                  </div>
                  <div className="fw-bold">139 EGP</div>
                  <button className="btn btn-outline-danger btn-sm" disabled>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="summary p-4 rounded-4 shadow-sm bg-white">
            <h5 className="mb-3">Order Summary</h5>
            <div className="d-flex justify-content-between mb-2">
              <div>Subtotal</div>
              <div className="fw-bold">413.00 EGP</div>
            </div>
            <div className="d-flex justify-content-between mb-3 text-muted small">
              <div>Estimated delivery</div>
              <div>2-4 days</div>
            </div>
            <button className="btn btn-primary w-100" disabled>
              Checkout
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
