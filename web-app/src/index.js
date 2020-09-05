
import React from "react";
import ReactDOM from "react-dom";
import {Provider, ReactReduxContext} from "react-redux";
import configureStore from "./store/store";
import {createHashHistory} from "history";
// import {MuiThemeProvider} from '@material-ui/core/styles';
import App from "./App";
import * as serviceWorker from "./serviceWorker";
 
// import './styles/style.css';

export const history = createHashHistory({});

const initialState = window.initialReduxState;
const store = configureStore(history, initialState);

ReactDOM.render(
    // <MuiThemeProvider theme={theme}>
        <Provider store={store} context={ReactReduxContext}>
            <App history={history}/>
        </Provider>,
    // </MuiThemeProvider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
