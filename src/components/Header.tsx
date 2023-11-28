import { PropsWithChildren } from "react";
import { Box, Heading, BoxProps } from "@chakra-ui/react";

export default function Header({ children, ...props }: PropsWithChildren<BoxProps>) {
    return (
        <Box {...props} py="8" px="6">
            <Heading fontSize="22px" color="grey.900" mb="4">
                Logdify Grouped Tasks
            </Heading>
            {children}
        </Box>
    );
}
