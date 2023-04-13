import { render, screen } from "@testing-library/react";
import CreateFlashcard from "./CreateFlashcard";
import { Provider } from 'react-redux'
import { store } from '../state/store';

describe("Create Flashcard", () => {
    test("When Create Button renders", () => {
        render(
            <Provider store={store}>
                <CreateFlashcard />
            </Provider>
        );

        const createButtonElement = screen.getByText("Create");
        expect(createButtonElement).toBeInTheDocument;
    })
}); 