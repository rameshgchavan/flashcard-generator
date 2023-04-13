import { render, screen } from "@testing-library/react";
import MainFlashcardForm from "./MainFlashcardForm";
import CreateFlashcard from "../../pages/CreateFlashcard";
import { Provider } from 'react-redux'
import { store } from '../../state/store';

const mockGroups = {
    groupName: "",
    description: ""
}

describe("Main Flashcard Form", () => {
    test("When render main flashcard form elements", () => {
        render(
            <Provider store={store}>
                <CreateFlashcard>
                    <MainFlashcardForm groups={mockGroups} />
                </CreateFlashcard>
            </Provider>
        );

        const gruopFieldElement = screen.getByRole("textbox", { name: "Create Group*" });
        expect(gruopFieldElement).toBeInTheDocument();

        const uploadImageElement = screen.getByRole("button", { name: "Upload Image" });
        expect(uploadImageElement).toBeInTheDocument();
        
        const descriptionFieldElement = screen.getByRole("textbox", { name: "Add description" });
        expect(descriptionFieldElement).toBeInTheDocument();
    })
}); 