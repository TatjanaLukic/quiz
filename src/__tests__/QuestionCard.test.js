import React from "react";

import { configure, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

import QuestionCard from "../components/QuestionCard";

configure({ adapter: new Adapter() });

const question = {
  id: 1,
  q: "Mock question?",
  A: "Mock answer 1.",
  B: "Mock answer 2.",
  answer: "A",
  category: "basic",
};
const {id} = question;
const userAnswersUpdate = () =>{};

describe("<QuestionCard/>", () => {
  it("spanshot matches", () => {

    const tree = shallow(<QuestionCard id question userAnswersUpdate/>);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
