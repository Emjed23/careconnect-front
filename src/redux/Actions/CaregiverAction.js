import axios from "axios";
import { ADD_NEW_CAREGIVER_FAIL, ADD_NEW_CAREGIVER_REQUEST, ADD_NEW_CAREGIVER_SUCCESS, GET_CAREGIVER_REQUEST_FAIL,
     GET_CAREGIVER_REQUEST, GET_CAREGIVER_REQUEST_SUCCESS,DELETE_CAREGIVER_REQUEST,DELETE_CAREGIVER_SUCCESS,DELETE_CAREGIVER_FAIL
    ,LOGOUT, CARE_LOGIN_REQUEST,UPDTAE_CAREGIVER_SUCCESS, UPDTAE_CAREGIVER_FAIL,UPDTAE_CAREGIVER_REQUEST,CARE_LOGIN_SUCCESS, CARE_LOGIN_FAIL ,GET_ONECAREGIVER_REQUEST_SUCCESS,GET_ONECAREGIVER_REQUEST,GET_ONECAREGIVER_REQUEST_FAIL} from "../Constants/CaregiverConstants";


export const getCaregiver=()=>async(dispatch)=>{

    try {
        dispatch({type:GET_CAREGIVER_REQUEST})
        const {data}=await axios.get('https://careconnect-server.onrender.com/CaregiverAPI/getAllCaregiver')
        console.log(data)
        dispatch({type:GET_CAREGIVER_REQUEST_SUCCESS,payload:data})
          } catch (error) {
    dispatch({type:GET_CAREGIVER_REQUEST_FAIL})
 
    }
  
    }
export const getOneCaregiver=(id)=>async(dispatch)=>{

  try {
    dispatch({type:GET_ONECAREGIVER_REQUEST})
    const {data}=await axios.get(`https://careconnect-server.onrender.com/CaregiverAPI/getOneCaregiver/${id}`)
    console.log(data)
    dispatch({type:GET_ONECAREGIVER_REQUEST_SUCCESS,payload:data})
      } catch (error) {
dispatch({type:GET_ONECAREGIVER_REQUEST_FAIL})
      }
}
export const login=(cred)=>async(dispatch)=>{
    console.log(cred)
    try {
        dispatch({type:CARE_LOGIN_REQUEST})
        const {data}=await axios.post('https://careconnect-server.onrender.com/CaregiverAPI/CareGiverlogin',cred)
        console.log(data)
        localStorage.setItem('cred',JSON.stringify(data))
        dispatch({type:CARE_LOGIN_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:CARE_LOGIN_FAIL})
    }
}
export const logout=()=>(dispatch)=>{
    dispatch({type:LOGOUT})
    localStorage.removeItem('cred')
    // window.open('/ConnexionPage','_self')
}
export  const addNewCaregiver=(newCaregiver)=>async(dispatch)=>{
    
    console.log(newCaregiver)
    try {
        dispatch({type:ADD_NEW_CAREGIVER_REQUEST})

        const {data}=await axios.post('https://careconnect-server.onrender.com/caregiverAPI/CareGiverSignup',newCaregiver)
        console.log(data)
        dispatch({type:ADD_NEW_CAREGIVER_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:ADD_NEW_CAREGIVER_FAIL})
    }
}
export const deleteCaregiver=(id)=>async(dispatch,getState)=>{
    try {
        const {loginDetails:{Caregiver}}=getState()
       const config={headers:{auth:Caregiver.token}}
       console.log(config)
        dispatch({type:DELETE_CAREGIVER_REQUEST})
        const {data}=await axios.delete(`https://careconnect-server.onrender.com/CaregiverAPI/deleteCaregiver/${id}`,config)
        localStorage.removeItem('cred')
        dispatch({type:DELETE_CAREGIVER_SUCCESS,payload:data})

    } catch (error) {
        dispatch({type:DELETE_CAREGIVER_FAIL})
    }
}
export  const updateCaregiver=(info,id)=>async(dispatch,getState)=>{
    console.log(info)
    try {
         const {loginDetails:{Caregiver}}=getState()
         console.log(Caregiver)
        const config={headers:{auth:Caregiver.token}}
        dispatch({type:UPDTAE_CAREGIVER_REQUEST})
        const {data}=await axios.put(`https://careconnect-server.onrender.com/caregiverAPI/updateCaregiver/${id}`,info,config)
        console.log(data)
        dispatch({type:UPDTAE_CAREGIVER_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:UPDTAE_CAREGIVER_FAIL})
    }
}


