import React from 'react';

import { configure, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import CSSQuiz from '../components/quizes/CSSQuiz';

configure({adapter: new Adapter()});

describe('<CSSQuiz/>',() => {

it("spanshot matches", () => {
    const tree = shallow(<CSSQuiz />);
    expect(toJson(tree)).toMatchSnapshot();
  });

});