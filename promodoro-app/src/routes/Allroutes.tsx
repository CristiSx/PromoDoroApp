import {createBrowserRouter} from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Statistics from "../components/Statistics";
import Friends from "../components/Friends";
import Settings from "../components/Settings";
export const Allroutes = createBrowserRouter([
    {path: "/", element: <Home/>},
    {path: "/login", element: <Login/>},
    {path: "/register", element: <Register/>},
    {path: "/Statistics", element: <Statistics/>},
    {path: "/Friends", element: <Friends/>},
    {path: "/Settings", element: <Settings/>}

]);