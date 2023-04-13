// imported all pages reducer and combined into one root reducer
import { createFlashcardsReducer } from "./createFlashcard"
import { myFlashcardsReducer } from "./myFlashcards"
import { flashcardDetailsReducer } from "./flashcardDetails"

import { combineReducers } from "redux"

const rootReducer = combineReducers({
    createFlashcards: createFlashcardsReducer,
    myFlashcards: myFlashcardsReducer,
    flashcardDetails: flashcardDetailsReducer
})

export { rootReducer }
