import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axiosClient from "../../axios-client.js";

const ActionUsers = () => {
    let {id} = useParams();
    const [user,setUser]=useState({
        id:null,
        name:'',
        email:'',
        password:'',
        password_confirmation:''
    });
    if (id){
        useEffect(() => {
            axiosClient.get()
        }, []);
    }
    return (
        <div>
            Action
        </div>
    );
};

export default ActionUsers;
