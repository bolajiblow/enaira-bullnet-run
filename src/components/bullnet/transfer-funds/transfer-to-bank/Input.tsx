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

const InputTransfer = () => {
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
      <Flex
        justifyContent={"space-between"}
        color={"white"}
        bg={"#16780D"}
        py={"34px"}
        px={"25px"}
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
            mb="15px"
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
              formik.errors.password && formik.touched.password ? true : false
            }
          >
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<MdLock />} />
              <Input
                type="password"
                name="password"
                w={"100%"}
                height={"40px"}
                id="number"
                placeholder="amount"
                onChange={formik.handleChange}
                fontSize={14}
              />
            </InputGroup>
            <FormErrorMessage fontSize={14}>
              {formik.errors.password}
            </FormErrorMessage>
          </FormControl>
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
              w={"100%"}
              name="text"
              placeholder="Description"
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
              formik.errors.password && formik.touched.password ? true : false
            }
          >
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<MdLock />} />
              <Input
                type="password"
                name="password"
                w={"100%"}
                height={"40px"}
                id="password"
                placeholder="Receiver’s phone number"
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
            Continue
            </Button>
          </Center>
        </form>
      </Box>
    </>
  );
};

export default InputTransfer;
