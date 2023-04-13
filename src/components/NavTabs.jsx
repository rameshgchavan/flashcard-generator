import { useState } from "react"
import { Link } from "react-router-dom"

const NavTabs = ({ children }) => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTab = (tabId) => {
        setActiveTab(tabId)
    }

    const activeCSS = "text-red-600 border-red-600";
    const inactiveCSS = "text-gray-500 border-transparent";

    return (
        <div className="flex justify-center px-4 py-6" style={{ background: "#f5f1ec" }}>
            <div className="flex flex-col min-w-0" style={{ width: "67rem" }} >
                <div>
                    <p className="text-xl font-bold mb-2">
                        Create Flashcard
                    </p>
                </div>

                <div className="flex flex-wrap min-w-0" >
                    {/* Link to navigate Create flashcard page */}
                    <Link to="/"
                        onClick={() => handleTab(1)}
                        className={`mr-4 px-4 py-2 border-b-4 ${activeTab === 1 ? activeCSS : inactiveCSS}`}
                    >
                        Create New</Link>

                    {/* Link to navigate My flashcard page */}
                    <Link to="/myflashcards"
                        onClick={() => handleTab(2)}
                        className={`mr-4 px-4 py-2 border-b-4 ${activeTab === 2 ? activeCSS : inactiveCSS}`}
                    >
                        My Flashcard</Link>
                </div>
                <hr className="mb-6 border-gray-300" />

                {/* Routed pages */}
                {children}
            </div>
        </div>
    )
}

export default NavTabs