// react icons
import { MdOutlineUploadFile, MdOutlineArrowDropDown } from "react-icons/md"
// Formik
import { Field, ErrorMessage } from "formik"

const MainFlashcardForm = ({ groups }) => {
    // Field CSS to avoid repeat classes
    const inputCSS = "rounded-sm py-1.5 pl-2 ring-1 ring-gray-400"

    const { groupName, description } = groups; //Destructured groups props

    return (
        <div className="p-8 bg-white rounded-md drop-shadow-md">
            <div className="flex flex-row flex-wrap min-w-0 gap-4">
                {/* Group Name input box */}
                <div className="flex flex-col min-w-0 gap-2">
                    <label htmlFor="createGroup" className="text-gray-500">Create Group*</label>
                    <div className="flex min-w-0 justify-end items-center">
                        {/* Formik component Field: Group Name input box*/}
                        <Field type="text" name={groupName} id="createGroup"
                            className={`min-w-0 w-96 h-10 pr-8 ${inputCSS}`}
                        />
                        {/* Called react icon */}
                        <MdOutlineArrowDropDown size="1.2rem"
                            className="text-gray-400 absolute mr-4"
                        />
                    </div>
                    {/* Formik component shows validation error message */}
                    <ErrorMessage name={groupName} component="p" className="text-red-700" />
                </div>

                {/* Upload image button */}
                <div className="flex min-w-0">
                    <button className="self-end flex justify-center min-w-0 w-96 md:w-44 lg:w-44 h-10 py-2 text-sm text-blue-700 rounded-sm ring-1 ring-gray-400 hover:cursor-pointer">
                        <div className="self-center flex flex-row gap-4">
                            <MdOutlineUploadFile size="1.5rem" />  {/* Called react icon */}
                            <p>Upload Image</p>
                        </div>
                    </button>
                </div>
            </div>

            <label htmlFor="description" className="block text-gray-500 mt-4">Add description</label>
            {/* Formik component Field: Group description input box*/}
            <div className="flex mt-2">
                <Field as="textarea" name={description} id="description" rows="4" cols="105"
                    className={`min-w-0 resize-none text-sm ${inputCSS}`}
                    placeholder="Describe the roles, responsibility, skills required for job and help cadidate uderstand the
        role better."
                />
            </div>
        </div>
    )
}

export default MainFlashcardForm