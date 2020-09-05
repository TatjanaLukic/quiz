import React from "react";

import { configure, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

import Title from "../components/Title";

configure({ adapter: new Adapter() });

describe("<Title/>", () => {

  const title = "test title";

  it("spanshot matches" , () => {
    const tree = shallow(<Title title />);
    expect(toJson(tree)).toMatchSnapshot();
  });

});
