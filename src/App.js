import React, { Suspense } from "react";
import Loader from "./pages/loader/loader";
import { RouterProvider } from "react-router-dom";
import routers from "./router";

function App() {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={routers} />
      </Suspense>
    </div>
  );
}

export default App;
