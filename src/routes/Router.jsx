import { useRoutes } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import MainLayout from "../components/layouts/MainLayout/index.jsx";
import AuthPage from "../pages/AuthPage.jsx";
import AuthNaverCallbackPage from "../pages/AuthNaverCallbackPage.jsx";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <AuthPage /> },
        { path: "home", element: <HomePage /> },
        { path: "naver-callback", element: <AuthNaverCallbackPage /> },
      ],
    },
  ]);
}
