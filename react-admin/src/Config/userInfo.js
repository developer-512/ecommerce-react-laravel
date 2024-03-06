import {useEffect} from "react";
import axiosClient from "../axios-client.js";
import routeAPI from "./routeAPI.js";
import {useStateContext} from "../Context/ContextProvider.jsx";


const {user,setUser}=useStateContext();


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

export default LoginUser;
