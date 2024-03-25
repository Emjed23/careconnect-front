
import {
  ADD_NEW_ADMIN_FAIL,
    ADD_NEW_ADMIN_REQUEST,
    ADD_NEW_ADMIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT,
  } from '../Constants/AdminConstants';

export const addNewAdminReducer = (state = {}, action) => {
    switch (action.type) {
      case ADD_NEW_ADMIN_REQUEST:
        return { loading: true };
  
      case  ADD_NEW_ADMIN_SUCCESS:
        return { loading: false, message: action.payload };
  
      case ADD_NEW_ADMIN_FAIL:
        return { loading: false, error: "Admin already exists" };
  
      default:
        return state;
    }
  };
  
  export const loginReducer = (state = {}, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        return { loading: true };
  
      case LOGIN_SUCCESS:
        return { loading: false, user: action.payload };
  
      case LOGIN_FAIL:
        return { loading: false, error: action.payload };
  
      case LOGOUT:
        return {};
  
      default:
        return state;
    }
  };