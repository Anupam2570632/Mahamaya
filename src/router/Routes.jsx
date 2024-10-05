import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import Photos from "../pages/Photos/Photos";
import Article from "../pages/Article/Article";
import About from "../pages/About/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/photo',
                element: <Photos />
            },
            {
                path: '/article',
                element: <Article />
            },
            {
                path: '/about',
                element: <About />
            }
        ]
    },
]);
export default router;