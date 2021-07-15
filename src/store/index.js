import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, combineReducers } from "redux";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    clientReducer,
    userReducer
})

export const store = CreateStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);