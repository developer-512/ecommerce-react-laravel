import {createBrowserRouter} from "react-router-dom";
import Dashboard from "./views/dashboard.jsx";


const RouterAdmin=createBrowserRouter([
    // Admin routes
    {
        path:'admin',
        element:<Dashboard/>
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
