import { Box } from "@chakra-ui/react";
import { useState } from "react";

import Header from "./Header";
import TaskGroupList from "./TaskGroupList";
import ProgressBar from "./ProgressBar";

import { TaskGroupType } from "../types";

export default function Widget({ taskGroups }: { taskGroups: TaskGroupType[] }) {
    const [localTaskGroups, updateLocalTaskGroups] = useState<TaskGroupType[]>(taskGroups);

    return (
        <Box
            maxW={820}
            w="100%"
            mx="auto"
            bgColor="white"
            border="1px solid"
            borderColor="grey.200"
            borderRadius={8}
            p="4"
        >
            <Header>
                <ProgressBar taskGroups={taskGroups} localTaskGroups={localTaskGroups} />
            </Header>
            <TaskGroupList taskGroups={localTaskGroups} updateTaskGroups={updateLocalTaskGroups} />
        </Box>
    );
}
