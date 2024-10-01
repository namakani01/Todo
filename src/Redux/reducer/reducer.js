import { ADD_TODO , DELETE_ALL_TODOS, DELETE_TODO,  UPDATE_TODO , UPDATE_DESC } from "../actions/action";

const initialState = [
    { id : 1 , todo : 'Buy Laptop' , completed : false , description : 'Hello'},
    { id : 2 , todo : 'Watering Plants' , completed : true , description : 'world'},
]


const operationReducer = (state = initialState , action)=>
{
   switch(action.type)
   {
    case ADD_TODO:
        return [...state,action.payload]
   
    case DELETE_TODO :
        return state.filter(todo =>(todo.id !== action.payload))

    case UPDATE_TODO : 
    return state.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
    );

    case UPDATE_DESC : 
    return state.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
    );
        
    case DELETE_ALL_TODOS  :
        return [];
     default : return state;
   }
}
export default operationReducer;  //export the reducer so it can be used in the store


