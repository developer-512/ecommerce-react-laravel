import {createBrowserRouter} from "react-router-dom";
import Index from "./views/index.jsx";



const router=createBrowserRouter([

    // Client routes
    {
        path:'/',
        element:<Index/>
    }

]);


export default router;
