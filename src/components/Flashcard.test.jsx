import { render, screen } from "@testing-library/react";
import Flashcard from "./Flashcard";
import { Provider } from 'react-redux'
import { store } from '../state/store';
import { BrowserRouter } from "react-router-dom";


const mockDetails = {
    groupImage: null,
    groupName: "",
    cards: "",
    groupDescription: ""
}

describe("Flashcard", () => {
    test("When render Create Group* Lable", () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Flashcard details={mockDetails} />
                </Provider>
            </BrowserRouter>);

        const cardElement = screen.getByText("Cards");
        expect(cardElement).toBeInTheDocument();

        const viewCardsElement = screen.getByText("View Cards");
        expect(viewCardsElement).toBeInTheDocument();
    })
}); 