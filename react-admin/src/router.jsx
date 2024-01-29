import {createBrowserRouter} from "react-router-dom";
import DefaultLayout from "./Components/DefaultLayout.jsx";
import Dashboard from "./views/Dashboard.jsx";
import GuestLayout from "./Components/GuestLayout.jsx";
import Login from "./views/Login.jsx";


const router=createBrowserRouter([
    {
        path:'/admin',
        element:<DefaultLayout/>,
        children:[
            {
                path:'/admin',
                element:<Dashboard/>
            },
        ]
    },
    {
        path:'/admin',
        element:<GuestLayout/>,
        children:[
            {
                path: '/admin/login',
                element: <Login/>
            }
        ]
    }
]);

export default router;

