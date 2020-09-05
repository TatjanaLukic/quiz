import React from "react";

import { configure, shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

import CSSQuiz from "../components/quizes/CSSQuiz";
import Result from "../components/Result";

configure({ adapter: new Adapter() });

describe("<CSSQuiz/>", () => {
  it("spanshot matches", () => {
    const tree = shallow(<CSSQuiz />);
    expect(toJson(tree)).toMatchSnapshot();
  });

  it("no Result component on first load", () => {
    const tree = shallow(<CSSQuiz />);
    expect(tree.find(Result)).toHaveLength(0);
  });

  it("Result exists when clicked submit button", () => {
    const tree = mount(<CSSQuiz />);
    tree.find('button').simulate('click');
    expect(tree.find(Result)).toHaveLength(1);
  });

});
