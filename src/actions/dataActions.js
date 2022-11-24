
import {addNewEmployee_const, checkAll_const, checkEmplyee_const, loadData_const, sortEmploeesByAge_const} from "../constants/dataConstants";
 
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

export function loadData_action() {
    return {
        type: loadData_const
    }
}

export function checkAll_action(isCheck) {
    return{
        type: checkAll_const,
        payload: isCheck
    }
} 

export function checkEmplyee_action(id, isCheck) {
    return{
        type: checkEmplyee_const,
        payload: {id, isCheck}
        
    }
} 
