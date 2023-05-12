"use client";

import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import partner from "../../public/assets/partnership.png";
import download from "../../public/assets/downloaddiv.svg";
import user from "../../public/assets/user.svg";
import people from "../../public/assets/people.svg";
import dollar from "../../public/assets/dollar-square.svg";
import phone from "../../public/assets/phone.png";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import KeyFeatures from "@/components/KeyFeatures";
import WhyNaira from "@/components/WhyNaira";
import BecomeAgent from "@/components/BecomeAgent";
export default function Home() {
  return (
    <>
      <Box color={"#3F4951"}>
        <Navbar />
        <Flex
          flexDirection={["column", "column", "row", "row"]}
          alignItems={"center"}
          pr={["20px", "20px", "150px", "200px"]}
          justifyContent={"space-between"}
          pl={["20px", "20px", "68px", "68px"]}
          py={["20px", "20px", "50px", "50px"]}
          bg={"#3F4951"}
        >
          <Box>
            <Flex
              fontSize={["30px", "30px", "40px", "45px"]}
              fontWeight={"800"}
            >
              <Text color={"white"} mr="5px">
                Introducing
              </Text>
              <Text color={"#16780D"}>eNaira</Text>
            </Flex>
            <Text
              color={"white"}
              fontSize={["30px", "30px", "40px", "45px"]}
              fontWeight={"800"}
            >
              The Future Digital Currency
            </Text>
            <Text
              color={"#CCC6C6"}
              mb={["25px", "30px", "40px", "45px"]}
              fontSize={["14px", "14px", "16px", "16px"]}
              fontWeight={"400"}
            >
              Experience instant, secure, and borderless transactions with our{" "}
              <br></br> digital naira solution.
            </Text>
            <Button
              color={"white"}
              bg={"#16780D"}
              rightIcon={<ArrowForwardIcon />}
            >
              Get Started
            </Button>
          </Box>
          <Box mt={["20px", "20px", "0px", "0px"]}>
            <Image src={phone} alt="phone" />
          </Box>
        </Flex>
        <Flex
          alignItems="center"
          mb={["20px", "20px", "50px", "50px"]}
          justifyContent="space-between"
          bg="#3F4951CC"
          color={"#CCC6C6"}
          pl={["10px", "20px", "80px", "110px"]}
          pr={["10px", "20px", "80px", "110px"]}
          pt={["20px", "20px", "30px", "40px"]}
          pb={["20px", "20px", "30px", "40px"]}
        >
          <HStack>
            <Box>
              <Image src={people} alt="user" />
            </Box>
            <Box>
              <Text
                fontWeight="600"
                fontSize={["26px", "26px", "30px", "30px"]}
              >
                33k+
              </Text>
              <Text
                mt="-10px"
                fontWeight="400"
                fontSize={["12px", "12px", "14px", "14px"]}
              >
                No of registered users
              </Text>
            </Box>
          </HStack>
          <HStack>
            <Box>
              <Image src={dollar} alt="user" />
            </Box>
            <Box>
              <Text
                fontWeight="600"
                fontSize={["26px", "26px", "30px", "30px"]}
              >
                1000+
              </Text>
              <Text
                mt="-10px"
                fontWeight="400"
                fontSize={["12px", "12px", "14px", "14px"]}
              >
                No of sold vouchers
              </Text>
            </Box>
          </HStack>
          <HStack>
            <Box>
              <Image src={user} alt="user" />
            </Box>
            <Box>
              <Text
                fontWeight="600"
                fontSize={["26px", "26px", "30px", "30px"]}
              >
                280
              </Text>
              <Text
                mt="-10px"
                fontWeight="400"
                fontSize={["12px", "12px", "14px", "14px"]}
              >
                No of agents onboard
              </Text>
            </Box>
          </HStack>
        </Flex>
        <Box px={"70px"} pb={"50px"}>
          <Flex mb="35px" fontSize={"36px"} color={"#3F4951"}>
            <Text mr="5px" borderBottom={"4px solid"} borderColor="green">
              About
            </Text>
            <Text> eNaira</Text>
          </Flex>
          <Text mb={"12px"} fontSize={"16px"} color={"#655D5D"}>
            eNaira is a Central Bank of Nigeria-issued digital currency that
            provides a unique form of money denominated in Naira. eNaira serves
            as both a medium of exchange and a store of value, offering better
            payment prospects in retail transactions when compared to cash
            payments. eNaira has an exclusive operational structure that is both
            remarkable and nothing like other forms of central bank money.
          </Text>
          <Text mb={"12px"} fontSize={"16px"} color={"#655D5D"}>
            There are several benefits from a central bank-issued digital
            currency in Nigeria, and this cuts across different sectors of, and
            concerns of the economy. eNaira is an electronic version of the
            local paper naira currency, equal in value and issued by the Central
            Bank Nigeria. It functions as a safe and efficient alternative means
            of payment.
          </Text>
          <Text fontSize={"16px"} color={"#655D5D"}>
            Organizations and individuals are seeking fast, safe, easy, and
            cheap means of payment. eNaira was minted to meet these pressing
            needs.
          </Text>
        </Box>
        <KeyFeatures />

        <WhyNaira />
        <BecomeAgent />
      
        <Box width="100%">
          <Image src={download} alt="download" />
        </Box>
        <Flex py="44px" justifyContent={"center"} alignItems={"center"}>
          <Text fontWeight={"700"} fontSize={"30px"}>
            In Partnership with{" "}
          </Text>
          <Box>
            <Image src={partner} alt="partner" />
          </Box>
        </Flex>
        <Footer />
      </Box>
    </>
  );
}
