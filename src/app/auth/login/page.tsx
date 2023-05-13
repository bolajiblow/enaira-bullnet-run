"use client";

import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  Text,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  useToast,
  Link,
  HStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { MdLock } from "react-icons/md";
import Image from "next/image";
import login from "../../../../public/assets/login1.png";
import { BsCheck } from "react-icons/bs";
import LoginNav from "@/components/LoginNav";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

const Login = () => {
  const route = useRouter()
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
      <Box>
        <LoginNav />
        <Flex mb='187px'>
          <Box width="65%" minHeight="100vh">
            <Box height="40vh">
              <Image alt="login" src={login} />
            </Box>
          </Box>
          <Flex alignItems={"center"}>
            <Box px={"60px"} mt="60px">
              <Text
                fontSize={["none", "none", "25px", "30px"]}
                fontWeight={"600"}
                color={"#3F4951"}
                textAlign={"center"}
              >
                Welcome to eNaira
              </Text>
              <Text
                mb={"50px"}
                fontSize={["10px", "10px", "14px", "16px"]}
                fontWeight={"400"}
                color={"#3F4951"}
                textAlign={"center"}
              >
                Sign-in to your wallet account and start making easy
                transactions
              </Text>

              <form onSubmit={formik.handleSubmit}>
                <FormControl
                  mb="27px"
                  isInvalid={
                    formik.errors.email && formik.touched.email ? true : false
                  }
                >
                  <FormLabel color="#828282" fontSize={15}>
                    Username
                  </FormLabel>

                  <Input
                    width="420px"
              
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
                  mb="27px"
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
                      width="420px"
          
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
          </Flex>
        </Flex>
        <Footer />
      </Box>
    </>
  );
};

export default Login;
