
import { addNewEmployee_const, cancelEdit_const, checkAll_const, checkEmplyee_const, deleteAllSelectedEmployees_const, deleteEmployee_const, focusEmployee_const, loadData_const, saveEdit_const } from "../constants/dataConstants";

export function addNewEmployee_action(newData) {
    return {
        type: addNewEmployee_const,
        payload: newData
    }
}

export function loadData_action() {
    return {
        type: loadData_const
    }
}



export function checkEmplyee_action(id, isCheck) {
    return {
        type: checkEmplyee_const,
        payload: { id, isCheck }

    }
}

export function deleteAllSelectedEmployees_action() {
    return {
        type: deleteAllSelectedEmployees_const
    }
}

export function deleteEmployee_action(id) {
    return {
        type: deleteEmployee_const,
        payload: id
    }

}

export function focusEmployee_action(id) {
    return {
        type: focusEmployee_const,
        payload: id
    }
}

export function cancelEdit_action() {
    return {
        type: cancelEdit_const
    }
}

export function saveEdit_action(id, data) {
    return {
        type: saveEdit_const,
        payload: { id, data }
    }
}