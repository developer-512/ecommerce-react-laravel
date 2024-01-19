import {createBrowserRouter} from "react-router-dom";
import Index from "./views/index.jsx";
import Dashboard from "./admin/views/dashboard.jsx";



const router=createBrowserRouter([
    // Admin routes
    {
        path:'/admin',
        children:[
            {
                path:'/admin',
                element:<Dashboard/>
            }
        ]
    },
    // Client routes
    {
        path:'/',
        element:<Index/>
    }

]);


export default router;
