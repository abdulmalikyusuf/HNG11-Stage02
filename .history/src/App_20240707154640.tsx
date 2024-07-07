import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "@/routes/root";
import IndexPage from "@/routes";
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
        element: <p>Cart</p>,
      },
      {
        path: "checkout",
        element: <p>Checkout</p>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
