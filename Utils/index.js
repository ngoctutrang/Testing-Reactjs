import checkPropTypes from 'check-prop-types';
import React from 'react'
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../src/reducers';
import {middleWare} from '../src/createStore';
export const findByTestAttr=(component, attr)=>{
    return component.find(`[data-test='${attr}']`);
}

export const checkProps=(component, expectedProps)=>{
    const postsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return postsErr;
}

export const testStore =(initialState)=>{
    const createStoreWithMiddleWare = applyMiddleware(...middleWare)(createStore);
    return createStoreWithMiddleWare(rootReducer, initialState);
}