import React, {useState} from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../Context/ContextProvider.jsx";
import logo from '../assets/img/logo.svg';
import avatar from '../assets/img/avatars/profiles/avatar-1.jpg';
function DefaultLayout(props) {
    const {user,token,setUser,setToken}=useStateContext();

    /*if (!token){
        return <Navigate to='/admin/login'/>
    }*/
    return (
        <>
            <nav className="navbar navbar-vertical fixed-start navbar-expand-md navbar-light" id="sidebar">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <a className="navbar-brand" href="">
                        <img src={logo} className="navbar-brand-img mx-auto" alt="..."/>
                    </a>

                    <div className="navbar-user d-md-none">

                        <div className="dropdown">

                            <a href="#" id="sidebarIcon" className="dropdown-toggle" role="button"
                               data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <div className="avatar avatar-sm avatar-online">
                                    <img src={avatar}
                                         className="avatar-img rounded-circle" alt="..."/>
                                </div>
                            </a>

                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="sidebarIcon">
                                <a href="" className="dropdown-item">Profile</a>
                                <a href="" className="dropdown-item">Settings</a>
                                <hr className="dropdown-divider"/>
                                    <a href="" className="dropdown-item">Logout</a>
                            </div>

                        </div>

                    </div>

                    <div className="collapse navbar-collapse" id="sidebarCollapse">

                        <form className="mt-4 mb-3 d-md-none">
                            <div className="input-group input-group-rounded input-group-merge input-group-reverse">
                                <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                                    <div className="input-group-text">
                                        <span className="fe fe-search"></span>
                                    </div>
                            </div>
                        </form>

                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <a className="nav-link " href="./widgets.html">
                                    <i className="fe fe-home"></i> Dashboard
                                </a>
                            </li>

                        </ul>






                            <div className="mt-auto"></div>


                            <div className="navbar-user d-none d-md-flex" id="sidebarUser">

                                <a className="navbar-user-link" data-bs-toggle="offcanvas"
                                   href="#sidebarOffcanvasActivity" aria-controls="sidebarOffcanvasActivity">
                <span className="icon">
                  <i className="fe fe-bell"></i>
                </span>
                                </a>

                                <div className="dropup">

                                    <a href="#" id="sidebarIconCopy" className="dropdown-toggle" role="button"
                                       data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <div className="avatar avatar-sm avatar-online">
                                            <img src="./assets/img/avatars/profiles/avatar-1.jpg"
                                                 className="avatar-img rounded-circle" alt="..."/>
                                        </div>
                                    </a>

                                    <div className="dropdown-menu" aria-labelledby="sidebarIconCopy">
                                        <a href="./profile-posts.html" className="dropdown-item">Profile</a>
                                        <a href="./account-general.html" className="dropdown-item">Settings</a>
                                        <hr className="dropdown-divider"/>
                                            <a href="./sign-in.html" className="dropdown-item">Logout</a>
                                    </div>

                                </div>

                                <a className="navbar-user-link" data-bs-toggle="offcanvas"
                                   href="#sidebarOffcanvasSearch" aria-controls="sidebarOffcanvasSearch">
                <span className="icon">
                  <i className="fe fe-search"></i>
                </span>
                                </a>

                            </div>

                    </div>

                </div>
            </nav>

            <div className="main-content">
                <Outlet/>
            </div>
        </>

    );
}

export default DefaultLayout;
