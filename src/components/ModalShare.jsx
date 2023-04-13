// react icons
import { CgClose } from "react-icons/cg"
import { BsShare } from "react-icons/bs"
import { RiCheckboxMultipleLine } from "react-icons/ri"
import { FaFacebookSquare } from "react-icons/fa"
import { SiLinkedin } from "react-icons/si"
import { FaWhatsappSquare, FaEnvelope } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"

// react-copy-to-clipboard
import { CopyToClipboard } from "react-copy-to-clipboard"

const ModalShare = ({ close, show }) => {
    if (!show) return null

    // Function to close modal on div clicked
    const handleClose = (e) => {
        if (e.target.id === "divClose") close()
    }

    // Getting url of flashcard
    const flashcardURL = window.location.href;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            id="divClose"
            onClick={handleClose}
        >
            <div className="bg-white rounded-md ">
                {/* X button*/}
                <div className="float-right m-2">
                    {/* react icon as x button*/}
                    <CgClose className="text-gray-500 hover:cursor-pointer"
                        onClick={close}
                    />
                </div>

                <div className="p-8 w-96">
                    <p className="font-bold">Share</p>

                    <div className="grid grid-col-2 gap-10">
                        <div className="flex gap-3">
                            {/* To show url*/}
                            <div className="basis-3/4 flex border-2 border-dashed rounded-md mt-4">
                                <label className="p-2 text-gray-400 text-xs">Link:</label>
                                <label className="p-2 text-black text-xs w-52 truncate">{flashcardURL}</label>
                            </div>
                            <div className="flex gap-4">
                                {/* react-copy-to-clipboard component copies url to clipboard */}
                                <CopyToClipboard text={flashcardURL}>
                                    {/* react icon as copy button*/}
                                    <RiCheckboxMultipleLine size={20} className="text-gray-500 mt-6"
                                        onClick={() => alert("Link copied")} />
                                </CopyToClipboard>
                                {/* Share react icon*/}
                                <BsShare className="text-gray-500 mt-6" />
                            </div>
                        </div>

                        {/* Social media icons */}
                        <div className="flex gap-12">
                            <FaFacebookSquare size={25} className="text-blue-800" />
                            <SiLinkedin size={25} className="text-cyan-800" />
                            <FaWhatsappSquare size={25} className="text-green-700" />
                            <BsTwitter size={25} className="text-cyan-500" />
                            <FaEnvelope size={25} className="text-gray-500" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalShare