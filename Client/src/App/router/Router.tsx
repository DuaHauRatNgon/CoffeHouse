import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../layout/App";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            // {path: '', element: <HomePage />},
            {path: '*', element: <Navigate replace to='/not-found' />}
        ]
    }
])