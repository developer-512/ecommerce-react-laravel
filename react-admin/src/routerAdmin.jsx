import {createBrowserRouter} from "react-router-dom";
import Dashboard from "./views/dashboard.jsx";
import DefaultAdminLayout from "./Components/DefaultAdminLayout.jsx";
import GuestAdminLayout from "./Components/GuestAdminLayout.jsx";
import Login from "./views/Login.jsx";


const RouterAdmin = createBrowserRouter([
    // Admin routes

    {
        path: '/admin',
        element: <DefaultAdminLayout/>,
        children: [
            {
                path: '/admin',
                element: <Dashboard/>
            }
        ]
    },
    {
        path: '/admin/login',
        element: <GuestAdminLayout/>,
        children: [
            {
                path: '/admin/login',
                element: <Login/>
            }
        ]
    }
]);

export default RouterAdmin;

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Dashboard from "./views/dashboard.jsx";
//
// const RouterAdmin = () => {
//     return (
//         // <Router>
//             <Routes>
//                 {/* Admin routes */}
//                 <Route path="/admin" element={<Dashboard />} />
//             </Routes>
//         // </Router>
//     );
// };
//
// export default RouterAdmin;
