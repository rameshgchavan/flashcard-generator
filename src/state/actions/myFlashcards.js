import { SET_FLASHCARDS } from "../constants";

const setFlashcards = (data) => {
    return {
        type: SET_FLASHCARDS,
        data
    }
}

export { setFlashcards }