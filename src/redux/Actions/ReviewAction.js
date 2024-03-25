import axios from "axios";
import {ADD_REVIEW_SUCCESS,ADD_REVIEW_REQUEST, ADD_REVIEW_FAIL,
    DELETE_REVIEW_REQUEST,DELETE_REVIEW_FAIL,DELETE_REVIEW_SUCCESS,
    GET_ALL_REVIEWBYID_REQUEST,GET_ALL_REVIEWBYID_SUCCESS, GET_ALL_REVIEWBYID_REQUEST_FAIL} from '../Constants/ReviewConstants';

export const getAllReviewById=(caregiverId) => async (dispatch) => {
    try {
      dispatch({ type: GET_ALL_REVIEWBYID_REQUEST });
  
      const { data } = await axios.get(`https://careconnect-server.onrender.com/ReviewAPI/getAllReview?caregiverId=${caregiverId}`);
  
      dispatch({ type:GET_ALL_REVIEWBYID_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  GET_ALL_REVIEWBYID_REQUEST_FAIL });
      console.error('Error ', error);
    }
  };

export const addReview=(review,id)=>async(dispatch) => {
    try {
    dispatch({type:ADD_REVIEW_REQUEST})
    const {data}=await axios.post(`https://careconnect-server.onrender.com/ReviewAPI/AddReview/${id}`,review)
    dispatch({type:ADD_REVIEW_SUCCESS,payload:data})
} catch (error) {
    dispatch({type:ADD_REVIEW_FAIL})
    console.error('Error ', error);
}
};


export const deleteReview=(caregiverId)=>async(dispatch,getState)=>{
    try {
        const {loginDetails:{Admin}}=getState()
        const config={headers:{auth:Admin.token}}
        dispatch({type:DELETE_REVIEW_REQUEST})
        const {data}=await axios.delete(`https://careconnect-server.onrender.com/ReviewAPI/deleteReview/${caregiverId}`,config)
        dispatch({type:DELETE_REVIEW_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:DELETE_REVIEW_FAIL})
        console.error('Error ', error);
    }
  };
  

