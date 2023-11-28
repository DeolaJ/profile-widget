import React, { Dispatch, SetStateAction, memo, useRef, useState } from "react";
import { Box, Button, Flex, Image, Text, VStack, chakra } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

import Task from "./Task";

import { TaskGroupType } from "../types";

import groupIcon from "../assets/group.svg";
import groupComplete from "../assets/group-complete.svg";
import arrowDown from "../assets/arrow-down.svg";
import arrowUp from "../assets/arrow-up.svg";

function TaskGroup({
    group,
    groupIndex,
    updateTaskGroups,
    isLastIndex,
}: {
    group: TaskGroupType;
    groupIndex: number;
    updateTaskGroups: Dispatch<SetStateAction<TaskGroupType[]>>;
    isLastIndex: boolean;
}) {
    const [showTasks, setShowTasks] = useState(false);

    // Update individual tasks
    const setTask = useRef((index: number) => {
        return (checked: boolean) =>
            updateTaskGroups((prevTaskList) =>
                prevTaskList.map((prevTaskGroup, taskGroupIndex) => {
                    // Isolate this specific task group
                    if (groupIndex === taskGroupIndex) {
                        return {
                            ...prevTaskGroup,
                            // Update specific task
                            tasks: prevTaskGroup.tasks.map((task, taskIndex) => {
                                if (taskIndex === index) {
                                    return {
                                        ...task,
                                        checked,
                                    };
                                }
                                return task;
                            }),
                        };
                    }
                    return prevTaskGroup;
                }),
            );
    });

    function isComplete() {
        const groupTasks = group.tasks;
        for (let i = 0; i < groupTasks.length; i += 1) {
            const task = groupTasks[i];
            if (!task.checked) return false;
        }
        return true;
    }

    const isGroupComplete = isComplete();

    return (
        <Box borderBottom={isLastIndex ? "" : "1px solid"} borderColor="grey.200">
            <Flex
                alignItems="center"
                justifyContent="space-between"
                p={{ base: "4", md: "6" }}
                onClick={() => setShowTasks((prevShowTasks) => !prevShowTasks)}
                _hover={{ bgColor: "grey.100" }}
                borderTopRightRadius={groupIndex === 0 ? "8" : "0"}
                borderTopLeftRadius={groupIndex === 0 ? "8" : "0"}
                borderBottomRightRadius={isLastIndex && !showTasks ? "8" : "0"}
                borderBottomLeftRadius={isLastIndex && !showTasks ? "8" : "0"}
                cursor="pointer"
            >
                <Text
                    fontSize={{ base: "md", md: "lg" }}
                    display="flex"
                    alignItems="center"
                    color={isGroupComplete ? "primary.success.500" : ""}
                    lineHeight="22px"
                >
                    {isGroupComplete ? (
                        <Image
                            src={groupComplete}
                            width="16px"
                            alt="Group icon"
                            color={isGroupComplete ? "primary.success.500" : "grey.900"}
                            mr="4"
                        />
                    ) : (
                        <Image
                            src={groupIcon}
                            width="16px"
                            alt="Group icon"
                            color={isGroupComplete ? "primary.success.500" : "grey.900"}
                            mr="4"
                        />
                    )}
                    {group.name}
                </Text>
                <Button
                    variant="unstyled"
                    color="grey.500"
                    display="flex"
                    alignItems="center"
                    h="20px"
                    fontWeight={400}
                    aria-label="Toggle Accordion"
                >
                    <chakra.span display={{ base: "none", sm: "inline" }}>
                        {showTasks ? "Hide" : "Show"}
                    </chakra.span>
                    <Image
                        src={showTasks ? arrowUp : arrowDown}
                        color="grey.500"
                        ml="1.5"
                        width="16px"
                        alt="arrow icon"
                    />
                </Button>
            </Flex>

            <AnimatePresence>
                {showTasks && (
                    <motion.section
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: {
                                opacity: 1,
                                height: "auto",
                                visibility: "visible",
                            },
                            collapsed: { opacity: 0, height: 0, visibility: "hidden" },
                        }}
                        transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <VStack alignItems="flex-start" gap="2" p={{ base: "3", md: "4" }}>
                            {group.tasks.map((task, index) => (
                                <React.Fragment key={task.description}>
                                    <Task
                                        checked={task.checked}
                                        description={task.description}
                                        setTask={setTask.current(index)}
                                    />
                                </React.Fragment>
                            ))}
                        </VStack>
                    </motion.section>
                )}
            </AnimatePresence>
        </Box>
    );
}

const MemoizedTaskGroup = memo(TaskGroup);

export default MemoizedTaskGroup;
