import React from 'react';

import { configure, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import App from '../components/App';

configure({adapter: new Adapter()});

describe('<App/>',() => {

it("spanshot matches", () => {
    const tree = shallow(<App />);
    expect(toJson(tree)).toMatchSnapshot();
  });

});