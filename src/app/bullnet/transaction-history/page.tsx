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
  useToast,
  FormErrorMessage,
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
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { BsArrowUpRight } from "react-icons/bs";

const TransctionHistory = () => {
  const [progress, setProgress] = useState(1);
  const route = useRouter();
  const toast = useToast();
  const validate = (values: any) => {
    const errors: any = {};
    if (!values.startdate) {
      errors.startdate = "startdate is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.startdate)
    ) {
      errors.startdate = "Invalid startdate address";
    }

    if (!values.enddate) {
      errors.enddate = "enddate is required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: { startdate: "", enddate: "" },
    validate,
    onSubmit: async (values) => {},
  });
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
                  Transction history
                </Box>
              </Flex>
              <Box bg={"white"}>
                <Box borderBottom={"2px solid"} borderColor={"#BBBBBB"}>
                  <Text
                    py={"27.5px"}
                    px={"60px"}
                    color="#3F4951"
                    fontWeight="700"
                    fontSize="16px"
                  >
                    Transaction filter
                  </Text>
                </Box>
                <Box px={"90px"} py={"30px"}>
                  <HStack>
                    <FormControl
                      isInvalid={
                        formik.errors.startdate && formik.touched.startdate
                          ? true
                          : false
                      }
                    >
                      <FormLabel color="#828282" fontSize={15}>
                        Start date
                      </FormLabel>

                      <Input
                        width="420px"
                        type="date"
                        id="startdate"
                        height={"40px"}
                        name="startdate"
                        placeholder="startdate"
                        onChange={formik.handleChange}
                        fontSize={14}
                      />

                      <FormErrorMessage fontSize={12}>
                        {formik.errors.startdate}
                      </FormErrorMessage>
                    </FormControl>
                    <FormControl
                      isInvalid={
                        formik.errors.enddate && formik.touched.enddate
                          ? true
                          : false
                      }
                    >
                      <FormLabel color="#828282" fontSize={15}>
                        End date
                      </FormLabel>

                      <Input
                        width="420px"
                        type="date"
                        id="startdate"
                        height={"40px"}
                        name="enddate"
                        placeholder="enddate"
                        onChange={formik.handleChange}
                        fontSize={14}
                      />

                      <FormErrorMessage fontSize={12}>
                        {formik.errors.startdate}
                      </FormErrorMessage>
                    </FormControl>
                  </HStack>
                  <Center pr="10px" mt="40px">
                    <Button
                      w="100%"
                      color={"white"}
                      bg={"#16780D"}
                      mb={4}
                      height={"40px"}
                      type="submit"
                      isLoading={formik.isSubmitting}
                      fontSize={14}
                    >
                      Search
                    </Button>
                  </Center>
                </Box>
              </Box>
              <Box mt={"20px"} bg="white">
                <Box borderBottom={"2px solid"} borderColor={"#BBBBBB"}>
                  <Text
                    px={"60px"}
                    py={"27.5px"}
                    color="#3F4951"
                    fontWeight="700"
                    fontSize="16px"
                  >
                    Transaction history
                  </Text>
                </Box>
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
                          Credit
                        </Text>
                      </HStack>
                    </Tab>
                    <Tab>
                      <HStack>
                        <Text
                          fontSize="18px"
                          whiteSpace="nowrap"
                          ml={3}
                          color="#BBBBBB"
                          fontWeight="600"
                        >
                          Debit
                        </Text>
                      </HStack>
                    </Tab>
                  </TabList>

                  <TabPanels>
                    <TabPanel>
                      <Box bg={"white"} width="100%">
                        <Box mb={"15px"}>
                          <Text
                            mb="7px"
                            mt="20px"
                            fontSize="15px"
                            color="#BBBBBB"
                            fontWeight="500"
                          >
                            Yesterday
                          </Text>
                          <Box
                            border={"1px solid"}
                            borderRadius={"5px"}
                            borderColor={"#BBBBBB"}
                          >
                            <Flex
                              borderBottom={"1px solid"}
                              borderColor={"#BBBBBB"}
                              justifyContent={"space-between"}
                              alignItems={"center"}
                              py="20px"
                              px={"30px"}
                            >
                              <HStack spacing={"10px"}>
                                <Center
                                  bg={"rgba(22, 120, 13, 0.3)"}
                                  borderRadius={"24px"}
                                  h={"48px"}
                                  width={"48px"}
                                >
                                  {" "}
                                  <BsArrowUpRight />
                                </Center>
                                <Box>
                                  <Text
                                    fontSize="13px"
                                    color="#3F4951"
                                    fontWeight="500"
                                  >
                                    Credited by sammy j (Transaction ID-0153780)
                                  </Text>
                                  <Text
                                    fontSize="18px"
                                    color="#828282"
                                    fontWeight="400"
                                  >
                                    10:00PM
                                  </Text>
                                </Box>
                              </HStack>
                              <Button
                                color={"white"}
                                bg={"#16780D"}
                                size={"sm"}
                              >
                                view details
                              </Button>
                            </Flex>
                            <Flex
                              borderBottom={"1px solid"}
                              borderColor={"#BBBBBB"}
                              justifyContent={"space-between"}
                              alignItems={"center"}
                              py="20px"
                              px={"30px"}
                            >
                              <HStack spacing={"10px"}>
                                <Center
                                  bg={"rgba(22, 120, 13, 0.3)"}
                                  borderRadius={"24px"}
                                  h={"48px"}
                                  width={"48px"}
                                >
                                  {" "}
                                  <BsArrowUpRight />
                                </Center>
                                <Box>
                                  <Text
                                    fontSize="13px"
                                    color="#3F4951"
                                    fontWeight="500"
                                  >
                                    Credited by sammy j (Transaction ID-0153780)
                                  </Text>
                                  <Text
                                    fontSize="18px"
                                    color="#828282"
                                    fontWeight="400"
                                  >
                                    10:00PM
                                  </Text>
                                </Box>
                              </HStack>
                              <Button
                                bg={"#16780D"}
                                color={"white"}
                                size={"sm"}
                              >
                                view details
                              </Button>
                            </Flex>
                            <Flex
                              borderBottom={"1px solid"}
                              borderColor={"#BBBBBB"}
                              justifyContent={"space-between"}
                              alignItems={"center"}
                              py="20px"
                              px={"30px"}
                            >
                              <HStack spacing={"10px"}>
                                <Center
                                  bg={"rgba(22, 120, 13, 0.3)"}
                                  borderRadius={"24px"}
                                  h={"48px"}
                                  width={"48px"}
                                >
                                  {" "}
                                  <BsArrowUpRight />
                                </Center>
                                <Box>
                                  <Text
                                    fontSize="13px"
                                    color="#3F4951"
                                    fontWeight="500"
                                  >
                                    Credited by sammy j (Transaction ID-0153780)
                                  </Text>
                                  <Text
                                    fontSize="18px"
                                    color="#828282"
                                    fontWeight="400"
                                  >
                                    10:00PM
                                  </Text>
                                </Box>
                              </HStack>
                              <Button
                                color={"white"}
                                bg={"#16780D"}
                                size={"sm"}
                              >
                                view details
                              </Button>
                            </Flex>
                          </Box>
                        </Box>
                        <Box mb={"15px"}>
                          <Text
                            mb="7px"
                            mt="20px"
                            fontSize="15px"
                            color="#BBBBBB"
                            fontWeight="500"
                          >
                            1, OCTOBER, 2023
                          </Text>
                          <Box
                            border={"1px solid"}
                            borderRadius={"5px"}
                            borderColor={"#BBBBBB"}
                          >
                            <Flex
                              borderBottom={"1px solid"}
                              borderColor={"#BBBBBB"}
                              justifyContent={"space-between"}
                              alignItems={"center"}
                              py="20px"
                              px={"30px"}
                            >
                              <HStack spacing={"10px"}>
                                <Center
                                  bg={"rgba(22, 120, 13, 0.3)"}
                                  borderRadius={"24px"}
                                  h={"48px"}
                                  width={"48px"}
                                >
                                  {" "}
                                  <BsArrowUpRight />
                                </Center>
                                <Box>
                                  <Text
                                    fontSize="13px"
                                    color="#3F4951"
                                    fontWeight="500"
                                  >
                                    Credited by sammy j (Transaction ID-0153780)
                                  </Text>
                                  <Text
                                    fontSize="18px"
                                    color="#828282"
                                    fontWeight="400"
                                  >
                                    10:00PM
                                  </Text>
                                </Box>
                              </HStack>
                              <Button
                                color={"white"}
                                bg={"#16780D"}
                                size={"sm"}
                              >
                                view details
                              </Button>
                            </Flex>
                            <Flex
                              borderBottom={"1px solid"}
                              borderColor={"#BBBBBB"}
                              justifyContent={"space-between"}
                              alignItems={"center"}
                              py="20px"
                              px={"30px"}
                            >
                              <HStack spacing={"10px"}>
                                <Center
                                  bg={"rgba(22, 120, 13, 0.3)"}
                                  borderRadius={"24px"}
                                  h={"48px"}
                                  width={"48px"}
                                >
                                  {" "}
                                  <BsArrowUpRight />
                                </Center>
                                <Box>
                                  <Text
                                    fontSize="13px"
                                    color="#3F4951"
                                    fontWeight="500"
                                  >
                                    Credited by sammy j (Transaction ID-0153780)
                                  </Text>
                                  <Text
                                    fontSize="18px"
                                    color="#828282"
                                    fontWeight="400"
                                  >
                                    10:00PM
                                  </Text>
                                </Box>
                              </HStack>
                              <Button
                                bg={"#16780D"}
                                color={"white"}
                                size={"sm"}
                              >
                                view details
                              </Button>
                            </Flex>
                            <Flex
                              borderBottom={"1px solid"}
                              borderColor={"#BBBBBB"}
                              justifyContent={"space-between"}
                              alignItems={"center"}
                              py="20px"
                              px={"30px"}
                            >
                              <HStack spacing={"10px"}>
                                <Center
                                  bg={"rgba(22, 120, 13, 0.3)"}
                                  borderRadius={"24px"}
                                  h={"48px"}
                                  width={"48px"}
                                >
                                  {" "}
                                  <BsArrowUpRight />
                                </Center>
                                <Box>
                                  <Text
                                    fontSize="13px"
                                    color="#3F4951"
                                    fontWeight="500"
                                  >
                                    Credited by sammy j (Transaction ID-0153780)
                                  </Text>
                                  <Text
                                    fontSize="18px"
                                    color="#828282"
                                    fontWeight="400"
                                  >
                                    10:00PM
                                  </Text>
                                </Box>
                              </HStack>
                              <Button
                                color={"white"}
                                bg={"#16780D"}
                                size={"sm"}
                              >
                                view details
                              </Button>
                            </Flex>
                          </Box>
                        </Box>
                      </Box>
                    </TabPanel>
                    <TabPanel>
                      <Box bg={"white"} width="100%">
                        <Box mb={"15px"}>
                          <Text
                            mb="7px"
                            mt="20px"
                            fontSize="15px"
                            color="#BBBBBB"
                            fontWeight="500"
                          >
                            Yesterday
                          </Text>
                          <Box
                            border={"1px solid"}
                            borderRadius={"5px"}
                            borderColor={"#BBBBBB"}
                          >
                            <Flex
                              borderBottom={"1px solid"}
                              borderColor={"#BBBBBB"}
                              justifyContent={"space-between"}
                              alignItems={"center"}
                              py="20px"
                              px={"30px"}
                            >
                              <HStack spacing={"10px"}>
                                <Center
                                  bg={"#DD06064D"}
                                  borderRadius={"24px"}
                                  h={"48px"}
                                  width={"48px"}
                                >
                                  {" "}
                                  <BsArrowUpRight />
                                </Center>
                                <Box>
                                  <Text
                                    fontSize="13px"
                                    color="#3F4951"
                                    fontWeight="500"
                                  >
                                    Funds transfer to sammy j (Transaction
                                    ID-0153780)
                                  </Text>
                                  <Text
                                    fontSize="18px"
                                    color="#828282"
                                    fontWeight="400"
                                  >
                                    10:00PM
                                  </Text>
                                </Box>
                              </HStack>
                              <Button
                                color={"white"}
                                bg={"#16780D"}
                                size={"sm"}
                              >
                                view details
                              </Button>
                            </Flex>
                            <Flex
                              borderBottom={"1px solid"}
                              borderColor={"#BBBBBB"}
                              justifyContent={"space-between"}
                              alignItems={"center"}
                              py="20px"
                              px={"30px"}
                            >
                              <HStack spacing={"10px"}>
                                <Center
                                  bg={"#DD06064D"}
                                  borderRadius={"24px"}
                                  h={"48px"}
                                  width={"48px"}
                                >
                                  {" "}
                                  <BsArrowUpRight />
                                </Center>
                                <Box>
                                  <Text
                                    fontSize="13px"
                                    color="#3F4951"
                                    fontWeight="500"
                                  >
                                    Funds transfer to sammy j (Transaction
                                    ID-0153780)
                                  </Text>
                                  <Text
                                    fontSize="18px"
                                    color="#828282"
                                    fontWeight="400"
                                  >
                                    10:00PM
                                  </Text>
                                </Box>
                              </HStack>
                              <Button
                                bg={"#16780D"}
                                color={"white"}
                                size={"sm"}
                              >
                                view details
                              </Button>
                            </Flex>
                            <Flex
                              borderBottom={"1px solid"}
                              borderColor={"#BBBBBB"}
                              justifyContent={"space-between"}
                              alignItems={"center"}
                              py="20px"
                              px={"30px"}
                            >
                              <HStack spacing={"10px"}>
                                <Center
                                  bg={"#DD06064D"}
                                  borderRadius={"24px"}
                                  h={"48px"}
                                  width={"48px"}
                                >
                                  {" "}
                                  <BsArrowUpRight />
                                </Center>
                                <Box>
                                  <Text
                                    fontSize="13px"
                                    color="#3F4951"
                                    fontWeight="500"
                                  >
                                    Funds transfer to sammy j (Transaction
                                    ID-0153780)
                                  </Text>
                                  <Text
                                    fontSize="18px"
                                    color="#828282"
                                    fontWeight="400"
                                  >
                                    10:00PM
                                  </Text>
                                </Box>
                              </HStack>
                              <Button
                                color={"white"}
                                bg={"#16780D"}
                                size={"sm"}
                              >
                                view details
                              </Button>
                            </Flex>
                          </Box>
                        </Box>
                        <Box mb={"15px"}>
                          <Text
                            mb="7px"
                            mt="20px"
                            fontSize="15px"
                            color="#BBBBBB"
                            fontWeight="500"
                          >
                            1, OCTOBER, 2023
                          </Text>
                          <Box
                            border={"1px solid"}
                            borderRadius={"5px"}
                            borderColor={"#BBBBBB"}
                          >
                            <Flex
                              borderBottom={"1px solid"}
                              borderColor={"#BBBBBB"}
                              justifyContent={"space-between"}
                              alignItems={"center"}
                              py="20px"
                              px={"30px"}
                            >
                              <HStack spacing={"10px"}>
                                <Center
                                  bg={"#DD06064D"}
                                  borderRadius={"24px"}
                                  h={"48px"}
                                  width={"48px"}
                                >
                                  {" "}
                                  <BsArrowUpRight />
                                </Center>
                                <Box>
                                  <Text
                                    fontSize="13px"
                                    color="#3F4951"
                                    fontWeight="500"
                                  >
                                    Funds transfer to sammy j (Transaction
                                    ID-0153780)
                                  </Text>
                                  <Text
                                    fontSize="18px"
                                    color="#828282"
                                    fontWeight="400"
                                  >
                                    10:00PM
                                  </Text>
                                </Box>
                              </HStack>
                              <Button
                                color={"white"}
                                bg={"#16780D"}
                                size={"sm"}
                              >
                                view details
                              </Button>
                            </Flex>
                            <Flex
                              borderBottom={"1px solid"}
                              borderColor={"#BBBBBB"}
                              justifyContent={"space-between"}
                              alignItems={"center"}
                              py="20px"
                              px={"30px"}
                            >
                              <HStack spacing={"10px"}>
                                <Center
                                  bg={"#DD06064D"}
                                  borderRadius={"24px"}
                                  h={"48px"}
                                  width={"48px"}
                                >
                                  {" "}
                                  <BsArrowUpRight />
                                </Center>
                                <Box>
                                  <Text
                                    fontSize="13px"
                                    color="#3F4951"
                                    fontWeight="500"
                                  >
                                    Funds transfer to sammy j (Transaction
                                    ID-0153780)
                                  </Text>
                                  <Text
                                    fontSize="18px"
                                    color="#828282"
                                    fontWeight="400"
                                  >
                                    10:00PM
                                  </Text>
                                </Box>
                              </HStack>
                              <Button
                                color={"white"}
                                bg={"#16780D"}
                                size={"sm"}
                              >
                                view details
                              </Button>
                            </Flex>
                            <Flex
                              borderBottom={"1px solid"}
                              borderColor={"#BBBBBB"}
                              justifyContent={"space-between"}
                              alignItems={"center"}
                              py="20px"
                              px={"30px"}
                            >
                              <HStack spacing={"10px"}>
                                <Center
                                  bg={"#DD06064D"}
                                  borderRadius={"24px"}
                                  h={"48px"}
                                  width={"48px"}
                                >
                                  {" "}
                                  <BsArrowUpRight />
                                </Center>
                                <Box>
                                  <Text
                                    fontSize="13px"
                                    color="#3F4951"
                                    fontWeight="500"
                                  >
                                    Funds transfer to sammy j (Transaction
                                    ID-0153780)
                                  </Text>
                                  <Text
                                    fontSize="18px"
                                    color="#828282"
                                    fontWeight="400"
                                  >
                                    10:00PM
                                  </Text>
                                </Box>
                              </HStack>
                              <Button
                                color={"white"}
                                bg={"#16780D"}
                                size={"sm"}
                              >
                                view details
                              </Button>
                            </Flex>
                          </Box>
                        </Box>
                      </Box>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
            </Box>
          </Container>
        </Container>
      </Flex>
    </Box>
  );
};

export default TransctionHistory;
