import { Box, Button, Center, Flex, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import agent from "../../public/assets/agent.png";

const DownloadApp = () => {
  return (
  <>
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
             
            >
              Get Started
            </Button>
          </Box>
          <Box mt={["20px", "20px", "0px", "0px"]}>
            <Image src={agent} alt="phone" />
          </Box>
        </Flex>
  </>
  )
}

export default DownloadApp