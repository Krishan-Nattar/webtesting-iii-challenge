import React from 'react';
import renderer from "react-test-renderer"; 
import {render, fireEvent} from '@testing-library/react';
import Dashboard from './Dashboard';


describe("<Dashboard />", () => {

    it("matches snapshot", () => {
      const tree = renderer.create(<Dashboard />); 
  
      expect(tree.toJSON()).toMatchSnapshot();
    });


    it('Shows controls and display"', ()=>{

      const component = render(<Dashboard />);
        component.getByText(/unlocked/i);
        component.getByText(/open/i);
        component.getByText(/lock gate/i);
        component.getByText(/close gate/i);

    })

    it('wont open if locked', ()=>{

      const component = render(<Dashboard />);
        const lockButton = component.getByText(/lock gate/i);
        const closeButton = component.getByText(/close gate/i);
        fireEvent.click(closeButton);
        
        fireEvent.click(lockButton);
        component.getByText(/locked/i);
        component.getByText(/closed/i);
        const openButton = component.getByText(/open gate/i);
        fireEvent.click(openButton);
        component.getByText(/locked/i);
        component.getByText(/closed/i);
    })



  });