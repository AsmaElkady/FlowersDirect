import useDashboard from "../../../hooks/useDashboard";
import "./revenue.css";
import CountUp from "react-countup";

export default function Revenue() {
  const { totalProducts, orders } = useDashboard();

  return (
    <>
      <div className="carddatabg row g-3">
        <div className="col-md-3 ">
          <div
            className="card bg-card p-3 text-dark rounded-4 text-primary"
            style={{ background: "#faecefff" }}
          >
            <div className="d-flex align-items-center mb-2 ">
              <i className="fa-solid fa-sack-dollar fs-4 mx-2" /> Total Revenue
            </div>
            <div className="fw-bold fs-5 mx-2" id="totalRevenues">
              {/* <CountUp end={revenue} /> */}
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div
            className="card bg-card p-3 text-dark rounded-4 text-primary"
            style={{ background: "#faecefff" }}
          >
            <div className="d-flex align-items-center mb-2">
              <i className="fa-brands fa-first-order-alt fs-4"></i> Orders
              {/* <i className="fa-solid fa-cart-shopping fs-4 mx-2" /> Orders */}
            </div>
            <div className="fw-bold fs-5 mx-2" id="ordersCount">
              <CountUp end={orders} />
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div
            className="card bg-card p-3 text-dark rounded-4 text-primary"
            style={{ background: "#faecefff" }}
          >
            <div className="d-flex align-items-center mb-2">
              <i className="fa-solid fa-seedling fs-4"></i> Products
              {/* <i className="fa-solid fa-couch fs-4 mx-2" />  Products */}
            </div>
            <div className="fw-bold fs-5 mx-2" id="productCount">
              <CountUp end={totalProducts} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
