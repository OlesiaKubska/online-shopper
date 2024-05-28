import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
 createBrowserRouter,
 RouterProvider,
 useNavigate,
} from "react-router-dom";
import "./index.css";
import DashboardContent from "./components/DashboardContent/DashboardContent.jsx";
import { useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
const RedirectToDashboard = () => {
 const navigate = useNavigate();
 useEffect(() => {
  navigate("/online-shopper/dashboard");
 }, [navigate]);

 return null;
};

const router = createBrowserRouter([
 {
  path: "/online-shopper/",
  element: <RedirectToDashboard />,
 },
 {
  path: "/online-shopper/dashboard",
  element: <App />,
  children: [
   {
    path: "",
    element: <DashboardContent />,
   },
  ],
 },
 {
  basename: "/online-shopper",
 },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
 <>
  <RouterProvider router={router} />
 </>
);
