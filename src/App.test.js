import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';
import {findByTestAttr, testStore} from './../Utils';

const setUp =(initialState={})=>{
  const store = testStore(initialState);
  const wrapper = shallow(<App store ={store} />).childAt(0).dive();
  //console.log(wrapper.debug());
  return wrapper;
}
describe('App Component', ()=>{
  let wrapper;
  beforeEach(()=>{
    const initialState = {
      posts:[{
        title: 'Example title',
        body: 'Some text'
      }]
    };
    wrapper = setUp(initialState);
    
  });
  it('Should render without errors', ()=>{
   
     const attrTest = findByTestAttr(wrapper, 'appComponent');
     expect(attrTest.length).toBe(1);
  })
})


