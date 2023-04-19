import { SET_FLASHCARD, VIEW_TREMS } from "../constants";

const initailState = {};

const flashcardDetailsReducer = (state = initailState, action) => {
    const { type, data, groupName } = action;

    switch (type) {
        case SET_FLASHCARD:
            const flashCards = data.find((flashcards) => {
                return flashcards.groupName.trim() === groupName
            })
            return flashCards ? flashCards : []

        case VIEW_TREMS:
            return [...data]
        default:
            return state
    }
}

export { flashcardDetailsReducer }