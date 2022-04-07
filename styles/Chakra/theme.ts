import {extendTheme, type ComponentStyleConfig, type ThemeConfig} from "@chakra-ui/react";

const Link: ComponentStyleConfig = {
    baseStyle: {
        _hover: {
            textDecoration: "none",
            color: "teal.500"
        },
        outline: "none",
        _focus: {
            boxShadow: "0 0 0 3px rgba(49,151,149, 0.6)",
        },
    }
};

const Button: ComponentStyleConfig = {
    variants: {
        "ghost": props => ({
            _focus: {
                boxShadow: "0 0 0 3px rgba(49,151,149, 0.6)",
            },
            _hover: {
                background: props.colorMode === "dark" ? "blackAlpha.300" : "blackAlpha.200"
            }
        }),
        "solid": props => ({
            _focus: {
                boxShadow: "0 0 0 3px rgba(49,151,149, 0.6)",
            },
            _hover: {
                background: props.colorMode === "dark" ? "blackAlpha.300" : "blackAlpha.200"
            }
        }),
        "outline": props => ({
            _focus: {
                boxShadow: "0 0 0 3px rgba(49,151,149, 0.6)",
            },
            _hover: {
                background: props.colorMode === "dark" ? "blackAlpha.300" : "blackAlpha.200"
            }
        }),
    },
};

const config: ThemeConfig = {
    initialColorMode: 'dark'
}

export const theme = extendTheme({
    fonts: {
        body: "Raleway, sans-serif",
    },
    components: {
        Link, Button
    },
    config
});
