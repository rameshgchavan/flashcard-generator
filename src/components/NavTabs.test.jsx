import { render, screen } from "@testing-library/react"
import user from "@testing-library/user-event"
import { act } from "react-dom/test-utils"

import NavTabs from "./NavTabs"
import { BrowserRouter } from "react-router-dom";

describe("Nav Tabs", () => {
    test("render title and links text", () => {
        render(<BrowserRouter><NavTabs /></BrowserRouter>);

        const pElement = screen.getByText("Create Flashcard");
        expect(pElement).toBeInTheDocument();

        const createLinkElement = screen.getByText("Create New");
        expect(createLinkElement).toBeInTheDocument();

        const flashcardLinkElement = screen.getByText("My Flashcard");
        expect(flashcardLinkElement).toBeInTheDocument();
    });

    test("after click link change it to red color", async () => {
        render(<BrowserRouter><NavTabs /></BrowserRouter>);

        const createLinkElement = screen.getByText("My Flashcard");
        expect(createLinkElement).toBeInTheDocument();
        await act(async () => {
            user.click(createLinkElement);
            expect(createLinkElement).toHaveStyle("color:text-red-600");
        })


        const flashcardLinkElement = screen.getByText("My Flashcard");
        expect(flashcardLinkElement).toBeInTheDocument();
        await act(async () => {
            user.click(flashcardLinkElement);
            expect(flashcardLinkElement).toHaveStyle("color:text-red-600");
        })
    });
})