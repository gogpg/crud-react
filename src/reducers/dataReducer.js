

import { addNewEmployee_const, checkAll_const, checkEmplyee_const, deleteAllSelectedEmployees_const, loadData_const, sortEmploeesByAge_const } from "../constants/dataConstants";

function data_reducer(state, action) {

    let newState = state ? [...state] : null;

    switch (action.type) {
        case addNewEmployee_const:
            newState = newState?.map(e => ({ ...e, check: false }));
            newState = [...newState, action.payload];
            localStorage.setItem('data', JSON.stringify(newState));
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
            newState = newState?.map(e => e.check ? { ...e, deteted: true, check: false } : { ...e });
            break;

        default:

    }
    return newState;


}

export default data_reducer;