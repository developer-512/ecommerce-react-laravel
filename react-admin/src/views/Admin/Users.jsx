import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axiosClient from "../../axios-client.js";
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import 'datatables.net/js/jquery.dataTables.min.js';
import routeAPI from "../../config/routeAPI.js";
import routes from "../../config/route.js";
const Users = () => {
    const [users,setUsers]=useState(false);
    useEffect(() => {
        getUsers();
    }, []);

    function getUsers ()  {
        axiosClient.get(routeAPI.users)
            .then(({data})=>{
                setUsers(data.data);
                console.log(users)
                console.log(users.id);
            })
            .catch((err)=>{
                const response = err.response;
                alert('Status: '+response.status)
            })
    }
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
                                    <Link to={routes.actionusers} className="btn btn-primary ms-2">
                                        Add Admin
                                    </Link>

                                </div>
                            </div>

                        </div>
                    </div>



                    <div className="table-responsive" id='myTable'>
                        <table className="table table-sm">
                            <thead>
                            <tr>
                                <th scope="col">
                                    <a href="#" className="text-muted list-sort" data-sort="tables-row">#</a>
                                </th>
                                <th scope="col">
                                    <a href="#" className="text-muted list-sort" data-sort="tables-first">First</a>
                                </th>
                                <th scope="col">
                                    <a href="#" className="text-muted list-sort" data-sort="tables-last">Last</a>
                                </th>
                                <th scope="col">
                                    <a href="#" className="text-muted list-sort" data-sort="tables-handle">Handle</a>
                                </th>
                            </tr>
                            </thead>
                            <tbody className="list">

                            <tr>
                                <th scope="row" className="tables-row">1</th>
                                <td className="tables-first">Mark</td>
                                <td className="tables-last">Otto</td>
                                <td className="tables-handle">@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row" className="tables-row">2</th>
                                <td className="tables-first">Jacob</td>
                                <td className="tables-last">Thornton</td>
                                <td className="tables-handle">@fat</td>
                            </tr>
                            <tr>
                                <th scope="row" className="tables-row">3</th>
                                <td className="tables-first">Larry</td>
                                <td className="tables-last">the Bird</td>
                                <td className="tables-handle">@twitter</td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users;
