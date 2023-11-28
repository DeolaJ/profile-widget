export type TaskType = {
    description: string;
    value: number;
    checked: boolean;
};

export type TaskGroupType = {
    name: string;
    tasks: TaskType[];
};
