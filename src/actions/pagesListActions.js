import { checkAll_const, createPagesInLIst_const } from "../constants/pagesListConstants";

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