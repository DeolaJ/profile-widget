import { TaskGroupType } from "../types";

export function calculateTotal(tasksList: TaskGroupType[], isChecked = false) {
    let total = 0;

    for (let i = 0; i < tasksList.length; i += 1) {
        // Get the list of tasks from each task group
        const tasks = tasksList[i].tasks;

        for (let j = 0; j < tasks.length; j += 1) {
            // Add the value of each task to the total
            const task = tasks[j];

            if (isChecked) {
                if (task.checked) {
                    const taskValue = tasks[j].value;
                    total += taskValue;
                }
            } else {
                const taskValue = tasks[j].value;
                total += taskValue;
            }
        }
    }

    return total;
}

export function calculateProgress(taskTotal: number, total: number) {
    return Math.round((taskTotal * 100) / total);
}
