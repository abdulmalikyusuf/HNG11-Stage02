import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "@/routes/root";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <p>Home</p>,
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
