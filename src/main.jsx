import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Component/Layout/Main";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./Component/Home/Home";
import Contact from "./Component/Contact/Contact";
import OrderReview from "./Component/OrderReview/OrderReview";
import About from "./Component/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=> fetch('tshirts.json')
      },
      {
        path: "about",
        element: <About></About>
      },
      {
        path: "orderReview",
        element: <OrderReview></OrderReview>
      },
      {
        path: "contact",
        element: <Contact></Contact>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);