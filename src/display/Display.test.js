import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";
import Display from "./Display";

describe("<Display />", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Display />);

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("renders locked and closed when props passed are locked=true and closed=true", () => {
    const component = render(<Display locked={true} closed={true} />);
    component.getByText(/locked/i);
    component.getByText(/closed/i);
  });

  it("renders unlocked and open with when props passed are locked=false and closed=false", () => {
    const component = render(<Display locked={false} closed={false} />);
    component.getByText(/unlocked/i);
    component.getByText(/open/i);
  });

  it("When closed and locked, display red-led class", () => {
    const component = render(<Display locked={true} closed={true} />);
    const locked = component.getByText(/locked/i);
    const closed = component.getByText(/closed/i);
    expect(locked.classList.contains('red-led')).toBe(true);
    expect(closed.classList.contains('red-led')).toBe(true);
  });

  it("When open and unlocked, display green-led class", () => {
    const component = render(<Display locked={false} closed={false} />);
    const unlocked = component.getByText(/unlocked/i);
    const open = component.getByText(/open/i);
    expect(unlocked.classList.contains('green-led')).toBe(true);
    expect(open.classList.contains('green-led')).toBe(true);
  });
});
