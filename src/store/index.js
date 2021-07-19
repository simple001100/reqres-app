import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, combineReducers } from "redux";
import usersReducer from "./usersReducer";
import { createStore } from "redux";
import { rootWatcher } from "../saga";
import clientReducer from "./clientReducer";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    clientReducer,
    usersReducer
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);