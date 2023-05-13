"use client";

import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Portal,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "../../page.module.css";
import { useFormik } from "formik";
import { BsCheck } from "react-icons/bs";
import { MdLock } from "react-icons/md";
import LoginNav from "@/components/LoginNav";
import Footer from "@/components/Footer";
import { OtpModal } from "@/components/modals/OtpModal";

const SignUp = () => {
  const toast = useToast();
  const [isOtp, setOtp] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const openOtp = async () => {
    setOtp(true);
    onOpen();
  };
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
    initialValues: { email: "", password: "", phone: "", bvn: "" },
    validate,
    onSubmit: async (values) => {
      openOtp();
    },
  });

  return (
    <>
      <LoginNav />
      <div className={styles.background}>
        <Box maxW="99vw">
          <Flex
            py={"50px"}
            pl={"70px"}
            fontSize={"44px"}
            fontWeight={"700"}
            color={"white"}
          >
            <Text mr="5px" borderBottom={"4px solid"} borderColor="white">
              Sign
            </Text>
            <Text> Up</Text>
          </Flex>
        </Box>
      </div>
      <Flex
        mt={"50px"}
        mb={"50px"}
        alignItems={"center"}
        justifyContent={"center"}
        maxW="99vw"
      >
        <Box maxW={"750px"} boxShadow={"base"}>
          <Box bg={"#F8F2F2"} py={"20px"} w={"100%"}>
            <Text
              fontSize={["20px", "20px", "20px", "25px"]}
              fontWeight={"600"}
              color={"#3F4951"}
              textAlign={"center"}
            >
              Let’s get started!
            </Text>
            <Text
              mb={"30px"}
              fontSize={["12px", "12px", "13px", "13px"]}
              fontWeight={"400"}
              color={"#828282"}
              textAlign={"center"}
            >
              Create your eNaira wallet now and start making endless
              transactions
            </Text>
          </Box>
          <Flex
            bg={"white"}
            py={"60px"}
            justifyContent={"center"}
            width={"750px"}
          >
            <Box width={"600px"} px={"0px"}>
              <Flex
                pb={"40px"}
                fontSize={"20px"}
                fontWeight={"700"}
                color={"#3F4951"}
              >
                <Text mr="5px" borderBottom={"4px solid"} borderColor="#3F4951">
                  Sign
                </Text>
                <Text> Up</Text>
              </Flex>
            <Box>
            <form onSubmit={formik.handleSubmit}>
                <HStack w={"600px"} mb="15px">
                  <FormControl
                    isInvalid={
                      formik.errors.phone && formik.touched.phone ? true : false
                    }
                  >
                    <Input
                      type="number"
                      id="phone"
                      height={"40px"}
                      name="phone"
                      placeholder="Enter Phone Number"
                      onChange={formik.handleChange}
                      fontSize={14}
                    />

                    <FormErrorMessage fontSize={12}>
                      {formik.errors.phone}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={
                      formik.errors.bvn && formik.touched.bvn ? true : false
                    }
                  >
                    <Input
                      type="number"
                      id="bvn"
                      height={"40px"}
                      name="bvn"
                      placeholder="Enter BVN/NIN"
                      onChange={formik.handleChange}
                      fontSize={14}
                    />

                    <FormErrorMessage fontSize={12}>
                      {formik.errors.bvn}
                    </FormErrorMessage>
                  </FormControl>
                </HStack>
                <FormControl
                  mb="15px"
                  isInvalid={
                    formik.errors.email && formik.touched.email ? true : false
                  }
                >
                  <Input
                    type="email"
                    id="email"
                    height={"40px"}
                    name="email"
                    placeholder="Enter Email"
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
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<MdLock />}
                    />
                    <Input
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
                    Sign Up
                  </Button>
                </Center>

                <Center>
                  <Flex mb={2} color="#EC3337" fontSize={"14px"}>
                    <Text color={"#828282"}>
                      By signing up, I agree to eNaira{" "}
                    </Text>
                    <Text ml="4px" color={"#16780D"}>
                      {" "}
                      Terms of service & Privacy policy
                    </Text>
                  </Flex>
                </Center>
              </form>
            </Box>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Footer />
      {isOtp && (
        <Portal>
          {" "}
          <OtpModal isOpen={isOpen} onClosed={onClose} isOtp={isOtp} />{" "}
        </Portal>
      )}
    </>
  );
};

export default SignUp;
