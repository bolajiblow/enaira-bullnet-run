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

const FundWallet = () => {
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
                  Fund wallet
                </Box>
              </Flex>
              <Box pt={"24px"} pl={"85px"} pb={"80px"} bg="white">
                <Text
                  mb="27px"
                  color="#3F4951"
                  fontWeight="500"
                  fontSize="20px"
                >
                  Fund from
                </Text>
                <Box pl={"45px"}>
                  <Box>
                    <Image src={debit} alt="debit" />
                  </Box>
                  <Text
                    mt="65px"
                    mb="30px"
                    color="#3F4951"
                    fontWeight="500"
                    fontSize="18px"
                  >
                    Select amount
                  </Text>
                  <HStack width={"400px"} alignItems={"center"}>
                    <InputGroup>
                      <Input
                        bg={"white"}
                        height={"40px"}
                        placeholder=""
                        type="number"
                      />
                      <InputRightElement>
                        <ChevronDownIcon />
                      </InputRightElement>
                    </InputGroup>
                    <Text mr="7px" ml={"7px"}>
                      x
                    </Text>
                    <Input
                      bg={"white"}
                      width={"70px"}
                      height={"40px"}
                      placeholder=""
                    />
                    <Text mr="7px" ml={"7px"}>
                      =
                    </Text>
                    <Box
                      border={"1px solid #16780D"}
                      borderRadius={"4px"}
                      py={"7px"}
                      minW={"140px"}
                      textAlign={"center"}
                    >
                      {" "}
                      1000
                    </Box>
                  </HStack>
                  <Text
                    mt="20px"
                    mb="50px"
                    color="#CF1B2B"
                    fontWeight="400"
                    fontSize="13px"
                  >
                    Note: For this transaction you will be charged 21.5 per
                    number of times
                  </Text>
                  <HStack mb="60px" spacing={"15px"} w={"650px"}>
                    <Text color="#3F4951" fontWeight="500" fontSize="18px">
                      Select currency
                    </Text>
                    <Flex
                      alignItems={"center"}
                      mr={"15px"}
                      py={"18px"}
                      px={"30px"}
                      bg={"#16780D"}
                      boxShadow="base"
                    >
                      <Box>
                        <Image src={nig} alt="nig" />
                      </Box>
                      <Text
                        ml="20px"
                        fontSize={"16px"}
                        fontWeight={"500"}
                        color={"white"}
                      >
                        NGN
                      </Text>
                    </Flex>
                    <Flex
                      alignItems={"center"}
                      mr={"15px"}
                      py={"18px"}
                      px={"30px"}
                      bg={"white"}
                      boxShadow="base"
                    >
                      <Box>
                        <Image src={canada} alt="nig" />
                      </Box>
                      <Text
                        ml="20px"
                        fontSize={"16px"}
                        fontWeight={"500"}
                        color={"#16780D"}
                      >
                        CAD
                      </Text>
                    </Flex>
                    <Flex
                      alignItems={"center"}
                      mr={"15px"}
                      py={"18px"}
                      px={"30px"}
                      bg={"white"}
                      boxShadow="base"
                    >
                      <Box>
                        <Image src={uk} alt="nig" />
                      </Box>
                      <Text
                        ml="20px"
                        fontSize={"16px"}
                        fontWeight={"500"}
                        color={"#16780D"}
                      >
                        GBP
                      </Text>
                    </Flex>
                  </HStack>
                  <HStack spacing={"15px"} w={"650px"} mb="15px">
                    <Text color="#3F4951" fontWeight="500" fontSize="18px">
                      Equivalency
                    </Text>
                    <FormControl>
                      <FormLabel
                        fontWeight="500"
                        color="#BBBBBB"
                        fontSize={"15px"}
                      >
                        Enter amount
                      </FormLabel>
                      <Input
                        type="number"
                        id="amount"
                        height={"40px"}
                        name="phone"
                        placeholder="40"
                        fontSize={14}
                      />
                    </FormControl>
                    <FaExchangeAlt fontSize={"24px"} />
                    <FormControl>
                      <FormLabel
                        fontWeight="500"
                        color="#BBBBBB"
                        fontSize={"15px"}
                      >
                        You pay
                      </FormLabel>
                      <Input
                        type="number"
                        id="pay"
                        height={"40px"}
                        name="bvn"
                        placeholder="500"
                        fontSize={14}
                      />
                    </FormControl>
                  </HStack>
                </Box>
                <Flex py={'80px'} justifyContent={"center"}>
                  <Button color={"white"} bg={"#16780D"}  size="md">
                    Pay N123,454
                  </Button>
                </Flex>
              </Box>
            </Box>
          </Container>
        </Container>
      </Flex>
    </Box>
  );
};

export default FundWallet;
