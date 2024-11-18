// halaman untuk mengatur router dengan versi terbaru

import { createBrowserRouter } from "react-router-dom";
import { Navbar } from "../layout/entry";
import { HomePage } from "../pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);
