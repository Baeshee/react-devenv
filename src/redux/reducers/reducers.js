// Import the actions from the Action file, change actionName to the name of your actions
import { actionName } from '../actions';

// Reducer body, change the function name to the name you want to give your reducer
// State can be a string, object, array etc.
// Don't forget to change the actionName to the name of your imported action
export const insertAction = (state = [], action) => {
    switch(action.type){
        case actionName:    
            return action.payload;
        default:
            return state;
    }
}