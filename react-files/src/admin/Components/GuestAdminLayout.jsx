import React from 'react';
import {Outlet} from "react-router-dom";
// import 'https://api.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css';
import '../assets-ad/css/libs.bundle.css';
import '../assets-ad/css/theme.bundle.css';
import  happinessImg from '../assets-ad/img/illustrations/happiness.svg'
function GuestAdminLayout(props) {
    return (
        <body>
           <Outlet/>
        </body>
    );
}

export default GuestAdminLayout;
