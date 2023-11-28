import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { axe, toHaveNoViolations } from "jest-axe";
import userEvent from "@testing-library/user-event";

import Task from "../components/Task";

expect.extend(toHaveNoViolations);

const description = "This is a test task";

test("Task displays the correct elements", async () => {
    const setTask = jest.fn();

    render(<Task checked={false} description={description} setTask={setTask} />);

    const checkbox = screen.getByRole("checkbox");
    const taskDescription = screen.getByText(description);

    expect(checkbox).toBeTruthy();
    expect(taskDescription).toBeTruthy();
});

test("Task should not have basic accessibility issues", async () => {
    const setTask = jest.fn();

    const { container } = render(
        <Task checked={false} description={description} setTask={setTask} />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
});

test("Task calls setTask when checkbox button is clicked", async () => {
    const setTask = jest.fn();

    render(<Task checked={false} description={description} setTask={setTask} />);

    const checkbox = screen.getByRole("checkbox");

    await userEvent.click(checkbox);

    await waitFor(() => {
        expect(setTask).toHaveBeenCalled();
    });
});
