import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Navbar from './Navbar';
import {Link} from 'react-router-dom';

configure({adapter: new Adapter()});

describe('<Navbar/>',() => {
    it('should render four <Link/> elements', ()=>{
        const wrapper = shallow(<Navbar/>);
        expect(wrapper.find(Link)).toHaveLength(4); 
    }
    )

})
