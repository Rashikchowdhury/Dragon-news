import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewsDetails from "../componets/NewsDetails";
import PrivetRoutes from "../Provider/PrivetRoutes";
import About from "../pages/About";
import Career from "../pages/Career";
import Loading from "../componets/Loading";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/category/:id",
                Component: CategoryNews,
            },
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>,
            },
            {
                path: "/auth/register",
                element: <Register></Register>,
            },
        ],
    },
    {
        path: "/newsDetails/:id",
        element: <PrivetRoutes><NewsDetails></NewsDetails></PrivetRoutes>,
        loader: () => fetch("/news.json")
    },
    {
        path: "/about",
        Component: About
    },
    {
        path: "/career",
        Component: Career
    }
])