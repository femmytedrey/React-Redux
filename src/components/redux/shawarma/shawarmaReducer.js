import { BUY_SHAWARMA } from "./shawarmaType"

const initialState = {
    numOfShawarma: 30
}

const shawarmaReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_SHAWARMA:
            return{
                ...state,
                numOfShawarma: state.numOfShawarma - 1
            }
        default:
            return state
    }
}

export default shawarmaReducer