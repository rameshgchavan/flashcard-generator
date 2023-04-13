import { SET_FLASHCARDS } from "../constants"

const initailState = [];

const myFlashcardsReducer = (state = initailState, action) => {
    const { type, data } = action;

    switch (type) {
        case SET_FLASHCARDS:
            return[...data]
        default:
            return state
    }
}

export { myFlashcardsReducer }