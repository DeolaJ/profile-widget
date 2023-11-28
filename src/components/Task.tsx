import { ChangeEvent, memo } from "react";
import { Box, Checkbox, chakra } from "@chakra-ui/react";

import { TaskType } from "../types";

function Task({
    checked,
    description,
    setTask,
}: {
    checked: boolean;
    description: TaskType["description"];
    setTask: (checked: boolean) => void;
}) {
    return (
        <Box
            w="100%"
            sx={{
                "label > span:first-of-type": {
                    borderRadius: "4px",
                },
                "label > span:first-of-type:not([data-checked])": {
                    border: "1px solid",
                    borderRadius: "4px",
                    borderColor: "grey.500",
                },
            }}
        >
            <Checkbox
                isChecked={checked}
                colorScheme="primary.success"
                onChange={(e: ChangeEvent<HTMLInputElement>) => setTask(e.target.checked)}
                w="100%"
                p={{ base: "3", md: "4" }}
                _hover={{ bgColor: "primary.success.300" }}
            >
                <chakra.span ml="2" color="grey.900">
                    {description}
                </chakra.span>
            </Checkbox>
        </Box>
    );
}

const MemoizedTask = memo(Task);

export default MemoizedTask;
