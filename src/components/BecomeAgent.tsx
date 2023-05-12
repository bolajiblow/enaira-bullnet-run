import { Box, Button, Center, Flex, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import agent from "../../public/assets/agent.png";
import { BsCheck } from "react-icons/bs";
const BecomeAgent = () => {
  return (
    <>
      <Box
        mt="20px"
        px={["20px", "30px", "50px", "50px"]}
        py={["20px", "20px", "40px", "20px"]}
      >
        <Flex
          justifyContent={"center"}
          mb="70px"
          fontSize={"30px"}
          fontWeight={"700"}
          color={"#3F4951"}
        >
          <Text mr="5px"> Become an</Text>
          <Text mr="5px" borderBottom={"4px solid"} borderColor="green">
            eNaira
          </Text>
          <Text> Agent</Text>
        </Flex>
        <Flex
          flexDirection={["column", "column", "row", "row"]}
          alignItems={"center"}
          justifyContent={"space-between"}
          bg={"white"}
        >
          <Box>
            <Image src={agent} alt="agent" />
          </Box>
          <Box ml={'50px'}>
            <Text mb={'20px'} fontWeight={'500'} fontSize={'20px'}>Looking for how to make extra cash without stress?</Text>
            <Text  mb={'20px'} fontWeight={'400'} fontSize={'16px'}>As an eNaira agent, you will;</Text>
            <Box mb='40px'>
              <HStack mb={'10px'}>
                <Center borderRadius={"3px"} w="20px" h="20px" bg={"#3F4951"}>
                  <BsCheck fontSize={"18px"} />
                </Center>
                <Text>Earn passive income while you focus on your career</Text>
              </HStack>
              <HStack mb={'10px'}>
                <Center borderRadius={"3px"} w="20px" h="20px" bg={"#3F4951"}>
                  <BsCheck fontSize={"18px"} />
                </Center>
                <Text>Earn passive income while you focus on your career</Text>
              </HStack>
              <HStack mb={'10px'}>
                <Center borderRadius={"3px"} w="20px" h="20px" bg={"#3F4951"}>
                  <BsCheck fontSize={"18px"} />
                </Center>
                <Text>Earn passive income while you focus on your career</Text>
              </HStack>
              <HStack mb={'10px'}>
                <Center borderRadius={"3px"} w="20px" h="20px" bg={"#3F4951"}>
                  <BsCheck fontSize={"18px"} />
                </Center>
                <Text>Earn passive income while you focus on your career</Text>
              </HStack>
            </Box>
            <Button colorScheme="green" variant={"outline"} borderRadius={0}>
              Click here to become an agent
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default BecomeAgent;
