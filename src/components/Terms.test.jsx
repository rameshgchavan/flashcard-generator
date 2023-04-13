import { render, screen } from "@testing-library/react";
import Terms from "./Terms";
import CreateFlashcard from "../pages/CreateFlashcard";
import { Provider } from 'react-redux'
import { store } from '../state/store';

const mockTerms = { term:"", defination:"" }
const mockAddMore = { remove:"", index:"" }

describe("Terms", () => {
    test("When render terms elements", () => {
       render(
            <Provider store={store}>
                <CreateFlashcard>
                    <Terms terms={mockTerms} trash={mockAddMore} />
                </CreateFlashcard>
            </Provider>
        );

        const srNoElement = screen.getByText("1");
        expect(srNoElement).toBeInTheDocument();

        const termElement = screen.getByRole("textbox", { name: "Enter Term*" });
        expect(termElement).toBeInTheDocument();
        
        const definationElement = screen.getByRole("textbox", { name: "Enter Defination*" });
        expect(definationElement).toBeInTheDocument();
        
        const selectImageElement = screen.getByRole("button", { name: "Select Image" });
        expect(selectImageElement).toBeInTheDocument();

        const addMoreElement = screen.getByRole("button", { name: "+ Add more" });
        expect(addMoreElement).toBeInTheDocument();
    })
}); 