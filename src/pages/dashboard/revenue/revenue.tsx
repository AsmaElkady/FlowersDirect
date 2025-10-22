import "./revenue.css";
export default function Revenue() {
  return (
    <>
      <div className="carddatabg row g-3">
        <div className="col-md-4 ">
          <div
            className="card bg-card p-3 text-dark rounded-4 text-primary"
            style={{ background: "#faecefff" }}
          >
            <div className="d-flex align-items-center mb-2 ">
              <i className="fa-solid fa-sack-dollar fs-4 mx-2" /> Total Revenue
            </div>
            <div className="fw-bold fs-5 mx-2" id="totalRevenues">
              $0
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="card bg-card p-3 text-dark rounded-4 text-primary"
            style={{ background: "#faecefff" }}
          >
            <div className="d-flex align-items-center mb-2">
              <i className="fa-solid fa-cart-shopping fs-4 mx-2" /> Orders
            </div>
            <div className="fw-bold fs-5 mx-2" id="ordersCount">
              0
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="card bg-card p-3 text-dark rounded-4 text-primary"
            style={{ background: "#faecefff" }}
          >
            <div className="d-flex align-items-center mb-2">
              <i className="fa-solid fa-couch fs-4 mx-2" /> Products
            </div>
            <div className="fw-bold fs-5 mx-2" id="productCount">
              0
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
