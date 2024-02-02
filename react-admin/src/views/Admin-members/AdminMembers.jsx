import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axiosClient from "../../axios-client.js";
import 'list.js'
const AdminMembers = (prop) => {
    const [users,setUsers]=useState(false);
    useEffect(() => {
        getUsers();
    }, []);
    function getUsers ()  {
        axiosClient.get('/admin/users')
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
                                    <Link to={prop.routes} className="btn btn-primary ms-2">
                                        Add Admin
                                    </Link>

                                </div>
                            </div>
                            {/*<div className="row align-items-center">*/}
                            {/*    <div className="col">*/}

                            {/*        <ul className="nav nav-tabs nav-overflow header-tabs">*/}
                            {/*            <li className="nav-item">*/}
                            {/*                <a href="#" className="nav-link text-nowrap active">*/}
                            {/*                    All contacts <span className="badge rounded-pill bg-secondary-soft">823</span>*/}
                            {/*                </a>*/}
                            {/*            </li>*/}
                            {/*            <li className="nav-item">*/}
                            {/*                <a href="#" className="nav-link text-nowrap">*/}
                            {/*                    Your contacts <span className="badge rounded-pill bg-secondary-soft">231</span>*/}
                            {/*                </a>*/}
                            {/*            </li>*/}
                            {/*            <li className="nav-item">*/}
                            {/*                <a href="#" className="nav-link text-nowrap">*/}
                            {/*                    Deleted <span className="badge rounded-pill bg-secondary-soft">22</span>*/}
                            {/*                </a>*/}
                            {/*            </li>*/}
                            {/*        </ul>*/}

                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>



                    <div className="table-responsive" data-list='{"valueNames": ["tables-row", "tables-first", "tables-last", "tables-handle"]}'>
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

export default AdminMembers;
