import { Route, RouterProvider, Routes } from "react-router-dom";

import { router } from "./router/router";
// fontAwesome.js
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

// Tambahkan semua ikon dari free-solid-svg-icons ke library
library.add(fas);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
