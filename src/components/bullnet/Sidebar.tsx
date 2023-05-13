import { Box, Container, Flex, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/img/logo2.svg";
import { RiDashboardFill, RiUserSettingsLine } from "react-icons/ri";
import { BiUser } from "react-icons/bi";
import { GrUserWorker } from "react-icons/gr";
import { MdWorkOutline } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
      boxShadow="base"
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
          mb={5}
          py={4}
          bg={pathname == "/bullnet/dashboard" ? "#F5F8FF" : "white"}
          color={pathname == "/bullnet/dashboard" ? "#0047CC" : "#9E9E9E"}
          borderLeftColor={pathname == "/bullnet/dashboard" ? "#0047CC" : "white"}
          borderLeftWidth="4px"
          alignItems="center"
          pl={9}
        >
          <RiDashboardFill size={18} />
          <Link href="/bullnet/dashboard">
            <a>Dashboard</a>
          </Link>
        </HStack>
        <HStack
          mb={5}
          py={4}
          bg={pathname == "/bullnet/user-profile" ? "#F5F8FF" : "white"}
          color={pathname == "/bullnet/user-profile" ? "#0047CC" : "#9E9E9E"}
          borderLeftColor={pathname == "/bullnet/user-profile" ? "#0047CC" : "white"}
          borderLeftWidth="4px"
          alignItems="center"
          pl={9}
        >
          <BiUser size={18} />
          <Link href="/bullnet/user-profile">
            <a>User profile</a>
          </Link>
        </HStack>
        <HStack
          mb={5}
          py={4}
          bg={pathname == "/bullnet/fund-wallet" ? "#F5F8FF" : "white"}
          color={pathname == "/bullnet/fund-wallet" ? "#0047CC" : "#9E9E9E"}
          borderLeftColor={pathname == "/bullnet/fund-wallet" ? "#0047CC" : "white"}
          borderLeftWidth="4px"
          alignItems="center"
          pl={9}
        >
          <GrUserWorker size={18} />
          <Link href="/bullnet/fund-wallet">
            <a>Fund wallet</a>
          </Link>
        </HStack>
        <HStack
          mb={5}
          py={4}
          bg={pathname == "/bullnet/transfer-funds" ? "#F5F8FF" : "white"}
          color={pathname == "/bullnet/transfer-funds" ? "#0047CC" : "#9E9E9E"}
          borderLeftColor={pathname == "/bullnet/transfer-funds" ? "#0047CC" : "white"}
          borderLeftWidth="4px"
          alignItems="center"
          pl={9}
        >
          <MdWorkOutline size={18} />
          <Link href="/bullnet/transfer-funds">
            <a>Transfer funds</a>
          </Link>
        </HStack>

        <HStack
          mb={5}
          py={4}
          bg={pathname == "/bullnet/transaction-history" ? "#F5F8FF" : "white"}
          color={pathname == "/bullnet/transaction-history" ? "#0047CC" : "#9E9E9E"}
          borderLeftColor={pathname == "/bullnet/transaction-history" ? "#0047CC" : "white"}
          borderLeftWidth="4px"
          alignItems="center"
          pl={9}
        >
          <RiUserSettingsLine size={18} />
          <Link href="/bullnet/transaction-history">
            <a>Transaction History</a>
          </Link>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Sidebar;
