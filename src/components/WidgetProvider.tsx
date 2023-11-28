import { Center, Flex, Spacer, Spinner, Text } from "@chakra-ui/react";

import Widget from "./Widget";

import useTaskGroupList from "../hooks/useTaskGroupList";

function WidgetProvider() {
    const { data: taskGroups, isLoading } = useTaskGroupList();

    if (isLoading) {
        return <Spinner />;
    }

    if (!taskGroups) {
        return <Text>There are no task groups</Text>;
    }

    return <Widget taskGroups={taskGroups} />;
}

function WidgetWrapper() {
    return (
        <Flex flexDir="column" position="relative" minHeight="100vh" bgColor="grey.400">
            <Spacer />
            <Center m={{ base: "6", md: "8" }}>
                <WidgetProvider />
            </Center>
            <Spacer />
        </Flex>
    );
}

export default WidgetWrapper;
