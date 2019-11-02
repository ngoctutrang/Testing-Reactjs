import React from 'react';
import {shallow} from 'enzyme';
import Headline from './index';
import {findByTestAttr} from '../../../Utils';

const setUp = (props={})=>{
    return shallow(<Headline {...props}/>)
}

describe('Headline Component:',()=>{
    
    describe('Have Props:',()=>{
        let wrapper;
        beforeEach(()=>{
           
            const props={
                header: 'Header Test',
                desc: 'Test Decription'
            }
            wrapper=setUp(props);
        });
        it('It Should render without error',()=>{
            const component = findByTestAttr(wrapper,'HeadlineComponent');
            expect(component.length).toBe(1);
        });
        it('It Should render header',()=>{
            const h1 = findByTestAttr(wrapper,'header');
            expect(h1.length).toBe(1);
        });
        it('It Should render desciption',()=>{
            const h1 = findByTestAttr(wrapper,'desc');
            expect(h1.length).toBe(1);
        })
    });


    describe('No have props:',()=>{
        let wrapper;
        beforeEach(()=>{
           
       
            wrapper=setUp();
        });
        it('It should not render', ()=>{
            const component = findByTestAttr(wrapper,'HeadlineComponent');
            expect(component.length).toBe(0);
        })
       
    })
});