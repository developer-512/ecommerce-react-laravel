import React from 'react';
import {Outlet} from "react-router-dom";
// import 'https://api.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css';

function GuestLayout(props) {
    return (
        // <div className=''>
           <Outlet/>
        // </div>
    );
}

export default GuestLayout;
