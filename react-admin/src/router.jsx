import {createBrowserRouter} from "react-router-dom";
import DefaultLayout from "./Components/DefaultLayout.jsx";
import Dashboard from "./views/Dashboard.jsx";
import GuestLayout from "./Components/GuestLayout.jsx";
import Login from "./views/Login.jsx";
import Products from "./views/Products.jsx";
import Categories from "./views/Categories.jsx";
import Users from "./views/Admin/Users.jsx";
import ActionUsers from "./views/Admin/ActionUsers.jsx";

import routes from "./Config/route.js";

// routes
const router=createBrowserRouter([
    {
        path:routes.dashboard,
        element:<DefaultLayout/>,
        children:[
            {
                path:routes.dashboard,
                element:<Dashboard/>
            },
            {
                path:routes.products ,
                element: <Products/>
            },
            {
                path: routes.categories,
                element: <Categories/>
            },
            {
                path: routes.users,
                element: <Users />
            },
            {
                path: routes.actionusers,
                element: <ActionUsers/>
            }

        ]
    },
    {
        path:routes.dashboard,
        element:<GuestLayout />,
        children:[
            {
                path: routes.login,
                element: <Login/>
            }
        ]
    }
]);

export default router;


