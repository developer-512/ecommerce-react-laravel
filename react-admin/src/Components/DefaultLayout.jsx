import React, {useState} from 'react';
import {Link, Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../Context/ContextProvider.jsx";
import logo from '../assets/img/logo.svg';
import avatar from '../assets/img/avatars/profiles/avatar-1.jpg';
import axiosClient from "../axios-client.js";

function DefaultLayout(props) {
    const {user,token,setUser,setToken}=useStateContext();
    console.log(token);
    if (!token){
        return <Navigate to={props.routes.login}/>
    }
    function LogoutAdmin(ev) {
        ev.preventDefault();
        axiosClient.post('/admin/logout')
            .then(()=>{
                setUser({})
                setToken(null)
            })
            .catch((err)=>{
                const response = err.response;
                alert(response.status)
            })
    }
    return (
        <>
            <nav className="navbar navbar-vertical fixed-start navbar-expand-md navbar-light" id="sidebar">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <Link className="navbar-brand" href="" to={props.routes.dashboard}>
                        <img src={logo} className="navbar-brand-img mx-auto" alt="..."/>
                    </Link>

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
                                <Link className="nav-link " to={props.routes.dashboard}>
                                    <i className="fe fe-home"></i> Dashboard
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link " to="#sidebarComponents" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarComponents">
                                    <i className="fe fe-package"></i> Products
                                </Link>
                                <div className="collapse " id="sidebarComponents" >
                                    <ul className="nav nav-sm flex-column">
                                        <li>
                                            <Link to={props.routes.products} className="nav-link">
                                                Products
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={props.routes.categories} className="nav-link">
                                                Categories
                                            </Link>
                                        </li>

                                    </ul>
                                </div>
                            </li>

                            <li className="nav-item">
                                <Link to={props.routes.adminmembers} className="nav-link ">
                                    <i className='fe fe-users'></i>Admin Members
                                </Link>
                            </li>
                        </ul>
                            <div className="mt-auto"></div>
                        <div className="navbar-user d-none d-md-flex" id="sidebarUser">
                            <button className='btn btn-danger' onClick={LogoutAdmin}><i className='fe fe-log-out'></i>Logout</button>
                            {/*<Link to={}></Link>*/}
                        </div>

                {/*            <div className="navbar-user d-none d-md-flex" id="sidebarUser">*/}

                {/*                <a className="navbar-user-link" data-bs-toggle="offcanvas" href="#sidebarOffcanvasActivity" aria-controls="sidebarOffcanvasActivity">*/}
                {/*<span className="icon">*/}
                {/*  <i className="fe fe-bell"></i>*/}
                {/*</span>*/}
                {/*                </a>*/}

                {/*                <div className="dropup">*/}

                {/*                    <a href="#" id="sidebarIconCopy" className="dropdown-toggle" role="button"*/}
                {/*                       data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">*/}
                {/*                        <div className="avatar avatar-sm avatar-online">*/}
                {/*                            <img src="./assets/img/avatars/profiles/avatar-1.jpg"*/}
                {/*                                 className="avatar-img rounded-circle" alt="..."/>*/}
                {/*                        </div>*/}
                {/*                    </a>*/}

                {/*                    <div className="dropdown-menu" aria-labelledby="sidebarIconCopy">*/}
                {/*                        <a href="./profile-posts.html" className="dropdown-item">Profile</a>*/}
                {/*                        <a href="./account-general.html" className="dropdown-item">Settings</a>*/}
                {/*                        <hr className="dropdown-divider"/>*/}
                {/*                            <a href="./sign-in.html" className="dropdown-item">Logout</a>*/}
                {/*                    </div>*/}

                {/*                </div>*/}

                {/*                <a className="navbar-user-link" data-bs-toggle="offcanvas"*/}
                {/*                   href="#sidebarOffcanvasSearch" aria-controls="sidebarOffcanvasSearch">*/}
                {/*<span className="icon">*/}
                {/*  <i className="fe fe-search"></i>*/}
                {/*</span>*/}
                {/*                </a>*/}

                {/*            </div>*/}

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
