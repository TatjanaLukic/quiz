import React from "react";

import { configure, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

import QuestionList from "../components/QuestionList";

configure({ adapter: new Adapter() });

describe("<QuestionList/>", () => {
  const questions = [
    {
      id: 1,
      q: "Mock question1?",
      A: "Mock answer 1.",
      B: "Mock answer 2.",
      answer: "A",
      category: "basic",
    },
    {
      id: 2,
      q: "Mock question2?",
      A: "Mock answer 1.",
      B: "Mock answer 2.",
      answer: "A",
      category: "basic",
    },
  ];

  const setCalculatedScore = () => {};

  it("spanshot matches - not loading", () => {
    let loading = false;
    const tree = shallow(<QuestionList setCalculatedScore questions loading />);
    expect(toJson(tree)).toMatchSnapshot();
  });

  it("spanshot matches - loading", () => {
    let loading = true;
    const tree = shallow(<QuestionList setCalculatedScore questions loading />);
    expect(toJson(tree)).toMatchSnapshot();
  });

});
