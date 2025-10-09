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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import '@fortawesome/fontawesome-free/css/all.min.css';

const rout = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <About /> },
      { path: "products", element: <Products /> },
    ],
  },
]);

const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <ThemeProvider>
        <RouterProvider router={rout}></RouterProvider>
      </ThemeProvider>
    </StrictMode>
  </QueryClientProvider>
  
);
