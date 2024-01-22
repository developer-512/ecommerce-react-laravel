import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import router from "./router.jsx";
import {ContextProvider} from "./admin/Context/AdminContextProvider.jsx";
import routerAdmin from "./admin/routerAdmin.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
          <RouterProvider router={router}/>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('root-admin')).render(
    <React.StrictMode>
        {/*<ContextProvider>*/}
            <RouterProvider router={routerAdmin}/>
        {/*</ContextProvider>*/}
    </React.StrictMode>
);
