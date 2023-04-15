import { Outlet, Route, Routes } from "react-router-dom";

// Pages
import CreateFlashcard from "../pages/CreateFlashcard";
import MyFlashcards from "../pages/MyFlashcards"
import FlashcardDetails from "../pages/FlashcardDetails";

const PageRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Outlet />} >
          <Route index element={<CreateFlashcard />} /> 
          <Route path="/myflashcards" element={<MyFlashcards />} />
          <Route path="/flashcarddetails/:groupName" element={<FlashcardDetails />} />
          <Route path="*" element={<CreateFlashcard />} />
        </Route>
      </Routes>
    </div>
  )
}

export default PageRoutes