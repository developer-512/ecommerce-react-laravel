import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axiosClient from "../../axios-client.js";
import routeAPI from "../../Config/routeAPI.js";
import routes from "../../Config/route.js";
import DataTable from 'react-data-table-component';
import commonRoute from "../../Config/commonRoute.js";
import {useStateContext} from "../../Context/ContextProvider.jsx";
// import LoginUser from "../../Config/userInfo.js";
// import LoginUser from "../../Config/userInfo.js";

const Users = () => {
    const [users,setUsers]=useState([]);
    const {user,setUser}=useStateContext();
    useEffect(() => {
        getUsers();
    }, []);

    useEffect(() => {
        axiosClient.get(routeAPI.user)
            .then(({data})=>{
                setUser(data);
            })
    }, []);

    const LoginUser={
        id:user.id,
        name:user.name,
    }

    function getUsers ()  {
        axiosClient.get(routeAPI.users)
            .then(({data})=>{
                setUsers(data.data);
            })
            .catch((err)=>{
                const response = err.response;
                alert('Status: '+response.status)
            })
    }

    function deleteUser(userId) {
        if (!window.confirm('Really want to delete this user?')){
            return
        }
        axiosClient.delete(routeAPI.users+commonRoute.singleSlash+userId)
            .then(()=>{
                getUsers();
            })
    }


    const columns=[
        {
            name:'Id',
            selector:user=>user.id,
            sortable: true,
        },
        {
            name:'Name',
            selector:user => user.name
        },
        {
            name: 'Status',
            selector:user => (user.status===1)?(<span data-tag="allowRowEvents" className='text-success'>Active</span>):(<span data-tag="allowRowEvents" className="text-danger">Inactive</span>),
            sortable: true
        },
        {
            name: 'Email',
            selector:user=>user.email
        },
        {
            name: 'Registered Date',
            selector:user=>user.created_at,
            sortable: true,
        },
        {
            name: 'Action',
            selector:user=>user.id===LoginUser.id?'You cannot Perform Action on Your self':(<div className='d-flex'>
                <Link to={routes.users+commonRoute.singleSlash+user.id} className='btn btn-primary' >Edit</Link>
                {'\u00A0'}
                {'\u00A0'}
                <button className='btn btn-danger' onClick={ev=>deleteUser(user.id)}>Delete</button>
            </div>)
        }

    ];

    const ExpandedComponent = ({ data }) => <pre>{data.name}</pre>;
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-12">

                    <div className="header">
                        <div className="header-body">
                            <div className="row align-items-center">
                                <div className="col">

                                    <h6 className="header-pretitle">
                                        Overview
                                    </h6>


                                    <h1 className="header-title text-truncate">
                                        Admin Members
                                        {LoginUser.id}
                                    </h1>

                                </div>
                                <div className="col-auto">
                                    <Link to={routes.users+commonRoute.newRecord} className="btn btn-primary ms-2">
                                        Add Admin
                                    </Link>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="table-responsive">
                        <DataTable columns={columns} data={users}  pagination={true} selectableRows={true} expandableRows={true} expandableRowsComponent={ExpandedComponent} fixedHeader={true}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users;

