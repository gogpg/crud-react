
import { addNewEmployee_const, sortEmploeesByAge_const } from "../constants/dataConstants";

function data_reducer(state, action){
    let newState = [...state];

    switch(action.type) {
        case addNewEmployee_const:
            newState = [...newState, action.payload]
            break;

        case sortEmploeesByAge_const:
            newState.sort((a,b) => a.age - b.age * 1)
            break;

        default:

    }
    return newState;
    
    
}

export default data_reducer;