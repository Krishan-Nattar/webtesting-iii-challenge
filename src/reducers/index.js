import React from 'react';


export const initialState = {
    data: []
};


export const reducer = (state = initialState, action)=>{
    switch(action.type){
        default:
            return state;
    }
}