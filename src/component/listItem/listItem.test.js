import React from 'react'
import {shallow} from 'enzyme';

import {findByTestAttr, checkProps} from './../../../Utils';
import ListItem from './index';

describe('ListItem Component',()=>{
        describe('Check PropTypes',()=>{
            it('It Should not throw warning', ()=>{
                const expectedProps ={
                    title: 'Test Title',
                    desc: 'Test description'
                }
                const PropsErr = checkProps(ListItem, expectedProps);
                expect(PropsErr).toBeUndefined();
            })
        });

        describe('Component Render',()=>{
            let wrapper;
            beforeEach(()=>{
                const expectedProps ={
                    title: 'Test Title',
                    desc: 'Test description'
                };
               wrapper = shallow(<ListItem {...expectedProps}/>)
            });
           
            it('It should render without waring',()=>{
                const render = findByTestAttr(wrapper, 'listItemComponent');
                expect(render.length).toBe(1);
            });

            it('It should render a title',()=>{
                const componentTitle = findByTestAttr(wrapper, 'componentTitle');
                expect(componentTitle.length).toBe(1);
            });

            
            it('It should render a description',()=>{
                const description = findByTestAttr(wrapper, 'description');
                expect(description.length).toBe(1);
            });
        });
        describe('Component should not render', ()=>{
            let wrapper;
            beforeEach(()=>{
                const expectedProps ={
                  
                    desc: 'Test description'
                };
               wrapper = shallow(<ListItem {...expectedProps}/>)
               
            });
            it('When not have a title', ()=>{
                    const title= findByTestAttr(wrapper, 'componentTitle');
                   expect(title.length).toBe(0);
            })
        })
})
