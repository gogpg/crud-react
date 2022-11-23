
import {addNewEmployee_const, checkAll_const, loadData_const, sortEmploeesByAge_const} from "../constants/dataConstants";
 
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