"use client";

import {
  Box,
  Center,
  Container,
  Flex,
  GridItem,
  HStack,
  Spacer,
  Text,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  FormControl,
  FormLabel,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

import Link from "next/link";
import Sidebar from "@/components/bullnet/Sidebar";
import DashboardNavbar from "@/components/DashboardNavbar";
import Image from "next/image";
import debit from "../../../../public/assets/debit.png";
import canada from "../../../../public/assets/canada.svg";
import uk from "../../../../public/assets/uk.svg";
import nig from "../../../../public/assets/nig.svg";
import { send } from "process";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FaExchangeAlt } from "react-icons/fa";
import InputTransfer from "@/components/bullnet/transfer-funds/transfer-to-bank/Input";
import { useState } from "react";
import Confirmation from "@/components/bullnet/transfer-funds/transfer-to-bank/Confirmation";

const TransferFunds = () => {
  const [progress, setProgress] = useState(1)
  return (
    <Box minHeight="100vh">
      <Flex>
        <Sidebar />
        <Container
          width={"84%"}
          maxWidth={"84%"}
          px={0}
          pt={0}
          position="absolute"
          right={0}
          height="100%"
          pb={20}
        >
          <DashboardNavbar />
          <Container
            maxW="100%"
            pt={14}
            pl={6}
            pr={12}
            pb="15px"
            bg="rgba(22, 120, 13, 0.03);"
          >
            <Box>
              <Flex
                justifyContent="space-between"
                alignItems="center"
                py="26px"
              >
                <Box color="#16780D" fontWeight="700" fontSize="24px">
                  Transfer funds
                </Box>
              </Flex>
              <Tabs isFitted colorScheme="green">
                <TabList
                  py="10px"
                  px="30px"
                  bg="white"
                  justifyContent="space-between"
                >
                  <Tab>
                    <HStack>
                      <Text
                        fontSize="18px"
                        whiteSpace="nowrap"
                        ml={3}
                        color="#BBBBBB"
                        fontWeight="600"
                      >
                        Transfer to another Wallet
                      </Text>
                    </HStack>
                  </Tab>
                  <Tab bg={"#16780D"}>
                    <HStack>
                      <Text
                        fontSize="18px"
                        whiteSpace="nowrap"
                        ml={3}
                        color="white"
                        fontWeight="600"
                      >
                        Transfer to Bank account
                      </Text>
                    </HStack>
                  </Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <Box width="100%"></Box>
                  </TabPanel>
                  <TabPanel>
                    <Box bg={"white"} width="100%">
                      <Flex
                        mx={"auto"}
                        px="150px"
                        py={"50px"}
                        width={"764px"}
                        justifyContent={"space-between"}
                      >
                        <Center cursor={'pointer'} onClick={() => {setProgress(1)}} bg={"#E0E0E0"} h={"32px"} w={"32px"}>
                          <Text color={"#BBBBBB"} fontWeight={"14px"}>
                            1
                          </Text>
                        </Center>
                        <Center  cursor={'pointer'}  onClick={() => {setProgress(2)}} bg={"#E0E0E0"} h={"32px"} w={"32px"}>
                          <Text color={"#BBBBBB"} fontWeight={"14px"}>
                            2
                          </Text>
                        </Center>
                        <Center  cursor={'pointer'}  onClick={() => {setProgress(3)}} bg={"#E0E0E0"} h={"32px"} w={"32px"}>
                          <Text color={"#BBBBBB"} fontWeight={"14px"}>
                            3
                          </Text>
                        </Center>
                      </Flex>
                     {
                      progress == 1 &&  <Box   mx={"auto"} px="120px" width={"764px"}>
                      <InputTransfer />
                    </Box>
                     }
                      {
                      progress == 2 &&  <Box   mx={"auto"} px="120px" width={"764px"}>
                      <InputTransfer />
                    </Box>
                     }
                      {
                      progress == 3 &&  <Box   mx={"auto"} px="120px" width={"764px"}>
                      <Confirmation />
                    </Box>
                     }
                    </Box>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </Container>
        </Container>
      </Flex>
    </Box>
  );
};

export default TransferFunds;
