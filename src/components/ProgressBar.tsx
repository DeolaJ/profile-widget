import { Progress, ProgressLabel } from "@chakra-ui/react";

import { calculateProgress, calculateTotal } from "../utils/helpers";

import { TaskGroupType } from "../types";

export default function ProgressBar({
    taskGroups,
    localTaskGroups,
}: {
    taskGroups: TaskGroupType[];
    localTaskGroups: TaskGroupType[];
}) {
    const taskTotal = calculateTotal(taskGroups);
    const localTaskTotal = calculateTotal(localTaskGroups, true);
    const progressPercent = calculateProgress(localTaskTotal, taskTotal);

    return (
        <Progress
            value={progressPercent}
            h="20px"
            borderRadius="16"
            colorScheme="primary.success"
            bgColor="primary.success.300"
            sx={{
                "& > div:first-child": {
                    transitionProperty: "width",
                },
            }}
        >
            <ProgressLabel
                width={`${progressPercent > 6 ? progressPercent : 6}%`} // Leave enough room for the label to be rendered horizonatally
                left="0"
                transform="translate(0%, -50%)"
                textAlign="right"
                pr="4"
                fontSize="md"
                fontWeight={600}
                color="primary.success.300"
                transitionProperty="width"
                transition="ease-out 0.3s"
            >
                {progressPercent}%
            </ProgressLabel>
        </Progress>
    );
}
