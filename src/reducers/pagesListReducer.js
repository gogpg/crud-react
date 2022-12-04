import { checkAll_const, createPagesInLIst_const } from "../constants/pagesListConstants";

function pagesList_reducer(state, action) {   //puslapiavimas

    let newState = [...state];

    switch (action.type) {
        case createPagesInLIst_const:
            newState = [[]]    //nunuliname 
            const pageSize = localStorage.getItem('pageSize') || 3;

            if (action.payload) {
                for (const employee of action.payload) {
                    if (!employee.deleted) {
                        if (newState[newState.length - 1].length < pageSize) {   //jei paskutinis puslapis trumpesnis nei defaultinis
                            newState[newState.length - 1] = [...newState[newState.length - 1], employee]  ///isspredinu paskutini puslapi ir pridedu nauja employee
                        } else {
                            newState = [...newState, [employee]]   //jei pries tai esantis puslapis pilnas, susikuriame nauja puslapi ir i nauja puslapi idedame employee
                        }
                    }
                }
            }
            break;

        case checkAll_const:
            newState[action.payload.page - 1] = newState[action.payload.page - 1]?.map(e => ({ ...e, check: action.payload.isCheck }))   //page default yra 1 , prasideda masyve nuo 0, todel rasome page-1
            break;

        default:
    }
    return newState;

}

export default pagesList_reducer;

