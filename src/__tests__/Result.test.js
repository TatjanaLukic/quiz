import React from 'react';

import { configure, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import Result from '../components/Result';

configure({adapter: new Adapter()});

describe('<Result/>',() => {

it("spanshot matches", () => {
    const tree = shallow(<Result />);
    expect(toJson(tree)).toMatchSnapshot();
  });

});