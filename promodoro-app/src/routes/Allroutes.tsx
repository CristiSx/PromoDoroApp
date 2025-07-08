import {createBrowserRouter} from "react-router-dom";
import Home from "../components/home"
import Login from "../components/login";
import Register from "../components/register";
export const Allroutes = createBrowserRouter([
    {path: "/", element: <Home/>},
    {path: "/login", element: <Login/>},
    {path: "/register", element: <Register/>}

]);