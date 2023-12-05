import { render, screen, within } from "@testing-library/react";
import { expect, it } from "vitest";
import List from ".";
import { users } from "../constants";
it("render table row for each submitted user", () => {
  render(<List users={users} />);

  //get all rows from users table

  const body = screen.getByTestId("table-body");

  //choose element inside of container
  const rows = within(body).getAllByRole("row");

  //is rows length equal to users length
  expect(rows).toHaveLength(users.length);
});

it("Are all values of each user displayed on the screen?", () => {
  render(<List users={users} />);

  // --
  for (const user of users) {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });
    const age = screen.getByRole("cell", { name: user.age });

    expect(name).toBeVisible();
    expect(email).toBeVisible();
    expect(age).toBeVisible();
  }
});
