import React, {useState} from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../Context/ContextProvider.jsx";

function DefaultLayout(props) {
    const {user,token,setUser,setToken}=useStateContext();

    /*if (!token){
        return <Navigate to='/admin/login'/>
    }*/
    return (
        <div>
            <h4>Header</h4>
            <main>
                <Outlet/>
            </main>
        </div>

    );
}

export default DefaultLayout;
