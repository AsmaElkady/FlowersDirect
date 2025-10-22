import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import LayOut from "./layout/layout.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import HomePage from "./pages/home/home.tsx";
import "./style/main.css";
import "./index.css";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import OverView from "./pages/dashboart/overview/overview.tsx";
import CategoryDB from "./pages/dashboart/category/categoryDB.tsx";

const rout = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "about",
        lazy: async () => {
          const x = await import("./pages/about/about.tsx");
          return { Component: x.default };
        },
      },
      {
        path: "products",
        lazy: async () => {
          const x = await import("./pages/products/products.tsx");
          return { Component: x.default };
        },
      },
      {
        path: "cart",
        lazy: async () => {
          const x = await import("./pages/Cart/Cart.tsx");
          return { Component: x.default };
        },
      },
    ],
  },
  {
    path: "/Login",
    lazy: async () => {
      const x = await import("./pages/login/login.tsx");
      return { Component: x.default };
    },
  },
  {
    path: "/Signup",
    lazy: async () => {
      const x = await import("./pages/signup/signup.tsx");
      return { Component: x.default };
    },
  },
  {
    path: "/ForgetPassword",
    lazy: async () => {
      const x = await import("./pages/forgetPassword/forgetPassword.tsx");
      return { Component: x.default };
    },
  },
  {
    path: "/ResetPassword",
    lazy: async () => {
      const x = await import("./pages/resetPassword/resetPassword.tsx");
      return { Component: x.default };
    },
  },
  {
    path: "/dashboard",
    lazy: async () => {
      const x = await import("./pages/dashboart/layout/layout.tsx");
      return { Component: x.default };
    },
    children: [
      { path: "overview", element: <OverView /> },
      { path: "category", element: <CategoryDB /> },
    ],
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <StrictMode>
        <ThemeProvider>
          <Suspense fallback={<h2>Loading ... </h2>}>
            <RouterProvider router={rout}></RouterProvider>
          </Suspense>
        </ThemeProvider>
      </StrictMode>
    </QueryClientProvider>
  </Provider>
);
