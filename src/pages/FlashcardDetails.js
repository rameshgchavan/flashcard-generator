// react icons
import { BsArrowLeft, BsPrinter, BsBoxArrowInDown } from "react-icons/bs"
import { RiArrowGoForwardLine } from "react-icons/ri"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

// Temp term image
import smoke from "../images/smoke.jpg"

// Router link and hook
import { Link, useParams } from "react-router-dom"

// Modal
import ModalShare from "../components/ModalShare"

// Hook
import { useEffect, useState } from "react"

// Redux
import { useSelector, useDispatch } from "react-redux"
import { setFlashcard } from "../state/actions"


const FlashcardDetails = () => {
  const { groupName } = useParams();

  // Getting data from redux store
  const flashcard = useSelector(state => state.flashcardDetails);

  const dispatch = useDispatch();


  //setting data from local storage to redux store 
  useEffect(() => {
    let data = localStorage.getItem("flashcards")
      ? JSON.parse(localStorage.getItem("flashcards"))
      : []

    dispatch(setFlashcard(data, groupName))
  }, [])

   //----- Function and Hook to handle modal-------
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(true)
  }

  const handleChoseModal = () => {
    setShowModal(false)
  }
// -------------------------------------------------


  //----- Function and Hook to handle carousel-------
  const [carousel, setCarousel] = useState(1)
  const handleCarouselBack = () => {
    carousel > 1
      ? setCarousel(carousel - 1)
      : setCarousel(carousel)
  }

  const handleCarouselForward = () => {
    //Destructured flashcard to get terms
    const { terms } = flashcard;

    carousel < terms.length
      ? setCarousel(carousel + 1)
      : setCarousel(carousel)
  }
  // -----------------------------------------------------

  const activelist = "text-red-600";
  const inactivelist = "text-black";

  return (
    <div>
      {/* Link to back navigate my flashcard */}
      <Link to="/myflashcards"
        className={"text-lg font-bold"}
      >
        {/* react icon as back button*/}
        <BsArrowLeft size={24} className='mr-4 inline' /> {flashcard.groupName}
      </Link>

      {/* To show group description */}
      <p className="text-gray-500 ml-12 mt-2 mb-8 break-words">{flashcard.description}</p>

      {/* To show list of terms */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="bg-white drop-shadow-md rounded-md h-72">
          {/* List header */}
          <p htm className="py-2 px-4 text-sm text-gray-400">Flashcards</p>
          <hr className="ml-2 mr-6" />

          {/* Mapped terms */}
          <ul className="px-4 py-2 overflow-y-auto h-60">
            {flashcard.terms?.map((item, index) => {
              return (
                <li className={`py-2 hover:cursor-pointer truncate
                 ${carousel - 1 == index ? activelist : inactivelist}`}

                  key={index}
                  onClick={() => setCarousel(index + 1)}>
                  {item.term}</li>
              )
            })}
          </ul>
        </div>

        {/* To show temp term image and defination  */}
        <div className="grid grid-cols-1 lg:col-span-2 gap-6 lg:flex flex-row min-w-0
                        bg-white drop-shadow-md rounded-md px-8 py-14">
          <img src={smoke} alt="term-img" className="w-64 h-44 " />
          <div className="text-gray-500 text-sm break-words overflow-y-auto h-52">
            {flashcard.terms?.[carousel - 1].defination}</div>
        </div>

        {/* Buttons for Share, Download and Print */}
        <div className="text-gray-500" >
          <div className="flex flex-row gap-4 px-4 bg-white drop-shadow-md rounded-md h-10 mb-4 hover:cursor-pointer"
            onClick={handleShowModal}
          >
            {/* react icon as share button*/}
            <RiArrowGoForwardLine as="button" size={20} className="mt-2.5" />
            <p className="mt-2">Share</p>
          </div>

          <div className="flex flex-row gap-4 px-4 bg-white drop-shadow-md rounded-md h-10 mb-4 hover:cursor-pointer">
            {/* react icon as download button*/}
            <BsBoxArrowInDown size={20} className="mt-2.5" />
            <p className="mt-2">Download</p>
          </div>

          <div className="flex flex-row gap-4 px-4 bg-white drop-shadow-md rounded-md h-10 mb-4 hover:cursor-pointer">
            {/* react icon as print button*/}
            <BsPrinter size={20} className="mt-2.5" />
            <p className="mt-2">Print</p>
          </div>
        </div>
      </div>

      {/* To show shadow */}
      <div className="flex justify-center mt-6">
        <div className="h-0.5 w-96 blur-sm bg-gradient-to-r from-transparent via-gray-400 to-transparent">-</div>
      </div>

      {/* Carousel */}
      <div className="flex flex-rows-1 text-gray-500 mt-6 mb-32 place-content-center">
        {/* react icon as back*/}
        <IoIosArrowBack size={20} className="inline hover:cursor-pointer"
          onClick={handleCarouselBack} />

        {/* To show current term and number of terms */}
        <p className="px-12">{`${carousel}/${flashcard.terms?.length}`}</p>

        {/* react icon as forward*/}
        <IoIosArrowForward size={20} className="inline hover:cursor-pointer"
          onClick={handleCarouselForward} />
      </div>

      {/* Modal component */}
      <ModalShare show={showModal} close={handleChoseModal} />
    </div>
  )
}

export default FlashcardDetails