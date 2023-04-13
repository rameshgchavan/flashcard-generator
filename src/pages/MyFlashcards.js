// Component
import Flashcard from "../components/Flashcard"

// Hook
import { useEffect, useState } from "react"

// Redux 
import { useSelector, useDispatch } from "react-redux"
import { setFlashcards } from "../state/actions/myFlashcards"

const MyFlashcards = () => {
  const [viewCards, setViewCards] = useState(6);

  const flashcards = useSelector(state => state.myFlashcards);
  const dispatch = useDispatch();

  useEffect(() => {
    //setting data from local storage to redux store 
    const data = localStorage.getItem("flashcards")
      ? JSON.parse(localStorage.getItem("flashcards"))
      : []

    dispatch(setFlashcards(data))
  }, [])

  return (
    <div className="py-14 mb-40">

      {/* Mapped created flashcards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {
          flashcards.map((data, index) => {
            //Destructured data items
            const { groupName, terms, description } = data

            return index < viewCards
              ? <Flashcard details={{
                key: index,
                groupImage: "",
                groupName: groupName,
                cards: terms.length,
                groupDescription: description
              }}
              />
              : null
          })
        }
      </div>

      {/* See all button */}
      <button className="float-right m-6 text-red-600"
        onClick={() => setViewCards(flashcards.length)}
      >See all</button>
    </div>
  )
}

export default MyFlashcards