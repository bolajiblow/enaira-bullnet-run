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
  Table,
  Tag,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Divider,
  Progress,
} from "@chakra-ui/react";
import {
  ComposedChart,
  CartesianGrid,
  XAxis,
  LineChart,
  YAxis,
  Legend,
  Line,
  PieChart,
  ResponsiveContainer,
  Pie,
  Tooltip,
} from "recharts";
import { BsArrowRightShort, BsFillStarFill } from "react-icons/bs";
import { useState } from "react";
import Link from "next/link";
import Sidebar from "@/components/bullnet/Sidebar";
import DashboardNavbar from "@/components/DashboardNavbar";
import Image from "next/image";
import card from "../../../../public/assets/card.svg";
import { Chart } from "react-google-charts";

export const data_piechart = [
  ["Expenditure", "Amount"],

  ["Total Expenses", 150000],
  ["Balance", 40000],
];

export const options_piechart = {
  pieHole: 0.7,
  is3D: false,
  legend: "none",
  colors: ["green", "lightgray"],
};
export const data_ISO = [
  ["Month", "Non-conformities"],
  ["Jan", 10],
  ["Feb", 8],
  ["Mar", 12],
  ["Apr", 9],
  ["May", 4],
  ["Jun", 6],
  ["Jul", 3],
  ["Aug", 1],
];

export const options_ISO = {
  curveType: "function",
  legend: "none",
  colors: ["green"],
};

const Dashboard = () => {
  const data = [
    {
      name: "Jan",
      pv: 2400,
    },
    {
      name: "Feb",
      pv: 1398,
    },
    {
      name: "Mar",
      pv: 9800,
    },
    {
      name: "Apr",
      pv: 3908,
    },
    {
      name: "May",
      pv: 4800,
    },
    {
      name: "Jun",
      pv: 3800,
    },
    {
      name: "Jul",
      pv: 4300,
    },
  ];

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
            bg="rgba(22, 120, 13, 0.03);"
          >
            <Box>
              <Flex
                justifyContent="space-between"
                alignItems="center"
                py="26px"
              >
                <Box color="#16780D" fontWeight="700" fontSize="24px">
                  Dashboard
                </Box>

                {/* <HStack>
                  <Menu>
                    <MenuButton
                      as={Button}
                      // leftIcon={<US title="Nigeria" />}
                      colorScheme="#D5D5D5"
                      variant={"outline"}
                      size="sm"
                      fontSize={13}
                      width="106px"
                    >
                      Nigeria
                    </MenuButton>
                    <MenuList fontSize={12}>
                      <MenuItem>Kenya</MenuItem>

                      <MenuItem>Ghana</MenuItem>
                      <MenuItem> Congo DRC</MenuItem>
                      <MenuItem>Ireland</MenuItem>
                    </MenuList>
                  </Menu>
                </HStack> */}
              </Flex>

              <Flex justifyContent="space-between" pb="40px" mb="40px">
                <Container
                  bg="#16780D"
                  borderRadius="10px"
                  color="white"
                  px={14}
                  py={10}
                  boxShadow="base"
                  m={0}
                  width={"40%"}
                >
                  <Box>
                    <Text fontSize={"18px"} mb="8px" fontWeight={"400"}>
                      Balance
                    </Text>
                    <Text fontSize={"32px"} mb="40px" fontWeight={"700"}>
                      N150,000
                    </Text>
                    <HStack spacing={"40px"}>
                      <Button bg={"white"} color={"#16780D"}>
                        Fund wallet
                      </Button>
                      <Button variant={"outline"} colorScheme="white">
                        Withdraw
                      </Button>
                    </HStack>
                  </Box>
                </Container>

                <Spacer mx={3} />
                <Container color="white">
                  <HStack mb={"25px"} color="#16780D" spacing={"40px"}>
                    <Box
                      borderRadius="8px"
                      px={"30px"}
                      pt={"35px"}
                      pb={"20px"}
                      boxShadow="5px 9px 5px 1px rgba(0, 0, 0, 0.1)"
                    >
                      <Box>
                        {" "}
                        <Image src={card} alt="debit-card" />
                      </Box>
                      <Text fontSize={"15px"} mt={"15px"} fontWeight={"400"}>
                        Pay bills
                      </Text>
                    </Box>
                    <Box
                      borderRadius="8px"
                      px={"30px"}
                      pt={"35px"}
                      pb={"20px"}
                      boxShadow="5px 9px 5px 1px rgba(0, 0, 0, 0.1)"
                    >
                      <Box>
                        {" "}
                        <Image src={card} alt="debit-card" />
                      </Box>
                      <Text fontSize={"15px"} mt={"15px"} fontWeight={"400"}>
                        Pay bills
                      </Text>
                    </Box>
                    <Box
                      borderRadius="8px"
                      px={"30px"}
                      pt={"35px"}
                      pb={"20px"}
                      boxShadow="5px 9px 5px 1px rgba(0, 0, 0, 0.1)"
                    >
                      <Box>
                        {" "}
                        <Image src={card} alt="debit-card" />
                      </Box>
                      <Text fontSize={"15px"} mt={"15px"} fontWeight={"400"}>
                        Pay bills
                      </Text>
                    </Box>
                  </HStack>
                  <HStack spacing={"40px"}>
                    <Box
                      borderRadius="8px"
                      color="#16780D"
                      px={"30px"}
                      pt={"35px"}
                      pb={"20px"}
                      boxShadow="5px 9px 5px 1px rgba(0, 0, 0, 0.1)"
                    >
                      <Box>
                        {" "}
                        <Image src={card} alt="debit-card" />
                      </Box>
                      <Text fontSize={"15px"} mt={"15px"} fontWeight={"400"}>
                        Pay bills
                      </Text>
                    </Box>
                    <Box
                      borderRadius="8px"
                      px={"30px"}
                      pt={"35px"}
                      pb={"20px"}
                      boxShadow="5px 9px 5px 1px rgba(0, 0, 0, 0.1)"
                    >
                      <Box>
                        {" "}
                        <Image src={card} alt="debit-card" />
                      </Box>
                      <Text fontSize={"15px"} mt={"15px"} fontWeight={"400"}>
                        Pay bills
                      </Text>
                    </Box>
                    <Box
                      borderRadius="8px"
                      color="#16780D"
                      px={"30px"}
                      pt={"35px"}
                      pb={"20px"}
                      boxShadow="5px 9px 5px 1px rgba(0, 0, 0, 0.1)"
                    >
                      <Box>
                        {" "}
                        <Image src={card} alt="debit-card" />
                      </Box>
                      <Text fontSize={"15px"} mt={"15px"} fontWeight={"400"}>
                        Pay bills
                      </Text>
                    </Box>
                  </HStack>
                </Container>
              </Flex>

              <Flex
                pl={"35px"}
                pr={"15px"}
                pt="20px"
                pb={"40px"}
                bg="white"
                borderRadius={"8px"}
                boxShadow={"-1px 0px 10px 2px rgba(0, 0, 0, 0.25)"}
                justifyContent={"space-between"}
              >
                <Box width={"65%"}>
                  <Flex pb="20px" justifyContent={"space-between"}>
                    <Text fontWeight="600" fontSize="18px" color="#828282">
                      Statistics
                    </Text>
                  </Flex>
                  <Box width={"100%"}>
                    <LineChart
                      width={500}
                      height={300}
                      data={data}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="0 0" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />

                      <Line
                        type="monotone"
                        dataKey="pv"
                        stroke="#A6CEE3"
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </Box>
                </Box>

                <Box width={"35%"}>
                  <Chart
                    chartType="PieChart"
                    width="100%"
                    height="300px"
                    data={data_piechart}
                    options={options_piechart}
                  />
                  <Box>
                    <Text
                      fontWeight={"600"}
                      fontSize={"16px"}
                      color={"#828282"}
                      textAlign={"center"}
                    >
                      57% Total Expense
                    </Text>
                    <Progress colorScheme="green" size={"sm"} value={57} />
                  </Box>
                </Box>
              </Flex>
              <Box
                pl={"35px"}
                pr={"15px"}
                pt="20px"
                pb={"40px"}
                bg="white"
                mt={"20px"}
                borderRadius={"8px"}
                boxShadow={"-1px 0px 10px 2px rgba(0, 0, 0, 0.25)"}
                justifyContent={"space-between"}
              >
                <Flex justifyContent={"space-between"}>
                  <Text fontWeight="600" fontSize="18px" color="#828282">
                    Statistics
                  </Text>
                  <HStack>
                    <Text fontWeight="400" fontSize="14px" color="#828282">
                      show more
                    </Text>
                    <BsArrowRightShort />
                  </HStack>
                </Flex>
                <Flex
                  px={"100px"}
                  mb="13px"
                  mt="35px"
                  justifyContent={"space-between"}
                >
                  <Text fontWeight="600" fontSize="15px" color="#828282">
                    Statistics
                  </Text>
                  <Text fontWeight="600" fontSize="15px" color="#828282">
                    Statistics
                  </Text>
                  <Text fontWeight="600" fontSize="15px" color="#828282">
                    Statistics
                  </Text>
                  <Text fontWeight="600" fontSize="15px" color="#828282">
                    Statistics
                  </Text>
                </Flex>
                <Flex px={"100px"} mb="13px" justifyContent={"space-between"}>
                  <Text fontWeight="400" fontSize="13px" color="#828282">
                    Statistics
                  </Text>
                  <Text fontWeight="400" fontSize="13px" color="#828282">
                    Statistics
                  </Text>
                  <Text fontWeight="400" fontSize="13px" color="#828282">
                    Statistics
                  </Text>
                  <Text fontWeight="400" fontSize="13px" color="#828282">
                    Statistics
                  </Text>
                </Flex>
                <Flex px={"100px"} mb="13px" justifyContent={"space-between"}>
                  <Text fontWeight="400" fontSize="13px" color="#828282">
                    Statistics
                  </Text>
                  <Text fontWeight="400" fontSize="13px" color="#828282">
                    Statistics
                  </Text>
                  <Text fontWeight="400" fontSize="13px" color="#828282">
                    Statistics
                  </Text>
                  <Text fontWeight="400" fontSize="13px" color="#828282">
                    Statistics
                  </Text>
                </Flex>
                <Flex px={"100px"} mb="13px" justifyContent={"space-between"}>
                  <Text fontWeight="400" fontSize="13px" color="#828282">
                    Statistics
                  </Text>
                  <Text fontWeight="400" fontSize="13px" color="#828282">
                    Statistics
                  </Text>
                  <Text fontWeight="400" fontSize="13px" color="#828282">
                    Statistics
                  </Text>
                  <Text fontWeight="400" fontSize="13px" color="#828282">
                    Statistics
                  </Text>
                </Flex>
                <Flex px={"100px"} mb="13px" justifyContent={"space-between"}>
                  <Text fontWeight="400" fontSize="13px" color="#828282">
                    Statistics
                  </Text>
                  <Text fontWeight="400" fontSize="13px" color="#828282">
                    Statistics
                  </Text>
                  <Text fontWeight="400" fontSize="13px" color="#828282">
                    Statistics
                  </Text>
                  <Text fontWeight="400" fontSize="13px" color="#828282">
                    Statistics
                  </Text>
                </Flex>
                <Flex px={"100px"} mb="13px" justifyContent={"space-between"}>
                  <Text fontWeight="400" fontSize="13px" color="#828282">
                    Statistics
                  </Text>
                  <Text fontWeight="400" fontSize="13px" color="#828282">
                    Statistics
                  </Text>
                  <Text fontWeight="400" fontSize="13px" color="#828282">
                    Statistics
                  </Text>
                  <Text fontWeight="400" fontSize="13px" color="#828282">
                    Statistics
                  </Text>
                </Flex>
                <Flex px={"100px"} mb="13px" justifyContent={"space-between"}>
                  <Text fontWeight="400" fontSize="13px" color="#828282">
                    Statistics
                  </Text>
                  <Text fontWeight="400" fontSize="13px" color="#828282">
                    Statistics
                  </Text>
                  <Text fontWeight="400" fontSize="13px" color="#828282">
                    Statistics
                  </Text>
                  <Text fontWeight="400" fontSize="13px" color="#828282">
                    Statistics
                  </Text>
                </Flex>
              </Box>
              <Flex justifyContent={"space-between"} mt={"20px"}>
                <Box
                  pl={"40px"}
                  pr={"40px"}
                  pt="30px"
                  pb={"30px"}
                  borderRadius={"12px"}
                  width={'60%'}
                  boxShadow={"-1px 0px 10px 2px rgba(0, 0, 0, 0.25)"}
                >
                     <Flex justifyContent={"space-between"}>
                  <Text fontWeight="600" fontSize="18px" color="#828282">
                    Statistics
                  </Text>
                  <HStack>
                    <Text fontWeight="400" fontSize="14px" color="#828282">
                      show more
                    </Text>
                    <BsArrowRightShort />
                  </HStack>
                </Flex>
                <Flex
                 
                  mb="13px"
                  mt="35px"
                  justifyContent={"space-between"}
                >
                  <Text fontWeight="600" fontSize="15px" color="#828282">
                    Statistics
                  </Text>
                  <Text fontWeight="600" fontSize="15px" color="#828282">
                    Statistics
                  </Text>
                  <Text fontWeight="600" fontSize="15px" color="#828282">
                    Statistics
                  </Text>
                  <Text fontWeight="600" fontSize="15px" color="#828282">
                    Statistics
                  </Text>
                </Flex>
                <Flex mb="13px" justifyContent={"space-between"}>
                  <Text fontWeight="400" fontSize="13px" color="#828282">
                    Statistics
                  </Text>
                  <Text fontWeight="400" fontSize="13px" color="#828282">
                    Statistics
                  </Text>
                  <Text fontWeight="400" fontSize="13px" color="#828282">
                    Statistics
                  </Text>
                  <Text fontWeight="400" fontSize="13px" color="#828282">
                    Statistics
                  </Text>
                </Flex>
                <Flex mb="13px" justifyContent={"space-between"}>
                  <Text fontWeight="400" fontSize="13px" color="#828282">
                    Statistics
                  </Text>
                  <Text fontWeight="400" fontSize="13px" color="#828282">
                    Statistics
                  </Text>
                  <Text fontWeight="400" fontSize="13px" color="#828282">
                    Statistics
                  </Text>
                  <Text fontWeight="400" fontSize="13px" color="#828282">
                    Statistics
                  </Text>
                </Flex>
                <Flex mb="13px" justifyContent={"space-between"}>
                  <Text fontWeight="400" fontSize="13px" color="#828282">
                    Statistics
                  </Text>
                  <Text fontWeight="400" fontSize="13px" color="#828282">
                    Statistics
                  </Text>
                  <Text fontWeight="400" fontSize="13px" color="#828282">
                    Statistics
                  </Text>
                  <Text fontWeight="400" fontSize="13px" color="#828282">
                    Statistics
                  </Text>
                </Flex>
                <Flex mb="13px" justifyContent={"space-between"}>
                  <Text fontWeight="400" fontSize="13px" color="#828282">
                    Statistics
                  </Text>
                  <Text fontWeight="400" fontSize="13px" color="#828282">
                    Statistics
                  </Text>
                  <Text fontWeight="400" fontSize="13px" color="#828282">
                    Statistics
                  </Text>
                  <Text fontWeight="400" fontSize="13px" color="#828282">
                    Statistics
                  </Text>
                </Flex>
                <Flex mb="13px" justifyContent={"space-between"}>
                  <Text fontWeight="400" fontSize="13px" color="#828282">
                    Statistics
                  </Text>
                  <Text fontWeight="400" fontSize="13px" color="#828282">
                    Statistics
                  </Text>
                  <Text fontWeight="400" fontSize="13px" color="#828282">
                    Statistics
                  </Text>
                  <Text fontWeight="400" fontSize="13px" color="#828282">
                    Statistics
                  </Text>
                </Flex>
                </Box>
                <Box   pl={"40px"}
                  pr={"40px"}
                  pt="30px"
                  pb={"30px"}
                  borderRadius={"12px"}
                  width={'35%'}
                  boxShadow={"-1px 0px 10px 2px rgba(0, 0, 0, 0.25)"}></Box>
              </Flex>
            </Box>
          </Container>
        </Container>
      </Flex>
    </Box>
  );
};

export default Dashboard;
