import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import LayOut from "./layout/layout.tsx";
import About from "./pages/about/about.tsx";
import Products from "./pages/products/products.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import HomePage from "./pages/home/home.tsx";
import "./style/main.css";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import Login from "./pages/login/login.tsx";
import SignUp from "./pages/signup/signup.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import Cart from "./pages/Cart/Cart.tsx";
import ForgetPassword from "./pages/forgetPassword/forgetPassword.tsx";
import ResetPassword from "./pages/resetPassword/resetPassword.tsx";
import ListCustomers from "./pages/dashboard111/Customers/listCustomers.tsx";
import AdminLayout from "./pages/dashboard111/Layout/AdminLayout.tsx";
import CustomerDetails from "./pages/dashboard111/Customers/customerDetails/customerDetails.tsx";
import UsersDB from "./pages/dashboard/users/usersDB.tsx";

const rout = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <About /> },
      { path: "products", element: <Products /> },
      { path: "cart", element: <Cart /> },
    ],
  },
  { path: "/Login", element: <Login /> },
  { path: "/Signup", element: <SignUp /> },
  { path: "/ForgetPassword", element: <ForgetPassword /> },
  { path: "/ResetPassword", element: <ResetPassword /> },
  {
    path: "/users",
    children: [
      { index: true, element: <UsersDB /> },
      { path: ":id", element: <CustomerDetails /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "users",
        children: [
          { index: true, element: <ListCustomers /> },
          { path: ":id", element: <CustomerDetails /> },
        ],
      },
    ],
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <StrictMode>
        <ThemeProvider>
          <RouterProvider router={rout}></RouterProvider>
        </ThemeProvider>
      </StrictMode>
    </QueryClientProvider>
  </Provider>
);
