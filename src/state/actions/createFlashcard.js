import { CREATE_FLASHCARD } from "../constants";

const createFlashcard = (data) => {
    return {
        type: CREATE_FLASHCARD,
        data
    }
}

export { createFlashcard }