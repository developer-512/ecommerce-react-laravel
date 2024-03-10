import React, {useEffect, useState} from 'react';
import {Navigate, useNavigate, useParams} from "react-router-dom";
import axiosClient from "../../axios-client.js";
import routeAPI from "../../Config/routeAPI.js";
import commonRoute from "../../Config/commonRoute.js";
import routes from "../../Config/route.js";
import userInfo from "../../Config/userInfo.js";

const ActionUsers = () => {
    let {id} = useParams();
    const navigate=useNavigate();
    const [user,setUser]=useState({
        id:null,
        name:'',
        email:'',
        password:'',
        password_confirmation:''
    });

    if (id){
        if (id===userInfo().id) {
            return <Navigate to={routes.users} />
        }
        useEffect(() => {

            axiosClient.get(routeAPI.users+commonRoute.singleSlash+`${id}`)
                .then(({data})=>{
                    // setLoading(false);
                    setUser(data);

                })
                .catch(()=>{
                    // setLoading(false);
                });
        }, []);
    }

    function storeUser(ev) {
          ev.preventDefault();
        if (user.id){

            axiosClient.put(routeAPI.users+commonRoute.singleSlash+`${user.id}`,user)
                .then(()=>{
                    navigate(routes.users)
                    // setNotification('Users successfully updated');
                })
                .catch( err => {
                    const response = err.response;
                    if (response && response.status === 422) {
                        // setErrors(response.data.errors);
                    }else {
                        alert(response.status);
                    }
                })
        }else {
            axiosClient.post(routeAPI.users,user)
                .then(()=>{
                    navigate(routes.users)
                    // setNotification('User successfully Added');
                })
                .catch( err => {
                    const response = err.response;
                    if (response && response.status === 422) {
                        // setErrors(response.data.errors);
                    }else {
                        alert(response.status);
                    }
                })
        }
    }
    return (
        <div className='container my-5'>
            {user.id && <h2>Update User:{user.name}</h2>}
            {!user.id && <h2>Add new User</h2>}
            <div className="card">
                <div className="card-body">

                    <form onSubmit={storeUser}>
                        <div className="row g-3">
                            <div className="col-12 col-md-6 my-4">
                                <label  className="form-label">Name</label>
                                <input type="text" className="form-control" value={user.name} onChange={ev =>setUser({...user,name:ev.target.value }) } required/>

                            </div>
                            <div className="col-12 col-md-6 my-4">
                                <label  className="form-label">Email</label>
                                <input type="email" className="form-control "   value={user.email} onChange={ev =>setUser({...user,email:ev.target.value }) } required/>

                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col-12 col-md-6 my-4">
                                <label  className="form-label">Password</label>
                                <input type="text" className="form-control " onChange={ev =>setUser({...user,password:ev.target.value }) } required/>

                            </div>
                            <div className="col-12 col-md-6 my-4">
                                <label  className="form-label">Confirm Password</label>
                                <input type="text" className="form-control "  onChange={ev =>setUser({...user,password_confirmation:ev.target.value }) }  required/>

                            </div>
                        </div>


                        <button className="btn btn-primary" type="submit">Save</button>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default ActionUsers;
