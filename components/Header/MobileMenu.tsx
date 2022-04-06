import React from "react";
import {
    Drawer, DrawerBody, IconButton, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Link,
    Flex
} from "@chakra-ui/react";
import {GiHamburgerMenu} from "react-icons/gi";
import NextLink from "next/link";

const MobileMenu = () => {
    const {isOpen, onOpen, onClose, onToggle} = useDisclosure();
    const btnRef = React.useRef();
    return (
        <>
            <IconButton
                aria-label="Menu"
                ref={btnRef.current}
                onClick={onOpen}
                variant="ghost"
                icon={<GiHamburgerMenu/>}
            />
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                preserveScrollBarGap={true}
                returnFocusOnClose={false}
            >
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton _focus={{boxShadow: "0 0 0 3px rgba(49,151,149, 0.6)"}}/>
                    <DrawerBody>
                        <Flex
                            flexDirection="column"
                            alignItems="flex-start"
                            justifyContent="space-between"
                            gap="1em"
                            mt="1em"
                            fontSize="1.5em"
                        >
                            <NextLink href="https://kraevskiy-web.ru" passHref>
                                <Link onClick={onClose}>Главная</Link>
                            </NextLink>
                            <NextLink href="/#about" passHref>
                                <Link onClick={onClose}>Обо мне</Link>
                            </NextLink>
                            <NextLink href="/#portfolio" passHref>
                                <Link onClick={onClose}>Портфолио</Link>
                            </NextLink>
                            <NextLink href="/blog" passHref>
                                <Link>Блог</Link>
                            </NextLink>
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default MobileMenu;