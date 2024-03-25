import { createStore, applyMiddleware, combineReducers } from "redux";
import {thunk} from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import {  loginReducer } from "./Reducers/AdminReducer";
import {CareGiverloginReducer, addNewCaregiverReducer, deleteCaregiverReducer,getCaregiverReducer, getOneCaregiverReducer} from "./Reducers/CaregiverReducer";


const reducer=combineReducers({
    addNewAdmin:addNewCaregiverReducer,
    loginDetails:CareGiverloginReducer, 
    getCaregiver:getCaregiverReducer,
    getOneCaregiver:getOneCaregiverReducer,
    addCaregiver:addNewCaregiverReducer,
    deleteCaregiver:deleteCaregiverReducer
})

const fromLocalStorage=localStorage.getItem('cred')?JSON.parse(localStorage.getItem('cred')):null
const initState={
loginDetails:{Caregiver:fromLocalStorage}
}

const store=createStore(reducer,initState,composeWithDevTools(applyMiddleware(thunk)))

export default store;