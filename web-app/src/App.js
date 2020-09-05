import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import TestComponent from "./components/test-component/test";
function App({ history }) {
  return (
    <BrowserRouter history={history}>
      <Route path={"/test-redux"}>
        <TestComponent />
      </Route>
      <Route exact path={"/"}>
        <div>salam</div>
      </Route>
    </BrowserRouter>
  );
}

export default App;
