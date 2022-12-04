import { createPagesInLIst_const } from "../constants/pagesListConstants";

export function createPagesInLIst_action(data) {
    return {
        type: createPagesInLIst_const,
        payload: data
    }
}