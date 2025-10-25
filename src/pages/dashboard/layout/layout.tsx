import { Outlet } from "react-router";
import SidebarDashboart from "../sidebar/sidebar";
import NavDB from "../navDB/navDB";
import Revenue from "../revenue/revenue";
import { useEffect } from "react";
import { fetchCategory } from "../../../redux/slices/category";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../redux/store";
import { Helmet } from "react-helmet";
import { Product } from "../../../classes/productClass";
import { Admin } from "../../../classes/users";

export default function DashbortLayOut() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(Product.getProducts());
    dispatch(Admin.viewUsers());
  }, [dispatch]);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dashboard</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="container-fluid vh-100">
        <div className="row g-0">
          <div className="col-lg-1 col-3">
            <div className="position-fixed top-0 start-0 z-3">
              <SidebarDashboart />
            </div>
          </div>

          <div className="col-lg-10 col-9">
            <NavDB />
            <Revenue />
            <div className="border border-primary p-2 mt-5 rounded-4">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
