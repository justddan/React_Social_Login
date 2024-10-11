import { useRoutes } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import MainLayout from "../components/layouts/MainLayout/index.jsx";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [{ index: true, element: <HomePage /> }],
    },
  ]);
}
