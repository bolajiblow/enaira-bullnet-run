import {
  Box,
  Center,
  Flex,
  VStack,
  Text,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
  useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { BsBank2 } from "react-icons/bs";
import { MdLock } from "react-icons/md";

const Confirmation = () => {
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
    initialValues: { email: "", password: "", phone: "", bvn: "" },
    validate,
    onSubmit: async (values) => {},
  });
  return (
    <>
      <Text
        mt="50px"
        mb="20px"
        fontSize={"20px"}
        fontWeight={"500"}
        color={"#3F4951"}
      >
        Transfer from
      </Text>
      <Flex
        mb="20px"
        justifyContent={"space-between"}
        color={"white"}
        bg={"#ffffff"}
        py={"34px"}
        px={"25px"}
        boxShadow={'base'}
      >
        <VStack spacing={"20px"}>
          <Text fontWeight={"600"} fontSize={"16px"} color={"#16780D"}>
            Wallet ID
          </Text>
          <Text fontSize={"14px"} color={"#16780D"}>
            023218654
          </Text>
        </VStack>
        <VStack spacing={"20px"}>
          <Text fontWeight={"600"} fontSize={"16px"} color={"#16780D"}>
            Balance
          </Text>
          <Text fontSize={"14px"} color={"#16780D"}>
            N123,000
          </Text>
        </VStack>
      </Flex>
      <Text
       
        mb="20px"
        fontSize={"20px"}
        fontWeight={"500"}
        color={"#3F4951"}
      >
        Transfer to
      </Text>

      <Flex
        justifyContent={"space-between"}
        color={"white"}
        bg={"#16780D"}
        py={"34px"}
        px={"25px"}
        mb="20px"
      >
        <VStack spacing={"20px"}>
          <Text fontSize={"16px"} color={"#ffffff"}>
            Akinbode Sammy
          </Text>
          <Text fontSize={"14px"} color={"#BDBDBD"}>
            Gtbank - 023218654
          </Text>
        </VStack>
        <Center>
          <BsBank2 color="white" fontSize="30px" />
        </Center>
      </Flex>
      <Box>
        <form onSubmit={formik.handleSubmit}>
          <FormControl
            
            isInvalid={
              formik.errors.email && formik.touched.email ? true : false
            }
          >
            <Input
              type="email"
              id="email"
              height={"40px"}
              w={"100%"}
              name="email"
              placeholder="Enter Transaction Pin"
              onChange={formik.handleChange}
              fontSize={14}
            />

            <FormErrorMessage fontSize={12}>
              {formik.errors.email}
            </FormErrorMessage>
          </FormControl>
          <Text fontSize={'13px'} color={'#DD0606'} mb="30px">Note: For this transaction you will be charged    21 </Text>

          <Center>
            <Button
              w="60%"
              color={"white"}
              bg={"#16780D"}
              mb={8}
              height={"40px"}
              type="submit"
              isLoading={formik.isSubmitting}
              fontSize={14}
            >
              Send Money
            </Button>
          </Center>
        </form>
      </Box>
    </>
  );
};

export default Confirmation;
