import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import FlashcardDetails from "./FlashcardDetails"

import { Provider } from 'react-redux'
import { store } from '../state/store';

describe("Flashcard Details", () => {
    test("When flashcard details renders element", () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <FlashcardDetails />
                </Provider>
            </BrowserRouter>
        );

        const listHeaderElemet = screen.getByText("Flashcards");
        expect(listHeaderElemet).toBeInTheDocument();

        const backLinkElement = screen.getByRole("link");
        expect(backLinkElement).toBeInTheDocument();

        const listElement = screen.getByRole("list");
        expect(listElement).toBeInTheDocument();

        const imgElement = screen.getByRole("img");
        expect(imgElement).toBeInTheDocument();
    })
})