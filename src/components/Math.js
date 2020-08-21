import React from "react";

// Create a new component named "Math"
// Render one Math component in the place of each "?" mark
// Math should accept 3 props
// num1, operator, and num2
// Math should return a span tag displaying the result e.g.  19 + 341 = 360
function Math(props) {
  let result;
  if (props.operator === "+") {
    result = props.num1 + props.num2;
  } else if (props.operator === "-") {
    result = props.num1 - props.num2;
  } else if (props.operator === "*") {
    result = props.num1 * props.num2;
  } else if (props.operator === "/") {
    result = props.num1 / props.num2;
  }
  return <span>{result}</span>;
}
export default Math;
