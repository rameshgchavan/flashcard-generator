// react icons
import { MdOutlineArrowDropDown } from "react-icons/md"
import { RiDeleteBin3Line } from "react-icons/ri"
import { TbEdit } from "react-icons/tb"
// Formik
import { Field, ErrorMessage } from "formik"

// Temp terms selected image
import img from "../images/smoke.jpg"

const Terms = ({ terms, trash }) => {
  // Field CSS to avoid repeat classes
  const inputCSS = "rounded-sm py-1.5 pl-2 ring-1 ring-gray-400"

  // Funtion defination to set focus in Term field
  const handleFocus = () => {
    document.getElementById(index).focus();
  }

  //Destructured terms and trash props
  const { term, defination } = terms;
  const { remove, index } = trash;

  return (
    <div className="mb-8 hover:bg-gray-100">
      <div className="flex flex-row flex-wrap gap-4">
        {/* To show Serial Numbers */}
        <label className="shrink-0 w-6 h-6 mt-1 rounded-full bg-red-400 text-white text-center">{index + 1}</label>

        {/* Term input box */}
        <div className="flex flex-row flex-wrap min-w-0 gap-4">
          <div className="flex flex-col min-w-0 gap-2">
            <label  className="text-gray-500">Enter Term*</label>
            <div className="flex min-w-0 justify-end items-center">
              {/* Formik component Field: Term input box*/}
              <Field type="text" name={term} id={index}
                className={`min-w-0 w-96 h-10 pr-8 ${inputCSS}`}
              />
              {/* Called react icon */}
              <MdOutlineArrowDropDown size="1.2rem"
                className="text-gray-400 absolute mr-4"
              />
            </div>
            {/* Formik component shows validation error message */}
            <ErrorMessage name={term} component="p" className="text-red-700" />
          </div>

          <div className="flex flex-col min-w-0 gap-2">
            <label className="text-gray-500">Enter Defination*</label>
            <div className="flex min-w-0 justify-end items-start">
              <Field as="textarea" name={defination} rows="3" cols={40}
                className={`w-full resize-none pr-8 ${inputCSS}`} />
              {/* Called react icon */}
              <MdOutlineArrowDropDown size="1.2rem"
                className="text-gray-400 absolute mr-4 mt-2"
              />
            </div>
            {/* Formik component shows validation error message */}
            <ErrorMessage name={defination} component="p" className=" text-red-700" />
          </div>

          <div className="flex flex-row gap-4">
            {/* To show term image */}
            <div className="flex flex-col gap-2 justify-end">
              <img src={img} alt="img" style={{ height: "5.4rem", width: "8rem" }} className="rounded-md" />
            </div>

            {/* Delete and Edit button using react icons */}
            <div className="flex flex-col gap-4 justify-center">
              <RiDeleteBin3Line type="button" size="1.5rem"
                className="inline text-gray-400 hover:cursor-pointer"
                onClick={() => remove(index)} />

              <TbEdit type="button" size="1.5rem"
                className="inline text-blue-500 hover:cursor-pointer"
                onClick={handleFocus} />
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Terms