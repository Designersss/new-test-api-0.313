import Home from "../pages/Home.tsx";
import Auth from "../pages/Auth.tsx";

export const publicRoutes = [
    {
        path: '/',
        Component: Home
    },
    {
        path: '/login',
        Component: Auth
    },
    {
        path: '/registration',
        Component: Auth
    }
]