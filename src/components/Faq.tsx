import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import woman from "../../public/assets/woman.svg";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";

const Faq = () => {
  return (
    <>
      <Flex
        flexDirection={["column", "column", "row", "row"]}
      
        px={["10px", "10px", "50px", "50px"]}
        justifyContent={"space-between"}
        py={["20px", "20px", "60px", "70px"]}
        bg={"white"}
      >
        <Box>
          <Box mb="10px" maxW={"510px"}>
            <Text
              textAlign={"center"}
              fontSize={"36px"}
              fontWeight={"700"}
              color={"#3F4951"}
            >
              Frequently Asked Questions (FAQ)
            </Text>
          </Box>
          <Box mb={"40px"} maxW={"510px"}>
            <Text fontSize={"15px"} fontWeight={"400"} color={"#655D5D"}>
              We are here to guide you. Get answers to your most pressing
              questions about eNaira from this comprehensive FAQ section.
            </Text>
          </Box>
          <Box>
            <Image src={woman} alt="woman" />
          </Box>
        </Box>
        <Box w={["300px", "400px", "600px", "700px"]} mt={["20px", "20px", "0px", "0px"]}>
          <Accordion allowMultiple>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _expanded={{ bg: "#3F4951", color: "white" }}
                    >
                      <Flex alignItems={'center'} justifyContent="space-between" w="100%">
                        <Text
                          color={isExpanded ? "white" : "#3F4951"}
                          fontSize={"25px"}
                        >
                          {" "}
                          How do I open an account?
                        </Text>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </Flex>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _expanded={{ bg: "#3F4951", color: "white" }}
                    >
                      <Flex alignItems={'center'} justifyContent="space-between" w="100%">
                        <Text
                          color={isExpanded ? "white" : "#3F4951"}
                          fontSize={"25px"}
                        >
                          {" "}
                          How do I open an account?
                        </Text>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </Flex>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _expanded={{ bg: "#3F4951", color: "white" }}
                    >
                      <Flex alignItems={'center'} justifyContent="space-between" w="100%">
                        <Text
                          color={isExpanded ? "white" : "#3F4951"}
                          fontSize={"25px"}
                        >
                          {" "}
                          How do I get started?
                        </Text>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </Flex>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _expanded={{ bg: "#3F4951", color: "white" }}
                    >
                      <Flex alignItems={'center'} justifyContent="space-between" w="100%">
                        <Text
                          color={isExpanded ? "white" : "#3F4951"}
                          fontSize={"25px"}
                        >
                          {" "}
                          How do I refer?
                        </Text>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </Flex>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _expanded={{ bg: "#3F4951", color: "white" }}
                    >
                      <Flex alignItems={'center'} justifyContent="space-between" w="100%">
                        <Text
                          color={isExpanded ? "white" : "#3F4951"}
                          fontSize={"25px"}
                        >
                          {" "}
                          How do I change my password?
                        </Text>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </Flex>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _expanded={{ bg: "#3F4951", color: "white" }}
                    >
                      <Flex alignItems={'center'} justifyContent="space-between" w="100%">
                        <Text
                          color={isExpanded ? "white" : "#3F4951"}
                          fontSize={"25px"}
                        >
                          {" "}
                          How do I open an account?
                        </Text>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </Flex>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _expanded={{ bg: "#3F4951", color: "white" }}
                    >
                      <Flex alignItems={'center'} justifyContent="space-between" w="100%">
                        <Text
                          color={isExpanded ? "white" : "#3F4951"}
                          fontSize={"25px"}
                        >
                          {" "}
                          How do I open an account?
                        </Text>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </Flex>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        </Box>
      </Flex>
    </>
  );
};

export default Faq;
