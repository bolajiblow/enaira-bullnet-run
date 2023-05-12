import {
  Box,
  Flex,
  HStack,
  Text,
  VStack,
  Input,
  Center,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FaTwitter, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import enaira from "../../public/assets/footer1.png";
import send from "../../public/assets/send.svg";
import Image from "next/image";
import { CheckIcon } from "@chakra-ui/icons";

const Footer = () => {
  return (
    <Box
      bg="#3F4951"
      pb={"20px"}
      pt={"50px"}
      px={["20px", "20px", "50px", "50px"]}
      color="white"
    >
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDirection={["column", "column", "row", "row"]}
      >
        <Box mb={["20px", "20px", "0px", "0px"]}>
          <Box mb="25px" height={"90px"} width={"212px"}>
            <Image src={enaira} alt="logo" />
          </Box>
          <HStack spacing={"25px"}>
            <Center width="30px" bg="white" borderRadius="15px" height="30px">
              <FaTwitter color="black" fontSize="18px" />
            </Center>
            <Center width="30px" bg="white" borderRadius="15px" height="30px">
              <FaInstagram color="black" fontSize="18px" />
            </Center>
            <Center width="30px" bg="white" borderRadius="15px" height="30px">
              <FaFacebookF color="black" fontSize="18px" />
            </Center>
            <Center width="30px" bg="white" borderRadius="15px" height="30px">
              <FaYoutube color="black" fontSize="18px" />
            </Center>
          </HStack>
        </Box>
        <Box>
          <Flex>
            <Box
              fontWeight={"500"}
              fontSize={"13px"}
              mr={["20px", "30px", "70px", "70px"]}
            >
              <Text
                mb="15px"
                borderBottom={"4px solid"}
                borderColor="green"
                fontWeight={"700"}
                fontSize={"16px"}
               
              >
                Quick Links
              </Text>
              <Text mb="15px">Home</Text>
              <Text mb="15px">How it works</Text>
              <Text mb="15px">FAQs</Text>
              <Text mb="15px">About Us</Text>
              <Text mb="15px">Privacy policy</Text>
            </Box>
            <Box fontWeight={"500"} fontSize={"13px"}>
              <Text
                width={"50px"}
                mb="15px"
                borderBottom={"4px solid"}
                borderColor="green"
                fontWeight={"700"}
                fontSize={"16px"}
               
              >
                eNaira
              </Text>
              <Text mb={["10px", "10px", "15px", "15px"]}>Fund wallet</Text>
              <Text mb={["10px", "10px", "15px", "15px"]}>
                Transaction history
              </Text>
              <Text mb={["10px", "10px", "15px", "15px"]}>
                Transaction rate
              </Text>
              <Text mb={["10px", "10px", "15px", "15px"]}>Conversion rate</Text>
              <Text mb={["10px", "10px", "15px", "15px"]}>eNaira value</Text>
            </Box>
          </Flex>
        </Box>
        <Box px='0px'>
          <Text
            textAlign={"center"}
            mb="15px"
            borderBottom={"4px solid"}
            borderColor="green"
            fontWeight={"700"}
            width={"80px"}
            fontSize={"16px"}
           
          >
            Newsletter
          </Text>
          <Text fontWeight={"500"} fontSize={"13px"}>
            Sign up for the latest news and updates
          </Text>
          <InputGroup>
            <Input
              width={["260px", "250px", "300px", "400px"]}
              bg={"white"}
              height={"40px"}
              placeholder="Enter amount"
            />
            <InputRightElement>
              <Box cursor={"pointer"}>
                {" "}
                <Image src={send} alt="send" />
              </Box>
            </InputRightElement>
          </InputGroup>
          <Flex pt={["20px", "40px", "85px", "85px"]}>
            <Text fontWeight={"500"} fontSize={"15px"}>
              ©2023 eNaira powered by
            </Text>
            <Text ml='10px' fontWeight={"600"} fontSize={"15px"} color="#16780D">
              {" "}
              Bullnet
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
export default Footer;
