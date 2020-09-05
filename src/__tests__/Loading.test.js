import React from 'react';

import { configure, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import Loading from '../components/Loading';

configure({adapter: new Adapter()});

describe('<Home/>',() => {

it("spanshot matches", () => {
    const tree = shallow(<Loading />);
    expect(toJson(tree)).toMatchSnapshot();
  });

});