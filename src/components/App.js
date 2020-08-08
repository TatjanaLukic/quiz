import React from "react";
import JavaScriptQuiz from "./quizes/JavaScriptQuiz";
import ReactQuiz from "./quizes/ReactQuiz";
import CSSQuiz from "./quizes/CSSQuiz";
import Home from './Home';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";

const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
