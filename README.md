# Flashcard Generator

## My project is about to let user to create and see flashcards that he wants to plan his tasks, activities or routines.

### UI:
  Project view is divided into 3 parts:
   1. Header: conatains Logo
   2. Navbar: Using react-router-dom package I have made 2 Links first link navigate to create new flashcards and second link navigate to show created flashcards.
   3. Contents: contains pages: 
               I have created 3 pages named as **CreateFlashcard**, **MyFlashcards** and **FlashcardDetails** inside src/pages folder

A. To create new flashcards **CreateFlashcard** page cantains 2 forms one for to create a group of terms and named as **MainFlashcardForm** and another for to create terms named as **TermForm** and at the end I have added a button named ad Create that will submit data to local storage. 
   a. MainFlashcardForm contains:
   
    1. Create Group input field that is required
    2. Image Upload button
    3. Description input field
        
   b. TermForm contains:
        1. Label to show Serial number
        2. Enter Term input field that is required
        3. Enter defination input filed that also is required
        4. Select Image button and
        5. + Add more button
        
   c. On cliking + Add more button **Terms** component get loaded inside TermForm. 
       Terms component contains:
        1. Label to show Serial number
        2. Enter Term input field that is required
        3. Enter defination input filed that also is required
        4. Image element and
        5. Trash and Edit buttons:
           Trash button will remove term component respectively and Edit button will focus in and put cursor inside Term input field.
           
   d. Libraries/ Utilities/ Packages:
        1. I have used formik library with help of yup: 
           Formik component to Form validation of required input fields and FieldArray component to store Terms componet as array.
           Link: https://formik.org/docs/overview
        2. I have used react icons library to show icons indside button and input fields.   
        
B. To see created flashcards **MyFlashcards** page will show initailly 6 flashcards and a button named as See all. On clicking See all button all the created flashcards will be shown.
   a. I have created **Flahscard** component that contains:
        1. img Element to show flashcard's group image.
        2. 3 paragraph elements those show name of flashcard group, number of terms and description respectively.
        3. Using react-router-dom package I made a link to navigate **FlashcardDetails** page.
         
C. To see terms inside of flashcard **FlashcardDetails** page contains:
   a. react icons that is used for to create a link to navigate **MyFlashcards** page and to show name of flashcard group.
   b. a paragraph element to show flashcard group description.
   c. ul element to show list of terms.
   d. img element to show term image and a div element to show term defination.
   e. 3 buttons Share, Download and Print respectively.
   f. I have made carousel using react icons as button element and paragraph element.
   
   1. Either clickig on list of terms or by clicking carousel button term image and defination will be shown accrodingly.
   2. On clicking print button a **ModalShare** modal get shown that contains:
      a. react icons X as button to close modal.
      b. Paragraph element that shows Share title.
      c. 2 Label elements to show Link and url respectively.
      d. react icons copy, share and social media icons. On clicking Copy button the flashcard url get copied to clipboard.
      
   g. Libraries/ Utilities/ Packages:   
      1. I have ued react icon library.
         Link: https://react-icons.github.io/react-icons/
      2. CopyToClipboard componet of react-copy-to-clipboard package.
         Link: https://www.npmjs.com/package/copy-to-clipboard
      3. window.location.href to get current url of page.
      
### Tailwind:
  To beautify UI I have used tailwind utility first CSS framework packed with classes.
  Read more: https://tailwindcss.com/docs/installation
      
### Routing: 
  In PageRoutes.js file by using react-router-dom and its component Routes, Route, Outlet I have routed:
  1. **CreateFlashcard** page on route "/" and as default landing page.
  2. **MyFlashcards** page on route "/myflashcards".
  3. **FlashcardDetails** page on route "flashcarddetails/:groupName". Here groupName is parameter.
  4. if user enters other/wrong route then page not found route * will load **CreateFlashcard** page.
  Read more:
  1. https://www.npmjs.com/package/react-router-dom
  2. https://reactrouter.com/en/main/start/tutorial

### React Redux:
  I have used react redux library for state managemenet. I have created 4 folders as:
  1. constants: this folder contains index.js in this file I have created constants those will be used in action and reducer.
  
  2. actions: this folder contains: 4 files as follows
     createFlashcard.js: contains createFlashcard action, 
     myFlashcards.js: contains setFlashcards action, 
     flashcardDetails.js: contains setFlashcard and viewTerms actions 
     index.js: contains all action to combine in one to avoid confliction
     
  3. reducers: this folder contains: 4 files as follows
     createFlashcard.js: contains createFlashcardsReducer reducer, 
     myFlashcards.js: contains myFlashcardsReducer reducer, 
     flashcardDetails.js: contains flashcardDetailsReducer reducer 
     index.js: contains combined all reducer into one root reducer
     
  4. store: contains index.js file: I have created store using redux and redux-thunk
  Read more: https://react-redux.js.org/introduction/getting-started 
  Link: https://www.npmjs.com/package/react-redux

### React testing library: I have used react-testing-library to check is element rendered.
Read more: https://testing-library.com/docs/react-testing-library/intro/

### About me: Ramesh Chavan, AlmaBetter Full Stack Web Development enthusiast, Email: ramesh7452@gmail.com.

### Thanks: Thanks AlmaBetter and team!
      
      


