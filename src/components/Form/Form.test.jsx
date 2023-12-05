import { render, screen } from "@testing-library/react";
import { expect, it, vi } from "vitest";
import Form from ".";
import user from "@testing-library/user-event";

// ! does form component is complete the mission correctly ?
// after the all inputs filled ,
// when form sended is "addUser" components work ?
// Are the correct parameters sent to the addUser function?

const testUser = {
  name: "testname",
  email: "testemail@gmail.com",
  age: "22",
};

it("Does addUser get the correct parameters when the form is submitted?", async () => {
  //Mock functions => (fonksiyonları taklit eder )
  // when it called | it called with whitch parameters
  // that provide the "simulate the original function"
  const mock = vi.fn();
  user.setup();

  render(<Form addUser={mock} />);

  // call the necessary elements
  const nameInp = screen.getByLabelText("Name");
  const mailInp = screen.getByLabelText("Email");
  const ageInp = screen.getByLabelText("Age");
  const submitBtn = screen.getByRole("button");

  //fill the inputs
  //first way -
  await user.click(nameInp);
  await user.keyboard("testname");

  //second way -
  await user.type(mailInp, testUser.email);

  await user.type(ageInp, testUser.age);

  //send the form
  await user.click(submitBtn);

  // addUser function called when form sended
  expect(mock).toBeCalled();

  //is sended true argument when function called
  expect(mock).toBeCalledWith(testUser);
});
