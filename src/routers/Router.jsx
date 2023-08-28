import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Category/Category";
import NewLayout from "../layout/NewLayout";
import News from "../pages/News/News";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Trams from "../pages/Register/Trams";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to='category/0' />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'trams',
                element: <Trams />
            }
        ]
    },
    {
        path: 'category',
        element: <Main />,
        errorElement: <h2>404 Error</h2>,
        children: [
            {
                path: ':id',
                element: <Category />,
                loader: ({ params }) => fetch(`https://dbnew24-server-mafizul24h.vercel.app/categories/${params.id}`)
            }
        ]
    },
    {
        path: 'news',
        element: <NewLayout />,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><News /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://dbnew24-server-mafizul24h.vercel.app/news/${params.id}`)
            }
        ]
    }
])

export default router;