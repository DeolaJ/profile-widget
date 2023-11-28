import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { axe, toHaveNoViolations } from "jest-axe";

import Widget from "../components/Widget";

import { calculateProgress, calculateTotal } from "../utils/helpers";

import mockData from "../mocks/data";

expect.extend(toHaveNoViolations);

test("Widget displays the correct elements", async () => {
    const taskTotal = calculateTotal(mockData);
    const localTaskTotal = calculateTotal(mockData, true);
    const progressPercent = calculateProgress(localTaskTotal, taskTotal);

    render(<Widget taskGroups={mockData} />);

    const heading = screen.getByText("Logdify Grouped Tasks");
    const progressBar = screen.getByRole("progressbar");
    const progressLabel = screen.getByText(`${progressPercent}%`);
    const showButtons = screen.getAllByText("Show");

    expect(heading).toBeTruthy();
    expect(showButtons.length).toBe(3);
    expect(progressBar).toBeTruthy();
    expect(progressLabel).toBeTruthy();
});

test("Widget should not have basic accessibility issues", async () => {
    const { container } = render(<Widget taskGroups={mockData} />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
});
