import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";

import WidgetProvider from "./components/WidgetProvider";

import { theme } from "../styles/theme";

function App() {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        refetchOnWindowFocus: false,
                    },
                },
            }),
    );

    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider theme={theme}>
                <AnimatePresence mode="wait">
                    <WidgetProvider />
                </AnimatePresence>
            </ChakraProvider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default App;
