import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, combineReducers } from "redux";
import usersReducer from "./usersReducer";
import { createStore } from "redux";
import { rootWatcher } from "../saga";
import signinReducer from "./client/signinReducer";
import signupReducer from "./client/signupReducer";
import profileReducer from "./profileReducer";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    signinReducer,
    signupReducer,
    usersReducer,
    profileReducer
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);