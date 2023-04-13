import { render, screen} from "@testing-library/react"

import ModalShare from "./ModalShare"

describe("ModalShare", ()=>{
    test("When modal shate renders element", ()=>{
        render(<ModalShare/>);
    })
})