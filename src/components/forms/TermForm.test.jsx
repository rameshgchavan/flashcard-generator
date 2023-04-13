import { render, screen } from "@testing-library/react";
import TermForm from "./TermForm";
import CreateFlashcard from "../../pages/CreateFlashcard";
import { Provider } from 'react-redux'
import { store } from '../../state/store';

const mockTerms = { term:"", defination:"" }
const mockAddMore = { push:"", index:"" }

describe("Term Form", () => {
    test("When render term form elements", () => {
       render(
            <Provider store={store}>
                <CreateFlashcard>
                    <TermForm terms={mockTerms} addMore={mockAddMore} />
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