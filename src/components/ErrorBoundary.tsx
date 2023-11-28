import { Component, ReactNode, ErrorInfo } from "react";
import { Center, Flex, Spacer, Text } from "@chakra-ui/react";

type ErrorBoundaryProps = {
    children: ReactNode;
};

type ErrorBoundaryState = {
    hasError: boolean;
};

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    public state: ErrorBoundaryState = {
        hasError: false,
    };

    public static getDerivedStateFromError(): ErrorBoundaryState {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render(): ReactNode {
        const { children } = this.props;
        const { hasError } = this.state;

        if (hasError) {
            return (
                <Flex flexDir="column" position="relative" minHeight="100vh" bgColor="grey.400">
                    <Spacer />
                    <Center m={{ base: "6", md: "8" }}>
                        <Text>Something went wrong. Please reload the page</Text>
                    </Center>
                    <Spacer />
                </Flex>
            );
        }
        return children;
    }
}
