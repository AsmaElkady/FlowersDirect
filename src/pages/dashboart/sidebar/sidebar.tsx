import { useState } from "react";
import "./sidebar.css";
import { useNavigate } from "react-router";

export default function SidebarDashboard() {
  const [collapsed, setCollapsed] = useState(true);
  const navigation = useNavigate();

  const handleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  const handleOverview = () => {
    console.log("Overview clicked");
    navigation("overview");
};

const handleProducts = () => {
    console.log("Products clicked");
};

const handleCategories = () => {
      navigation("category");
    console.log("Categories clicked");
  };

  return (
    <>
      <div className="bg-primary">
        <div className="container-fluid py-4 ">
          {/* <div className="row "> */}
          <aside
            className={` bg-panel d-flex flex-column sidebar ${
              collapsed ? "collapsed" : ""
            }  min-vh-100 `}
          >
            <button
              className="btn btn-light "
              style={{ width: 45 }}
              onClick={handleCollapse}
              id="sidebarToggle"
            >
              <i className="fa-solid fa-bars" />
            </button>
            {/* <div className="mb-3 text-white d-flex align-items-center">
                <img src="/img/nav/1.png" alt="icon" />
              </div> */}

            <div className="p-3 rounded mb-3">
              <div className="fw-semibold sidebar-text ">
                <i className="fa-solid fa-user text-light" />
                <p className="mx-2 d-inline-block text-light">Admin</p>
              </div>
              <small className="sidebar-text mx-2 text-light">
                admin@gmail.com
              </small>
            </div>

            <div className="nav flex-column gap-2 ">
              <button className="btn text-start py-3" onClick={handleOverview}>
                <i className="fa-solid fa-chart-line text-light" />
                <span className="sidebar-text text-light mx-2">Overview</span>
              </button>

              <button className="btn text-start py-3" onClick={handleProducts}>
                <i className="fa-solid fa-chair text-light " />
                <span className="sidebar-text text-light mx-2">Products</span>
              </button>

              <button
                className="btn text-start py-3"
                onClick={handleCategories}
              >
                <i className="fa-solid fa-layer-group text-light" />
                <span className="sidebar-text text-light mx-2">Categories</span>
              </button>

              <button className="btn text-start py-3" id="orders">
                <i className="fa-solid fa-receipt text-light" />
                <span className="sidebar-text text-light mx-2">Orders</span>
              </button>
              <button className="btn text-start py-3" id="users">
                <i className="fa-solid fa-user-group text-light" />
                <span className="sidebar-text text-light mx-2">Users</span>
              </button>

              <button className="btn btn-danger text-start mt-auto py-3">
                <i className="fa-solid fa-arrow-right-from-bracket text-light" />
                <span className="mx-2 sidebar-text text-light">Logout</span>
              </button>
            </div>
          </aside>
          {/* <main className="col-1 p-4">
              <div className="d-flex align-items-center flex-wrap gap-3 mb-4">
                <button
                  className="btn btn-secondary"
                  onClick={handleCollapse}
                  id="sidebarToggle"
                >
                  <i className="fa-solid fa-bars" />
                </button> */}

          {/* <h1 className="h3 m-0">Overview</h1> */}
          {/* </div>
            </main> */}
        </div>
        {/* </div> */}
      </div>
    </>
  );
}
