import axios from "axios"
import { ADD_NEW_ADMIN_FAIL, ADD_NEW_ADMIN_REQUEST, ADD_NEW_ADMIN_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from '../Constants/AdminConstants'

export const addNewAdmin=(newAdmin)=>async(dispatch)=>{
    console.log(newAdmin)
    try {
        dispatch({type:ADD_NEW_ADMIN_REQUEST})
        const {data}= await axios.post('https://careconnect-server.onrender.com/AdminAPI/addNewAdmin',newAdmin)
        console.log(data)
        dispatch({type:ADD_NEW_ADMIN_SUCCESS,payload:data})
        
    } catch (error) {
        dispatch({type:ADD_NEW_ADMIN_FAIL})
    }
}

export const login=(cred)=>async(dispatch)=>{
    console.log(cred)
    try {
        dispatch({type:LOGIN_REQUEST})
        const {data}=await axios.post('https://careconnect-server.onrender.com/AdminAPI/login',cred)
        console.log(data)
        localStorage.setItem('cred',JSON.stringify(data))
        dispatch({type:LOGIN_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:LOGIN_FAIL})
    }
}
export const logout=()=>(dispatch)=>{
    dispatch({type:LOGOUT})
    localStorage.removeItem('cred')
}