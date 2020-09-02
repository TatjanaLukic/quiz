import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Navbar from './Navbar';
import {Link} from 'react-router-dom';

configure({adapter: new Adapter()});

describe('<Navbar/>',() => {
    let wrapper ;

    beforeEach( () => {
        wrapper = shallow(<Navbar/>);
    });

    it('should render four <Link/> elements', ()=>{
        expect(wrapper.find(Link)).toHaveLength(4); 
    });

    it('should contain <Link to ="/">Home</Link>', ()=>{     
        expect(wrapper.contains(<Link to ="/">Home</Link>)).toEqual(true);
    });

    it('should contain <Link to ="/JavaScriptQuiz">JavaScript</Link>', ()=>{     
        expect(wrapper.contains(<Link to ="/JavaScriptQuiz">JavaScript</Link>)).toEqual(true); 
    });

    it('should contain <Link to ="/ReactQuiz">React</Link>', ()=>{    
        expect(wrapper.contains(<Link to ="/ReactQuiz">React</Link>)).toEqual(true); 
    });

    it('should contain <Link to ="/CSSQuiz">CSS</Link>', ()=>{     
        expect(wrapper.contains(<Link to ="/CSSQuiz">CSS</Link>)).toEqual(true); 
    });


})
