import Axios  from "axios";

export const api = Axios.create({
    baseURL:'http://127.0.0.1:5001/api',
    headers:{
        "Content-Type":"application/json",
        Accept:'application/json'
    }
})