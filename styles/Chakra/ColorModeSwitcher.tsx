import React from "react"
import {useColorMode, useColorModeValue, IconButton} from "@chakra-ui/react"
import {FaMoon, FaSun} from "react-icons/fa";

export const ColorModeSwitcher = () => {
    const {toggleColorMode} = useColorMode();
    const colorMode = useColorModeValue("dark", "light");
    const SwitchIcon = useColorModeValue(FaMoon, FaSun);

    return (
        <IconButton
            aria-label={`Switch to ${colorMode} mode`}
            variant="ghost"
            onClick={toggleColorMode}
            icon={<SwitchIcon/>}
            fontSize="1em"
        />
    )
}