import React from 'react';
import renderer from "react-test-renderer"; 
import {render, fireEvent} from '@testing-library/react';
import Controls from './Controls';
// import "jest-dom/extend-expect";
import "@testing-library/jest-dom/extend-expect";


describe("<Controls />", () => {

    it("matches snapshot", () => {
      const tree = renderer.create(<Controls />); 
  
      expect(tree.toJSON()).toMatchSnapshot();
    });


    it('Shows both buttons', ()=>{

      const component = render(<Controls />);
        component.getByText(/lock gate/i);
        component.getByText(/close gate/i);

    });
    it('Shows unlock gate and open gate if locked and closed', ()=>{

      const component = render(<Controls locked={true}
        closed={true} />);
        component.getByText(/unlock gate/i);
        component.getByText(/open gate/i);

    });

    it('Shows lock gate and close gate if open and unlocked', ()=>{

      const component = render(<Controls locked={false}
        closed={false} />);
        component.getByText(/lock gate/i);
        component.getByText(/close gate/i);

    })

    it('closed button disabled if gate is locked', ()=>{

      const component = render(<Controls locked={true}
        closed={true} />);
        let openGate = component.queryByText(/open gate/i);
        
        expect(openGate).toHaveAttribute('disabled');
        
    });

    it('lock button disabled if gate is open', ()=>{

      const component = render(<Controls locked={false}
        closed={false} />);
        
        let lockButton = component.queryByText(/lock gate/i);

        expect(lockButton).toHaveAttribute('disabled');
        

    });

    // it('wont open if locked', ()=>{

    //     const component = render(<Controls />);
    //       const lockButton = component.getByText(/lock gate/i);
    //       const closeButton = component.getByText(/close gate/i);
    //       fireEvent.click(closeButton);
    //       console.log(component.debug());
    //     //   const openButton = component.getByText(/open gate/i);
  
    //   })
  });