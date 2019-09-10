import React from 'react';
import renderer from "react-test-renderer"; 
import {render, fireEvent} from '@testing-library/react';
import Controls from './Controls';


describe("<Controls />", () => {

    it("matches snapshot", () => {
      const tree = renderer.create(<Controls />); 
  
      expect(tree.toJSON()).toMatchSnapshot();
    });


    it('Shows both buttons', ()=>{

      const component = render(<Controls />);
        component.getByText(/lock gate/i);
        component.getByText(/close gate/i);

    })

    // it('wont open if locked', ()=>{

    //     const component = render(<Controls />);
    //       const lockButton = component.getByText(/lock gate/i);
    //       const closeButton = component.getByText(/close gate/i);
    //       fireEvent.click(closeButton);
    //       console.log(component.debug());
    //     //   const openButton = component.getByText(/open gate/i);
  
    //   })
  });