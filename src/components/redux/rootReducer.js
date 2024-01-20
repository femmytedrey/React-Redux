import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import { combineReducers } from "redux";
import shawarmaReducer from "./shawarma/shawarmaReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    shawarma: shawarmaReducer,
    user: userReducer
})

export default rootReducer