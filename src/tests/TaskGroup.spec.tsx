import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { axe, toHaveNoViolations } from "jest-axe";
import userEvent from "@testing-library/user-event";

import TaskGroup from "../components/TaskGroup";

import mockData from "../mocks/data";

expect.extend(toHaveNoViolations);

test("TaskGroup displays the correct elements", async () => {
    const updateTaskGroups = jest.fn();
    const groupIndex = 0;

    const group = mockData[groupIndex];

    render(
        <TaskGroup
            group={group}
            groupIndex={groupIndex}
            updateTaskGroups={updateTaskGroups}
            isLastIndex={false}
        />,
    );

    const groupTitle = screen.getByText(group.name);
    const showButton = screen.getByText("Show");

    expect(groupTitle).toBeTruthy();
    expect(showButton).toBeTruthy();
});

test("TaskGroup should not have basic accessibility issues", async () => {
    const updateTaskGroups = jest.fn();
    const groupIndex = 0;

    const group = mockData[groupIndex];

    const { container } = render(
        <TaskGroup
            group={group}
            groupIndex={groupIndex}
            updateTaskGroups={updateTaskGroups}
            isLastIndex={false}
        />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
});

test("TaskGroup's task list opens when the show button is clicked", async () => {
    const user = userEvent.setup();

    const updateTaskGroups = jest.fn();
    const groupIndex = 0;

    const group = mockData[groupIndex];

    render(
        <TaskGroup
            group={group}
            groupIndex={groupIndex}
            updateTaskGroups={updateTaskGroups}
            isLastIndex={false}
        />,
    );

    const showButton = screen.getByText("Show");

    await user.click(showButton);

    await waitFor(() => {
        expect(screen.getAllByRole("checkbox").length).toBe(3);
    });
});

test("TaskGroup calls updateTaskGroups when any checkbox is toggled", async () => {
    const user = userEvent.setup();

    const updateTaskGroups = jest.fn();
    const groupIndex = 0;

    const group = mockData[groupIndex];

    render(
        <TaskGroup
            group={group}
            groupIndex={groupIndex}
            updateTaskGroups={updateTaskGroups}
            isLastIndex={false}
        />,
    );

    const showButton = screen.getByText("Show");

    await user.click(showButton);

    await user.click(screen.getAllByRole("checkbox")[0]);

    await waitFor(() => {
        expect(updateTaskGroups).toHaveBeenCalled();
    });
});

test("TaskGroup calls updateTaskGroups multiple times when a checkbox is toggled multiple times", async () => {
    const user = userEvent.setup();

    const updateTaskGroups = jest.fn();
    const groupIndex = 0;

    const group = mockData[groupIndex];

    render(
        <TaskGroup
            group={group}
            groupIndex={groupIndex}
            updateTaskGroups={updateTaskGroups}
            isLastIndex={false}
        />,
    );

    const showButton = screen.getByText("Show");

    await user.click(showButton);

    await waitFor(() => {
        expect(screen.getAllByRole("checkbox").length).toBe(3);
    });

    await user.click(screen.getAllByRole("checkbox")[0]);
    await user.click(screen.getAllByRole("checkbox")[0]);
    await user.click(screen.getAllByRole("checkbox")[0]);

    await waitFor(() => {
        expect(updateTaskGroups).toHaveBeenCalledTimes(3);
    });
});
