import {createBrowserRouter} from "react-router-dom";
import Dashboard from "./views/dashboard.jsx";


const RouterAdmin=createBrowserRouter([
    // Admin routes
    {
        path:'/admin',
        element:<Dashboard/>
    }
]);

export default RouterAdmin;
