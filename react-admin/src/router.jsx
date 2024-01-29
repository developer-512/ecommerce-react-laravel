import {createBrowserRouter} from "react-router-dom";
import DefaultLayout from "./Components/DefaultLayout.jsx";
import Dashboard from "./views/Dashboard.jsx";
import GuestLayout from "./Components/GuestLayout.jsx";
import Login from "./views/Login.jsx";
import Products from "./views/Products.jsx";
import Categories from "./views/Categories.jsx";
import AdminMembers from "./views/Admin-members/AdminMembers.jsx";
import ActionAdmin from "./views/Admin-members/ActionAdmin.jsx";

// Main url to access an admin
let admin='/admin';

// routes paths are stored in object
let routes={
    dashboard:admin,
    login:admin+'/login',
    products:admin+'/products',
    categories:admin+'/categories',
    adminmembers:admin+'/adminmembers',
    actionadmin:admin+'/actionadmin'
}

// routes
const router=createBrowserRouter([
    {
        path:routes.dashboard,
        element:<DefaultLayout routes={routes}/>,
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
                path: routes.adminmembers,
                element: <AdminMembers routes={routes.actionadmin}/>
            },
            {
                path: routes.actionadmin,
                element: <ActionAdmin/>
            }

        ]
    },
    {
        path:routes.dashboard,
        element:<GuestLayout/>,
        children:[
            {
                path: routes.login,
                element: <Login/>
            }
        ]
    }
]);

export default router;


