// react icons
import { BsArrowRight } from 'react-icons/bs'

import { Link } from 'react-router-dom'

const Flashcard = ({ details }) => {
    //Destructured details props
    const { groupImage, groupName, cards, groupDescription } = details;

    return (
        <div className="p-8 bg-white rounded-md drop-shadow-md">
            <div className="flex flex-row">
                {/* Flashcard group Image */}
                {
                    groupImage
                        ? <img src={groupImage} alt="group-img" />
                        : <p style={{ background: "#f5f1ec" }} className="rounded-full w-14 h-14" />
                }

                {/* Flashcard group name and number of cards */}
                <div className="ml-5 mt-2">
                    <p className="text-xl font-bold truncate w-40">{groupName}</p>
                    <p className="block text-xs text-gray-500">{cards} Cards</p>
                </div>
            </div>

            {/* Flashcard group description */}
            <p className="text-gray-500 text-sm mt-5 mb-8 overflow-hidden h-10">
                {groupDescription}
            </p>

            {/* Link to navigate flashcard details page */}
            <Link to={`/flashcarddetails/${groupName}`}
                className={`text-red-600`}
            >
                View Cards <BsArrowRight className='ml-4 inline' />
            </Link>
        </div>
    )
}

export default Flashcard