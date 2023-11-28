import React, { Dispatch, SetStateAction } from "react";
import { Box } from "@chakra-ui/react";

import TaskGroup from "./TaskGroup";

import { TaskGroupType } from "../types";

export default function TaskList({
    taskGroups,
    updateTaskGroups,
}: {
    taskGroups: TaskGroupType[];
    updateTaskGroups: Dispatch<SetStateAction<TaskGroupType[]>>;
}) {
    return (
        <Box border="1px solid" borderColor="grey.200" borderRadius={8}>
            {taskGroups.map((group, index) => (
                <React.Fragment key={group.name}>
                    <TaskGroup
                        group={group}
                        groupIndex={index}
                        updateTaskGroups={updateTaskGroups}
                        isLastIndex={index === taskGroups.length - 1}
                    />
                </React.Fragment>
            ))}
        </Box>
    );
}
