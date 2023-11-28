import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    fonts: {
        heading: "'Source Sans Pro', sans-serif",
        body: "'Source Sans Pro', sans-serif",
    },
    colors: {
        primary: {
            success: {
                300: "#F2FBFA", // light
                500: "#00B797", // semi-dark
            },
        },
        grey: {
            100: "#F6F9FB", // hover state for task groups
            200: "#CCCCCC",
            300: "#DDDDDD",
            400: "#EEEEEE",
            500: "#999999",
            900: "#333333",
            950: "#000000",
        },
    },
    styles: {
        global: {
            body: {
                color: "grey.950",
            },
        },
    },
});
