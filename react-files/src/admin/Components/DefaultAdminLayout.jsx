import React from 'react';
import {Outlet} from "react-router-dom";

function DefaultAdminLayout(props) {
    return (
        <div>
            <h4>Header</h4>
            <main>
                <Outlet/>
            </main>
        </div>

    );
}

export default DefaultAdminLayout;
