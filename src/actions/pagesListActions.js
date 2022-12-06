import { checkAll_const, checkEmplyee_const, createPagesInLIst_const, focusEmployee_const } from "../constants/pagesListConstants";

export function createPagesInLIst_action(data) {
    return {
        type: createPagesInLIst_const,
        payload: data
    }
}

export function checkAll_action(page, isCheck) {
    return {
        type: checkAll_const,
        payload: { page, isCheck }
    }
}

export function checkEmplyee_action(id, page, isCheck) {
    return {
        type: checkEmplyee_const,
        payload: { id, page, isCheck }

    }
}

export function focusEmployee_action(id, page) {
    return {
        type: focusEmployee_const,
        payload: { id, page }
    }
}