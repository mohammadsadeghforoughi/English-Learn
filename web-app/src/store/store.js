import {createStore, applyMiddleware} from "redux";
// import createSagaMiddleware from "redux-saga";
import {composeWithDevTools} from "redux-devtools-extension";
import {createLogger} from "redux-logger";
import {createRootReducer} from "../reducers/index";
// import rootSaga from "../sagas/index";

const logger = createLogger();

export default function configureStore(
    history,
    initialState
) {
    const composeEnhancers = composeWithDevTools({});
    // const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        createRootReducer(history),
        initialState,
        composeEnhancers(
            applyMiddleware(
                // sagaMiddleware,
                logger
            )
        )
    );
    // sagaMiddleware.run(rootSaga);
    return store;
}
