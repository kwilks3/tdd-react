import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Calculator from "./../Calculator";

describe("Calculator", () => {
  test("Calculator loaded div", async () => {
    const { container, debug } = render(<Calculator />);

    debug();
    expect(container).toContainHTML(`<div>`);
  });
});
