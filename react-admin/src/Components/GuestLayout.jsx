import React, {useEffect} from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../Context/ContextProvider.jsx";

function GuestLayout(props) {
    const {user,token,setUser,setToken}=useStateContext();

    useEffect(()=>{
        let BodyClasses=document.getElementById('root');
        BodyClasses.classList.add('d-flex', 'align-items-center','bg-auth','border-top','border-top-2','border-primary')
    })
    if (token){
        return <Navigate to={props.routes.dashboard}/>
    }
    return (
           <Outlet/>
    );
}

export default GuestLayout;
