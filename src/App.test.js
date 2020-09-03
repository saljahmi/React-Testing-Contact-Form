import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);


  breakTheTest(false);
});

function breakTheTest(someValue) {
  if (someValue ===  true) {}
  else {
    throw new Error("This test failed because we threw an error inside 'breakTheTest'")
  }
}