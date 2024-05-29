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
import NotFound from "./components/NotFound/NotFound.jsx";

// eslint-disable-next-line react-refresh/only-export-components
const RedirectToDashboard = () => {
 const navigate = useNavigate();
 useEffect(() => {
  navigate("/dashboard");
 }, [navigate]);

 return null;
};

const router = createBrowserRouter(
 [
  {
   path: "/",
   element: <RedirectToDashboard />,
  },
  {
   path: "/dashboard",
   element: <App />,
   children: [
    {
     path: "",
     element: <DashboardContent />,
    },
   ],
  },
  {
   path: "*",
   element: <NotFound />,
  },
 ],
 {
  basename: "/online-shopper",
 }
);

ReactDOM.createRoot(document.getElementById("root")).render(
 <>
  <RouterProvider router={router} />
 </>
);
