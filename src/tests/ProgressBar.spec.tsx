import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { axe, toHaveNoViolations } from "jest-axe";

import ProgressBar from "../components/ProgressBar";

import { calculateProgress, calculateTotal } from "../utils/helpers";

import mockData from "../mocks/data";

expect.extend(toHaveNoViolations);

test("ProgressBar displays the correct elements", async () => {
    const taskTotal = calculateTotal(mockData);
    const localTaskTotal = calculateTotal(mockData, true);
    const progressPercent = calculateProgress(localTaskTotal, taskTotal);

    render(<ProgressBar taskGroups={mockData} localTaskGroups={mockData} />);

    const progressBar = screen.getByRole("progressbar");
    const progressLabel = screen.getByText(`${progressPercent}%`);

    expect(progressBar).toBeTruthy();
    expect(progressLabel).toBeTruthy();
});

test("ProgressBar should not have basic accessibility issues", async () => {
    const { container } = render(<ProgressBar taskGroups={mockData} localTaskGroups={mockData} />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
});
