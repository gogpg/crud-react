
import {addNewEmployee_const, sortEmploeesByAge_const} from "../constants/dataConstants";
 
export function addNewEmployee_action(newData){
    return {
        type: addNewEmployee_const,
        payload: newData
    }
}

export function sortEmployeesByAge_action() {
    return {
        type: sortEmploeesByAge_const
    }
}