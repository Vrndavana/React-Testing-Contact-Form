import React from "react";
import { render, getByText, getByTitle } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});



test("is message there?", () => {
  const {getByText} =  render(<App/>);
  getByText(/message/i);
//  expect(Message).toBeInDocument();
});



test("First Name?", () => {
  const {getByText} =  render(<App/>);
  getByText(/First Name/i);
});


// test("Submit?", () => {
//   const {getByTitle} =  render(<App/>);
//   getByTitle(/Submit/i);
// });



