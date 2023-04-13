// Components
import Terms from "../components/Terms"
import MainFlashcardForm from "../components/forms/MainFlashcardForm"
import TermForm from "../components/forms/TermForm"

// Validation
import { Formik, Form, FieldArray } from "formik"
import * as Yup from "yup"

// Redux state
import { useSelector, useDispatch } from "react-redux"
import { createFlashcard } from "../state/actions"

const CreateFlashcard = () => {
  const flashcards = useSelector(state => state.createFlashcards) //get initail state
  localStorage.setItem("flashcards", JSON.stringify(flashcards)); //local store initial state

  const dispatch = useDispatch();

  return (
    <Formik
      // initailized formik filed values
      initialValues={{
        groupName: "",
        description: "",
        terms:
          [{
            term: "",
            defination: ""
          }]
      }}
      //formik filed values validation using yup
      validationSchema={Yup.object({
        groupName: Yup.string().required("Required"),

        terms: Yup.array().of(Yup.object().shape({
          term: Yup.string().required("Required"),
          defination: Yup.string().required("Required")
        }))
      })}
      // get submitted formik filed values
      onSubmit={values => {
        dispatch(createFlashcard(values))
        alert("Saved successfully.")
      }}
    >
      <div>
        {/* Form 1:Main flashcard form (Group create) */}
        <Form>
          <MainFlashcardForm groups={{
            groupName: "groupName",
            description: "description"
          }} />
        </Form>

        {/* Form 2: Term form and add more Terms */}
        <Form className="mt-4">
          {/* Pushed more terms using formik field array */}
          <FieldArray name="terms">
            {
              props => {
                {/* Destructed filedarray props */ }
                const { push, remove, form } = props;
                const { values } = form;
                const { terms } = values;

                return (
                  <div className="p-8 bg-white rounded-md drop-shadow-md">
                    {
                      terms.map((term, index) => {
                        return (
                          <div key={index}>
                            {
                              terms.length - 1 > index
                                ? <Terms  // called Terms component 
                                  terms={{
                                    term: `terms.${index}.term`,
                                    defination: `terms.${index}.defination`
                                  }}

                                  trash={{
                                    remove,
                                    index
                                  }}
                                />
                                : <TermForm // called Term form component 
                                  terms={{
                                    term: `terms.${index}.term`,
                                    defination: `terms.${index}.defination`
                                  }}

                                  addMore={{
                                    push,
                                    index: terms.length
                                  }}
                                />
                            }
                          </div>
                        )
                      })
                    }
                  </div>
                )
              }
            }
          </FieldArray>


          {/*Submit button (Create) */}
          <div className="flex justify-center mt-8">
            <button className="mt-8 bg-red-700 text-sm text-white rounded-sm mt-8 ml-4 py-2 px-16 ring-1 ring-red-700"
              type="submit">Create</button>
          </div>
        </Form>
      </div>
    </Formik>
  )
}

export default CreateFlashcard