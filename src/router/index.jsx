import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "../shared/header/header";
import SectionCodeView from "../pages/sectionCode/sectionCodeView";

const NavBar = () => {
  return (
    <div>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

const routers = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        path: "/section-code-view",
        element: <SectionCodeView />,
      },
    ],
  },
]);

export default routers;
