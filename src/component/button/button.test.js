import React from 'react'
import {findByTestAttr, checkProps} from '../../../Utils';
import ShareButton from './index';
import {shallow} from 'enzyme';


describe('ShareButton Component',()=>{
    let component;
    let props;
    beforeEach(()=>{
         props={
            textButton: 'Text Button',
            commitEvent: ()=>{}
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
        expect(attr.length).toBe(1);
    })
})
