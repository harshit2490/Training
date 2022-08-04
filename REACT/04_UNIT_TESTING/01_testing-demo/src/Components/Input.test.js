import { fireEvent, render, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Input from "./Input";

describe("Input Component", () => {
  it("rendered Input", () => {
    const { getByTestId } = render(<Input showDiv={false} />);
    const input = getByTestId("searchBar");
    expect(input).toBeTruthy();
  });

  it("render div", () => {
    const { getByTestId } = render(<Input showDiv={true} />);
    const div = getByTestId("divWeWantToShow");
    expect(div).toBeTruthy();
  });

  it("do not render div", () => {
    const { queryByTestId } = render(<Input showDiv={false} />);
    const div = queryByTestId("divWeWantToShow");
    expect(div).toBeFalsy();
  });

  it("change input on the header", () => {
    act(async () => {
      const { getByTestId } = render(<Input showDiv={false} />);
      const input = getByTestId("searchBar");
      const header = getByTestId("displaySearch");
      const inputWord = "react testing";
      await fireEvent.change(input, { target: { value: inputWord } });
      expect(header.innerHTML).toBe(inputWord);
    });
  });
});
