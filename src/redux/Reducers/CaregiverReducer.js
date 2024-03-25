import { ADD_NEW_CAREGIVER_FAIL, ADD_NEW_CAREGIVER_REQUEST, ADD_NEW_CAREGIVER_SUCCESS, DELETE_CAREGIVER_FAIL, DELETE_CAREGIVER_REQUEST,
     DELETE_CAREGIVER_SUCCESS, GET_CAREGIVER_REQUEST_FAIL,GET_ONECAREGIVER_REQUEST,GET_ONECAREGIVER_REQUEST_SUCCESS,
     GET_ONECAREGIVER_REQUEST_FAIL, GET_CAREGIVER_REQUEST, GET_CAREGIVER_REQUEST_SUCCESS,UPDTAE_CAREGIVER_REQUEST,UPDTAE_CAREGIVER_SUCCESS,UPDTAE_CAREGIVER_FAIL,
      CARE_LOGIN_REQUEST, CARE_LOGIN_SUCCESS, CARE_LOGIN_FAIL, LOGOUT} from "../Constants/CaregiverConstants"

export const getCaregiverReducer=(state={},action)=>{
    switch (action.type) {
        case GET_CAREGIVER_REQUEST:
        return {loading:true}
            
        case GET_CAREGIVER_REQUEST_SUCCESS:
            return {loading:false,Caregiver:action.payload}
        case GET_CAREGIVER_REQUEST_FAIL:
            return {loading:false,message:action.payload}
        default:
            return state;
    }
}
export const  getOneCaregiverReducer=(state={},action)=>{
    switch (action.type) {
        case GET_ONECAREGIVER_REQUEST:
        return {loading:true}
            
        case GET_ONECAREGIVER_REQUEST_SUCCESS:
            return {loading:false,Caregiver:action.payload}
        case GET_ONECAREGIVER_REQUEST_FAIL:
            return {loading:false,message:action.payload}
        default:
            return state;
    }
}
  
export const CareGiverloginReducer = (state = {}, action) => {
    switch (action.type) {
      case CARE_LOGIN_REQUEST:
        return { loading: true };
  
      case CARE_LOGIN_SUCCESS:
        return { loading: false, Caregiver: action.payload };
  
      case CARE_LOGIN_FAIL:
        return { loading: false, error: action.payload };
  
      case LOGOUT:
        return {};
  
      default:
        return state;
    }
  };
export const addNewCaregiverReducer=(state={},action)=>{
switch (action.type) {
    case ADD_NEW_CAREGIVER_REQUEST:
        return {loading:true}
        
    case ADD_NEW_CAREGIVER_SUCCESS:
        return {loading:false, newCaregiver:action.payload}
    case  ADD_NEW_CAREGIVER_FAIL:
        return {loading:false}
    default:
    return state
}
}
export const deleteCaregiverReducer=(state={},action)=>{
    switch (action.type) {
        case DELETE_CAREGIVER_REQUEST:
            return {loading:true}
            
        case DELETE_CAREGIVER_SUCCESS:
            return {loading:false,Caregiver:action.payload}
        case DELETE_CAREGIVER_FAIL:
            return {loading:false}
    
        default:
           return state;
    }
}
export const updateCaregiverReducer=(state={},action)=>{

    switch (action.type){
        case UPDTAE_CAREGIVER_REQUEST:
        return {...state,loading:true}
        case UPDTAE_CAREGIVER_SUCCESS:
            return {...state,loading:false}
            case UPDTAE_CAREGIVER_FAIL:
                return {...state,error:action.payload,loading:false}
                default:
                    return state;
            
    }
}
// export const UpdateCaregiverReducer=(state={},action)=>{

// switch (action.type) {
//     case UPDTAE_CAREGIVER_REQUEST:
//         return {...state,loading:true}
      

//         case UPDTAE_CAREGIVER_REQUEST_SUCCESS:
//             return {...state,loading:false}
//             case UPDTAE_CAREGIVER_REQUEST_FAIL:
//                 return {...state,error:action.payload,loading:false}
//                 default:
//                     return state;

// }
// }