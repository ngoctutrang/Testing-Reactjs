import React from 'react'
import {findByTestAttr, checkProps} from '../../../Utils';
import ShareButton from './index';
import {shallow} from 'enzyme';


describe('ShareButton Component',()=>{
    let component;
    let props;
    let mockFunc;
    beforeEach(()=>{
        mockFunc = jest.fn();
         props={
            textButton: 'Text Button',
            commitEvent:mockFunc
        };
        component =shallow(<ShareButton {...props}/>);
      

    });
    it('It should not throw warning',()=>{
        console.log(props);
        const propsErr = checkProps(ShareButton, props);
        expect(propsErr).toBeUndefined();
    });
    it('Should render a button', ()=>{
        const wrapper =  shallow(<ShareButton/>);
        const attr=findByTestAttr(wrapper,'shareButtonComponent');
        console.log(attr.debug());
        expect(attr.length).toBe(1);
    });
    it('Should commit  callback on click event',()=>{
       
        const button=findByTestAttr(component,'shareButtonComponent');
        button.simulate('click');
        const callback = mockFunc.mock.calls.length;
        expect(callback).toBe(1);
    })
})
