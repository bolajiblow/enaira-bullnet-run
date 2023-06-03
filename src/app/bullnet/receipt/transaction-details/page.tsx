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

const TransactionDetails = () => {
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
                  Transfer details
                </Box>
              </Flex>
             
            </Box>
          </Container>
        </Container>
      </Flex>
    </Box>
  );
};

export default TransactionDetails;
