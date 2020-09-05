import React from 'react';

import { configure, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import ReactQuiz from '../components/quizes/ReactQuiz';

configure({adapter: new Adapter()});

describe('<ReactQuiz/>',() => {

it("spanshot matches", () => {
    const tree = shallow(<ReactQuiz />);
    expect(toJson(tree)).toMatchSnapshot();
  });

});