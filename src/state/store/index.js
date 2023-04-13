import { createStore, applyMiddleware, compose } from "redux"

// middleware
import thunk from "redux-thunk";

import { rootReducer } from "../reducers";

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export { store }