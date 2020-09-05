import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Navbar from '../components/Navbar';
import {NavLink} from 'react-router-dom';

configure({adapter: new Adapter()});

describe('<Navbar/>',() => {
    let wrapper ;

    beforeEach( () => {
        wrapper = shallow(<Navbar/>);
    });

    it('should render four <NavLink/> elements', ()=>{
        expect(wrapper.find(NavLink)).toHaveLength(4); 
    });

    it('should contain <NavLink to ="/">Home</NavLink>', ()=>{     
        expect(wrapper.contains(<NavLink to ="/">Home</NavLink>)).toEqual(true);
    });

    it('should contain <NavLink to ="/JavaScriptQuiz">JavaScript</NavLink>', ()=>{     
        expect(wrapper.contains(<NavLink to ="/JavaScriptQuiz">JavaScript</NavLink>)).toEqual(true); 
    });

    it('should contain <NavLink to ="/ReactQuiz">React</NavLink>', ()=>{    
        expect(wrapper.contains(<NavLink to ="/ReactQuiz">React</NavLink>)).toEqual(true); 
    });

    it('should contain <NavLink to ="/CSSQuiz">CSS</NavLink>', ()=>{     
        expect(wrapper.contains(<NavLink to ="/CSSQuiz">CSS</NavLink>)).toEqual(true); 
    });


})
