import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr} from '../../../Utils'
import Header from './index';
const setUp = (props={})=>{
    return shallow(<Header {...props} />);
}

describe('Header Component:',()=>{
    let component;
    beforeEach(()=>{
        component= setUp();
    });
    it('It should render without error',()=>{
        //const component = shallow(<Header />);
        const numberOfClass = component.find('.headerComponent');
        expect(numberOfClass.length).toBe(1);
    });

    it('Should render a logo img',()=>{
        //const component = shallow(<Header />);
        const logoImg = component.find('.logoImg');
        expect(logoImg.length).toBe(1);
    });
    it('Should render data-test',()=>{
        //const component = shallow(<Header />);
        const datatest = findByTestAttr(component,'12345')
        expect(datatest.length).toBe(1);
    });
})

