import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import LayOut from "./layout/layout.tsx";
import About from "./pages/about/about.tsx";
import Products from "./pages/products/products.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/home/home.tsx";
import "./style/main.css";
import ThemeProvider from "react-bootstrap/ThemeProvider";

const rout = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <About /> },
      { path: "product", element: <Products /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={rout}></RouterProvider>
    </ThemeProvider>
  </StrictMode>
);
