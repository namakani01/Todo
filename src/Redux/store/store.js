import { legacy_createStore } from "redux";
import operationReducer from "../reducer/reducer";


const store = legacy_createStore(operationReducer)

export default store