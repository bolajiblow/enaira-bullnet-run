import { Box, Container, Flex, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/enaira.svg";
import { RiDashboardFill, RiUserSettingsLine } from "react-icons/ri";
import { BiNotepad, BiUser } from "react-icons/bi";
import { GrUserWorker } from "react-icons/gr";
import { MdWorkOutline } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BsWallet } from "react-icons/bs";

const Sidebar = () => {
  const pathname = usePathname();
  const [role, setRole] = useState<string>();
  useEffect(() => {}, [role]);

  return (
    <Container
      width={"16%"}
      maxWidth={"16%"}
      height={"100%"}
      lineHeight={"100%"}
      pt={4}
      bg="white"
      position="fixed"
      px={0}
    >
      <HStack pl="45px" pb="20px">
        <Box width={"100px"} height={"50px"}>
          <Image src={logo} alt="logo" />
        </Box>
      </HStack>

      <Flex direction="column" fontSize="16px" pt={8}>
        <HStack
          mb={4}
          mx={"10px"}
          py={4}
          color={pathname == "/bullnet/dashboard" ? "#16780D" : "#9E9E9E"}
          boxShadow={pathname == "/bullnet/dashboard" ? "2px 2px 4px 1px rgba(0, 0, 0, 0.25)" : "none"}
          alignItems="center"
          pl={6}
        >
          <RiDashboardFill size={18} />
          <Link href="/bullnet/dashboard">Dashboard</Link>
        </HStack>
        <HStack
          mb={4}
          mx={"10px"}
          py={4}
          color={pathname == "/bullnet/user-profile" ? "#16780D" : "#9E9E9E"}
          boxShadow={pathname == "/bullnet/user-profile" ? "2px 2px 4px 1px rgba(0, 0, 0, 0.25)" : "none"}
          alignItems="center"
          pl={6}
        >
          <BiUser size={18} />
          <Link href="/bullnet/user-profile">User profile</Link>
        </HStack>
        <HStack
          mb={4}
          mx={"10px"}
          py={4}
          color={pathname == "/bullnet/fund-wallet" ? "#16780D" : "#9E9E9E"}
          boxShadow={pathname == "/bullnet/fund-wallet" ? "2px 2px 4px 1px rgba(0, 0, 0, 0.25)" : "none"}
          alignItems="center"
          pl={6}
        >
          <BsWallet size={18} />
          <Link href="/bullnet/fund-wallet">Fund wallet</Link>
        </HStack>
        <HStack
          mb={4}
          mx={"10px"}
          py={4}
          color={pathname == "/bullnet/transfer-funds" ? "#16780D" : "#9E9E9E"}
          boxShadow={pathname == "/bullnet/transfer-funds" ? "2px 2px 4px 1px rgba(0, 0, 0, 0.25)" : "none"}
          alignItems="center"
          pl={6}
        >
          <MdWorkOutline size={18} />
          <Link href="/bullnet/transfer-funds">Transfer funds</Link>
        </HStack>

        <HStack
          mb={4}
          mx={"10px"}
          py={4}
          color={
            pathname == "/bullnet/transaction-history" ? "#16780D" : "#9E9E9E"
          }
          boxShadow={
            pathname == "/bullnet/transaction-history" ? "2px 2px 4px 1px rgba(0, 0, 0, 0.25)" : "none"
          }
          alignItems="center"
          pl={6}
        >
          <BiNotepad size={18} />
          <Link href="/bullnet/transaction-history">Transaction History</Link>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Sidebar;
