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
} from "@chakra-ui/react";

import Link from "next/link";
import Sidebar from "@/components/bullnet/Sidebar";
import DashboardNavbar from "@/components/DashboardNavbar";
import Image from "next/image";

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
            </Box>
          </Container>
        </Container>
      </Flex>
    </Box>
  );
};

export default FundWallet;
