"use client";
import {
  Box,
  Flex,
  HStack,
  Text,
  Link,
  Button,
  IconButton,
  Center,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { MdClose, MdEmail, MdMenu, MdOndemandVideo } from "react-icons/md";
import Image from "next/image";
import { useState } from "react";
import logo from "../../public/assets/enaira.svg";
import { ChevronDownIcon } from "@chakra-ui/icons";
const Navbar = () => {
  let [display, changeDisplay] = useState("none");
  return (
    <Flex
      width="100%"
      justifyContent={["space-between", "space-between", "none", "none"]}
      bg="white"
     
     
      pb="10px"
    >
      <Box width="100%"  display={["none", "none", "block", "block"]}>
        <Box px={12}>
          <Flex
            mt="10px"
            mb={"10px"}
            height="45px"
            bg="#FFFFFF"
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            
              <Link as="span">
                <Box mb='10px'>
                  <Box height={["none", "none", "30px", "40px"]} ml="40px">
                    <Image src={logo} alt="logo" />
                  </Box>
                </Box>
              </Link>
          
            <HStack
              spacing={["none", "none", "40px", "70px"]}
              color="#616161"
              fontSize={["none", "none", "12px", "14px"]}
            >
              <Link lineHeight={10} fontWeight="600" href="#">
                Home
              </Link>
              <Link lineHeight={10} fontWeight="600" href="#">
                About Us
              </Link>
              <Link lineHeight={10} fontWeight="600" href="#">
                Enaira Wallet
              </Link>
              <Link lineHeight={10} fontWeight="600" href="#">
                Blog & News
              </Link>
              <Menu>
                <MenuButton size={'sm'} bg={'white'} as={Button} rightIcon={<ChevronDownIcon />}>
                  Help
                </MenuButton>
                <MenuList>
                  <MenuItem>Help</MenuItem>
                  <MenuItem>Help</MenuItem>
                  <MenuItem>Help</MenuItem>
                  <MenuItem>Help</MenuItem>
                  <MenuItem>Help </MenuItem>
                </MenuList>
              </Menu>
            </HStack>
            <HStack>
              <Button variant={"outline"} colorScheme="green" size="sm">
                Login
              </Button>
              <Button color={"white"} bg={"#16780D"} size="sm">
                Fund wallet
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Box>
      <Flex
        alignItems="center"
        mt="5px"
        display={["flex", "flex", "none", "none"]}
      >
        <Link as="span">
          <Box>
            <Box ml="40px" height={["30px", "40px", "none", "none"]}>
              <Image src={logo} alt="logo" />
            </Box>
          </Box>
        </Link>
      </Flex>
      <Flex display={["flex", "flex", "none", "none"]} mt="5px">
        <IconButton
          bg="#ecfcea"
          mr={2}
          aria-label="Open Menu"
          size="lg"
          icon={<MdMenu />}
          onClick={() => {
            changeDisplay("flex");
          }}
        />
      </Flex>
      <Flex
        zIndex={20}
        w="100vw"
        h="100vh"
        bg="#ecfcea"
        pos="fixed"
        top="0"
        left="0"
        flexDir="column"
        display={display}
        overflowY="auto"
      >
        <Flex mt="5px" justifyContent="flex-end">
          <IconButton
            bg="#ecfcea"
            mr={6}
            aria-label="Open Menu"
            size="lg"
            icon={<MdClose />}
            onClick={() => {
              changeDisplay("none");
            }}
          />
        </Flex>
        <Flex flexDir="column" align="center">
          <Link lineHeight={10} fontWeight="600" href="#">
            Login
          </Link>
          <Link lineHeight={10} fontWeight="600" href="#">
            <HStack>
              <MdOndemandVideo />
              <Text>Online</Text>
            </HStack>
          </Link>
          <Link lineHeight={10} fontWeight="600" href="#">
            About
          </Link>
          <Link lineHeight={10} fontWeight="600" href="#">
            Contact
          </Link>
          <Link lineHeight={10} fontWeight="600" href="#">
            Community
          </Link>
          <Link lineHeight={10} fontWeight="600" href="#">
            Announcement
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
