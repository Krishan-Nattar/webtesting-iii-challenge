import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";
import Dashboard from "./Dashboard";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {initialState, reducer} from '../reducers';

function renderWithRedux(
  ui,
  { initialState, store = createStore(reducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  }
}

describe("<Dashboard />", () => {
  it("matches snapshot", () => {
    // const tree = renderer.create(<Dashboard />);
    const tree = renderWithRedux(<Dashboard />);

    expect(tree).toMatchSnapshot();
  });

  it('Shows controls and display"', () => {
    const component = renderWithRedux(<Dashboard />);
    component.getByText(/unlocked/i);
    component.getByText(/open/i);
    component.getByText(/lock gate/i);
    component.getByText(/close gate/i);
  });

  it("wont open if locked", () => {
    const component = renderWithRedux(<Dashboard />);
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
  });
  // it("wont open if locked", () => {
  //   const component = render(<Dashboard />);
  //   const lockButton = component.getByText(/lock gate/i);
  //   const closeButton = component.getByText(/close gate/i);
  //   fireEvent.click(closeButton);

  //   fireEvent.click(lockButton);
  //   component.getByText(/locked/i);
  //   component.getByText(/closed/i);
  //   const openButton = component.getByText(/open gate/i);
  //   fireEvent.click(openButton);
  //   component.getByText(/locked/i);
  //   component.getByText(/closed/i);
  // });
});
