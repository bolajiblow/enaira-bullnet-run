"use client";

import { Box, Button, Center, Flex, FormControl, FormErrorMessage, FormLabel, HStack, Input, InputGroup, InputLeftElement, Text, useToast } from "@chakra-ui/react";
import React from "react";
import styles from "../../page.module.css";
import { useFormik } from "formik";
import { BsCheck } from "react-icons/bs";
import { MdLock } from "react-icons/md";
const Login3 = () => {

  const toast = useToast();
  const validate = (values: any) => {
    const errors: any = {};
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validate,
    onSubmit: async (values) => {},
  });

  return (
    <>
     <div className={styles.background}>
     <Flex alignItems={'center'} justifyContent={'center'} maxW="99vw" h={"100vh"}>
        <Flex bg={'white'} px={'100px'} py={'50px'}  alignItems={'center'} justifyContent={'center'} maxW={'850px'}>
          <Flex bg={'white'} width={'330px'}>
          <Box px={"0px"}>
              <Text
                fontSize={["20px", "20px", "20px", "25px"]}
                fontWeight={"600"}
                color={"#3F4951"}
                textAlign={"center"}
              >
                Welcome to eNaira
              </Text>
              <Text
                mb={"30px"}
                fontSize={["12px", "12px", "13px", "13px"]}
                fontWeight={"400"}
                color={"#3F4951"}
                textAlign={"center"}
              >
                Sign-in to your wallet account and start making easy
                transactions
              </Text>
              <Text fontSize={["17px", "17px", "17px", "20px"]}
                fontWeight={"600"}
                color={"#3F4951"}
                textAlign={"center"}
                mb={'30px'}
                mt={'30px'}>Login</Text>

            <Box>
            <form onSubmit={formik.handleSubmit}>
                <FormControl
                  mb="15px"
                  isInvalid={
                    formik.errors.email && formik.touched.email ? true : false
                  }
                >
                  <FormLabel color="#828282" fontSize={15}>
                    Username
                  </FormLabel>

                  <Input
                    width="330px"
                    type="email"
                    id="email"
                    height={"40px"}
                    name="email"
                    placeholder="Email ID/Phone Number"
                    onChange={formik.handleChange}
                    fontSize={14}
                  />

                  <FormErrorMessage fontSize={12}>
                    {formik.errors.email}
                  </FormErrorMessage>
                </FormControl>

                <FormControl
                   mb="15px"
                  isInvalid={
                    formik.errors.password && formik.touched.password
                      ? true
                      : false
                  }
                >
                  <FormLabel color="#828282" fontSize={14}>
                    Password*
                  </FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<MdLock />}
                    />
                    <Input
                      width="330px"
                      type="password"
                      name="password"
                      height={"40px"}
                      id="password"
                      placeholder="Enter your password"
                      onChange={formik.handleChange}
                      fontSize={14}
                    />
                  </InputGroup>
                  <FormErrorMessage fontSize={14}>
                    {formik.errors.password}
                  </FormErrorMessage>
                </FormControl>
                <Flex justifyContent={"space-between"}>
                  {" "}
                  <HStack mb={"10px"}>
                    <Center
                      borderRadius={"3px"}
                      w="20px"
                      h="20px"
                      bg={"#3F4951"}
                    >
                      <BsCheck fontSize={"18px"} />
                    </Center>
                    <Text color="#828282" fontSize={"14px"}>
                      Keep me logged in
                    </Text>
                  </HStack>
                  <Box mb={2} alignSelf="center" color="#828282" fontSize={14}>
                    <Text fontSize={"14px"}>Forgot Password?</Text>
                  </Box>
                </Flex>

                <Center>
                  <Button
                    w="100%"
                    color={"white"}
                    bg={"#16780D"}
                    mb={8}
                    height={"40px"}
                    type="submit"
                    isLoading={formik.isSubmitting}
                    fontSize={14}
                  >
                    LOGIN
                  </Button>
                </Center>

                <Center>
                  <Flex mb={2} color="#EC3337" fontSize={"14px"}>
                    <Text color={"#828282"}>
                      Dont have a wallet account?
                    </Text>
                    <Text ml="4px" color={"#16780D"}>
                      {" "}
                      Sign up
                    </Text>
                  </Flex>
                </Center>
              </form>
            </Box>
            </Box>
          </Flex>
        </Flex>
      </Flex>
     </div>
    </>
  );
};

export default Login3;
