import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import RootLayout from "@/routes/root";
import IndexPage from "@/routes/index";
import Cart from "@/routes/cart";
import Checkout from "@/routes/checkout";
import ProductsPage from "@/routes/products";
import Product from "@/routes/product";
import "./App.css";

// Create a client
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "products/:productId",
        element: <Product />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
]);

export { queryClient };

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
