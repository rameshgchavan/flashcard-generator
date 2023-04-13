import { CREATE_FLASHCARD } from "../constants"

const initailState = localStorage.getItem("flashcards")
    ? JSON.parse(localStorage.getItem("flashcards"))
    : [];

const createFlashcardsReducer = (state = initailState, action) => {
    const { type, data } = action;

    switch (type) {
        case CREATE_FLASHCARD:
            const exsist = state.find((group) => group.groupName === data.groupName)
            return exsist ? alert("Flashcard group exsist.") : [...state, data]
        default:
            return state
    }
}

export { createFlashcardsReducer }