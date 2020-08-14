import React from "react";
import JavaScriptQuiz from "./quizes/JavaScriptQuiz";
import ReactQuiz from "./quizes/ReactQuiz";
import CSSQuiz from "./quizes/CSSQuiz";
import Home from './Home';
import { HashRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";

const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/JavaScriptQuiz">
          <JavaScriptQuiz />
        </Route>
        <Route path="/ReactQuiz">
          <ReactQuiz />
        </Route>
        <Route path="/CSSQuiz">
          <CSSQuiz />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
