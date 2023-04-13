// react icons
import { MdOutlineArrowDropDown } from "react-icons/md"
// Formik
import { Field, ErrorMessage } from "formik"

const TermForm = ({ terms, addMore }) => {
  // Field CSS to avoid repeat classes
  const inputCSS = "rounded-sm py-1.5 pl-2 ring-1 ring-gray-400"

  const { term, defination } = terms; //Destructured terms props
  const { push, index } = addMore;

  return (
    <div>
      <div className="flex flex-row flex-wrap gap-4">
        {/* To show Serial Numbers */}
        <label className="shrink-0 w-6 h-6 mt-1 rounded-full bg-red-400 text-white text-center">{index}</label>

        {/* Term input box */}
        <div className="flex flex-row flex-wrap min-w-0 gap-4">
          <div className="flex flex-col min-w-0 gap-2">
            <label htmlFor="term" className="text-gray-500">Enter Term*</label>
            <div className="flex min-w-0 justify-end items-center">
              {/* Formik component Field: Term input box*/}
              <Field type="text" name={term} id="term"
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

          {/* Term defination input box */}
          <div className="flex flex-col min-w-0 gap-2">
            <label htmlFor="defination" className="text-gray-500">Enter Defination*</label>
            <div className="flex min-w-0 justify-end items-center">
              {/* Formik component Field: Term defination input box*/}
              <Field type="text" name={defination} id="defination"
                className={`min-w-0 w-96 h-10 pr-8 ${inputCSS}`}
              />
              {/* Called react icon */}
              <MdOutlineArrowDropDown size="1.2rem"
                className="text-gray-400 absolute mr-4"
              />
            </div>
            {/* Formik component shows validation error message */}
            <ErrorMessage name={defination} component="p" className=" text-red-700" />
          </div>

          {/* Select image buttom */}
          <div className="flex min-w-0">
            <button className="self-end min-w-0 w-96 md:w-40 lg:w-40 h-10 text-sm text-blue-700 rounded-sm ring-1 ring-blue-400">
              Select Image
            </button>
          </div>
        </div>
      </div>

      {/* Add more button */}
      <button type="button"
        className="block ml-8 mt-8 p-2 text-blue-700"
        onClick={() => push({ term: "", defination: "" })}
      >+ Add more</button>
    </div>
  )
}

export default TermForm