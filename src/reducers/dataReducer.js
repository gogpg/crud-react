

import { addNewEmployee_const, cancelEdit_const, checkAll_const, checkEmplyee_const, deleteAllSelectedEmployees_const, deleteEmployee_const, focusEmployee_const, loadData_const, saveEdit_const, sortEmploeesByAge_const } from "../constants/dataConstants";
import updateData from "../functions/updateDataInLocalStorage";

function data_reducer(state, action) {

    let newState = state ? [...state] : null;

    switch (action.type) {
        case addNewEmployee_const:
            newState = newState?.map(e => ({ ...e, check: false, focus: false }));
            newState = [...newState, action.payload];
            updateData(newState); //update data to local storage
            break;

        case sortEmploeesByAge_const:
            newState.sort((a, b) => a.age - b.age * 1)
            break;

        case loadData_const:
            newState = JSON.parse(localStorage.getItem('data')) || []
            break;

        case checkAll_const:
            newState = newState?.map(e => ({ ...e, check: action.payload }))
            break;

        case checkEmplyee_const:
            newState = newState?.map(e => e.id === action.payload.id ? { ...e, check: action.payload.isCheck } : { ...e });
            break;

        case deleteAllSelectedEmployees_const:
            newState = newState?.map(e => e.check ? { ...e, deleted: true, check: false, focus: false } : { ...e, focus: false });
            updateData(newState);
            break;

        case deleteEmployee_const:
            newState = newState?.map(e => ({ ...e, check: false, focus: false }));  //atzymime visus pries tai pazymetus. pries trinant viena employee.
            newState = newState?.map(e => e.id === action.payload ? { ...e, deleted: true } : { ...e });
            updateData(newState)
            break;

        case focusEmployee_const:
            newState = newState?.map(e => e.id === action.payload ? { ...e, focus: true } : { ...e, focus: false });
            break;

        case cancelEdit_const:
            newState = newState?.map(e => ({ ...e, focus: false }));
            break;

        case saveEdit_const:
            newState = newState?.map(e => e.id === action.payload.id ? { ...e, ...action.payload.data, focus: false } : { ...e });
            break;


        default:

    }
    return newState;


}

export default data_reducer;