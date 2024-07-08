import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "@/routes/root";
import IndexPage from "@/routes/index";
import Cart from "@/routes/cart";
import Checkout from "@/routes/checkout";
import "./App.css";

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
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
