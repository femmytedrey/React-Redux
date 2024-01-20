import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userType"

const initialState = {
    loading: true,
    user: [],
    error: ''
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading: true,
                
            }
        case FETCH_USERS_SUCCESS:
            return{
                ...state,
                loading: false,
                user: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return{
                ...state,
                loading: false,
                user: [],
                error: action.payload
            }
        default:
            return state
    }
}

export default userReducer