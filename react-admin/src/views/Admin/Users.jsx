import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axiosClient from "../../axios-client.js";
import routeAPI from "../../Config/routeAPI.js";
import routes from "../../Config/route.js";
import DataTable from 'react-data-table-component';

const Users = () => {
    const [users,setUsers]=useState([]);
    useEffect(() => {
        getUsers();
    }, []);
    function getUsers ()  {
        axiosClient.get(routeAPI.users)
            .then(({data})=>{
                setUsers(data.data);
                console.log(users)
                // console.log(users);
            })
            .catch((err)=>{
                const response = err.response;
                alert('Status: '+response.status)
            })
    }

    const columns=[
        {
            name:'Id',
            selector:'id'
        },
        {
            name:'Name',
            selector:'name'
        },
        {
            name: 'Email',
            selector:'email'
        },
        {
            name: 'Registered Date',
            selector:'created_at'
        }
    ];
    // const userData=[
    //     {}
    // ]
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
                                    </h1>

                                </div>
                                <div className="col-auto">
                                    <Link to={routes.users+routes.action} className="btn btn-primary ms-2">
                                        Add Admin
                                    </Link>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="table-responsive" id='myTable'>
                        {
                            <DataTable columns={columns} data={users} pagination={true} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users;
{/*<table className="table table-sm">*/}
{/*    <thead>*/}
{/*    <tr>*/}
{/*        <th scope="col">*/}
{/*            <a href="#" className="text-muted list-sort" data-sort="tables-row">#</a>*/}
{/*        </th>*/}
{/*        <th scope="col">*/}
{/*            <a href="#" className="text-muted list-sort" data-sort="tables-first">First</a>*/}
{/*        </th>*/}
{/*        <th scope="col">*/}
{/*            <a href="#" className="text-muted list-sort" data-sort="tables-last">Last</a>*/}
{/*        </th>*/}
{/*        <th scope="col">*/}
{/*            <a href="#" className="text-muted list-sort" data-sort="tables-handle">Handle</a>*/}
{/*        </th>*/}
{/*    </tr>*/}
{/*    </thead>*/}
{/*    <tbody className="list">*/}

{/*    <tr>*/}
{/*        <th scope="row" className="tables-row">1</th>*/}
{/*        <td className="tables-first">Mark</td>*/}
{/*        <td className="tables-last">Otto</td>*/}
{/*        <td className="tables-handle">@mdo</td>*/}
{/*    </tr>*/}
{/*    <tr>*/}
{/*        <th scope="row" className="tables-row">2</th>*/}
{/*        <td className="tables-first">Jacob</td>*/}
{/*        <td className="tables-last">Thornton</td>*/}
{/*        <td className="tables-handle">@fat</td>*/}
{/*    </tr>*/}
{/*    <tr>*/}
{/*        <th scope="row" className="tables-row">3</th>*/}
{/*        <td className="tables-first">Larry</td>*/}
{/*        <td className="tables-last">the Bird</td>*/}
{/*        <td className="tables-handle">@twitter</td>*/}
{/*    </tr>*/}

{/*    </tbody>*/}
{/*</table>*/}
