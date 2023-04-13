import { SET_FLASHCARD, VIEW_TREMS } from "../constants";

const setFlashcard = (data, groupName) => {
    return {
        type: SET_FLASHCARD,
        data,
        groupName
    }
}

const viewTerms = (data) => {
    return {
        type: VIEW_TREMS,
        data
    }
}
export { viewTerms, setFlashcard }