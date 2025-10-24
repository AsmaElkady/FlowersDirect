import type { Order } from "../../types/order";

const ProductCard = (order: Order) => {
  return (
    <div>
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
    </div>
  );
};

export default ProductCard;
