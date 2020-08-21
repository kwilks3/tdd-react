import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Math from "./../Math";
describe("Math", () => {
  test("loads and displays greeting", async () => {
    // Arrange
    const { container, debug } = render(
      <Math num1={19} operator="+" num2={341} />
    );
    debug();
    // Act
    // Assert
    expect(container).toContainHTML(`<span>360</span>`);
  });

  test("subtraction", async () => {
    // Arrange
    const { container, debug } = render(
      <Math num1={10} operator="-" num2={1} />
    );
    debug();
    // Act
    // Assert
    expect(container).toContainHTML(`<span>9</span>`);
  });

  test("multiplication", async () => {
    // Arrange
    const { container, debug } = render(
      <Math num1={10} operator="*" num2={15} />
    );
    debug();
    // Act
    // Assert
    expect(container).toContainHTML(`<span>150</span>`);
  });
  test("loads and displays greeting", async () => {
    // Arrange
    const { container, debug } = render(
      <Math num1={150} operator="/" num2={15} />
    );
    debug();
    // Act
    // Assert
    expect(container).toContainHTML(`<span>10</span>`);
  });
});
