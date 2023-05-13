import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  Box,
  useToast,
  Flex,
  Button,
  Center,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useEffect, useRef, useState } from "react";
import OTPInput from "react-otp-input";
import OtpInput from "react-otp-input";

export const OtpModal: React.FC<any> = ({
  isOpen,
  onClosed,
  isOtp = false,
}: {
  isOtp: boolean;
  isOpen: any;
  onClosed: any;
}) => {
  const [
    { otp, numInputs, separator, minLength, maxLength, placeholder, inputType },
    setConfig,
  ] = useState({
    otp: "",
    numInputs: 6,
    separator: "--",
    minLength: 0,
    maxLength: 40,
    placeholder: "",
    inputType: "number" as const,
  });

  const handleOTPChange = (otp: string) => {
    setConfig((prevConfig) => ({ ...prevConfig, otp }));
  };

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setConfig((prevConfig) => ({ ...prevConfig, [name]: value }));
  };

  const handleNumInputsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let numInputs = event.target.valueAsNumber;

    if (numInputs < minLength || numInputs > maxLength) {
      numInputs = 4;

      console.error(
        `Please enter a value between ${minLength} and ${maxLength}`
      );
    }

    setConfig((prevConfig) => ({ ...prevConfig, numInputs }));
  };

  const clearOtp = () => {
    setConfig((prevConfig) => ({ ...prevConfig, otp: "" }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(otp);
  };
  return (
    <>
      <Modal
        isOpen={isOpen && isOtp}
        onClose={onClosed}
        scrollBehavior="outside"
        closeOnOverlayClick={true}
        size="lg"
      >
        <ModalOverlay />
        <ModalContent borderRadius={5} px={6}>
          <ModalHeader>
            {
              <Text
                fontSize={13}
                pb={3}
                textTransform="uppercase"
                pl={3}
                color="brand.2"
              ></Text>
            }
          </ModalHeader>
          <ModalCloseButton size="sm" />
          <ModalBody pb={6}>
            <Box mt={2}>
              <Box w={"100%"}>
                <Text
                  fontSize={["20px", "20px", "20px", "25px"]}
                  fontWeight={"600"}
                  color={"#3F4951"}
                  textAlign={"center"}
                >
                 Please check your email!
                </Text>
                <Text
                  mb={"30px"}
                  fontSize={["12px", "12px", "13px", "13px"]}
                  fontWeight={"400"}
                  color={"#828282"}
                  textAlign={"center"}
                >
                We’ve emailed a 6 digit confirmation code to seye@gmail.com, please enter the code below in the box to verify your email.
                </Text>
              </Box>
              <Flex width={"100%"} justifyContent={"center"}>
                <Box>
                  <Box >
                    <OTPInput
                      inputStyle="inputStyle"
                      numInputs={numInputs}
                      onChange={handleOTPChange}
                      renderSeparator={<span>{separator}</span>}
                      value={otp}
                      placeholder={placeholder}
                      inputType={inputType}
                      renderInput={(props) => <input {...props} />}
                      shouldAutoFocus
                    />
                  </Box>
                  <Center>
                    <Button
                      w="100%"
                      color={"white"}
                      bg={"#16780D"}
                      mb={8}
                      mt='20px'
                      height={"40px"}
                      fontSize={14}
                    >
                      Verify
                    </Button>
                  </Center>
                  <Center>
                    <Flex mb={2} color="#EC3337" fontSize={"12px"}>
                      <Text color={"#828282"}>Dont have a code?</Text>
                      <Text ml="4px" color={"#16780D"}>
                        {" "}
                        Resend code
                      </Text>
                    </Flex>
                  </Center>
                </Box>
              </Flex>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
