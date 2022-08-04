import { fireEvent, render, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Button from "./Button";

describe("Button Component", () => {
  it("rendered button", () => {
    const { getByTestId } = render(<Button />);
    const button = getByTestId("button");
    expect(button).toBeTruthy();
  });

  it("render one button before click", () => {
    const { getAllByTestId } = render(<Button />);
    const buttonList = getAllByTestId("button");
    expect(buttonList).toHaveLength(1);
  });

  // it("render two buttons after click", () => {
  //   act(async () => {
  //     const { getAllByTestId } = render(<Button />);
  //     const buttonList = getAllByTestId("button");
  //     await waitFor.click(buttonList[0]);
  //     expect(getAllByTestId("button")).toHaveLength(2);
  //   });
  // });
});
