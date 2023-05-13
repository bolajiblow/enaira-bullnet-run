import { Box, Button, Center, Flex, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import ellipse from "../../public/assets/ellipse.svg";
import phone from "../../public/assets/phone2.png";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { BsApple, BsGooglePlay } from "react-icons/bs";
import styles from '../app/page.module.css';

const DownloadApp = () => {
  return (
    <>
      <Flex
        flexDirection={["column", "column", "row", "row"]}
        alignItems={"center"}
        px={["10px", "10px", "50px", "50px"]}
        justifyContent={"space-between"}
        py={["20px", "20px", "60px", "70px"]}
        bg={"white"}
      >
        <Box>
          <Box mb="10px" maxW={"510px"}>
            <Text fontSize={"36px"} fontWeight={"700"} color={"#3F4951"}>
              Download Our Mobile App And Start Enjoying Smooth And Easy
              Transactions
            </Text>
          </Box>
          <Box mb={"40px"} maxW={"510px"}>
            <Text fontSize={"15px"} fontWeight={"400"} color={"#3F4951"}>
              Get our mobile on playstore or apple store and start enjoying
              smooth eNaira transactions
            </Text>
          </Box>
          <Flex>
            <Button
              mr={"20px"}
              colorScheme="green"
              variant={'outline'}
              leftIcon={<BsGooglePlay />}
            >
              Download on Google Playstore
            </Button>
            <Button  color={"white"}
              bg={"#16780D"}  rightIcon={<BsApple />}>
              Download on Apple Store
            </Button>
          </Flex>
        </Box>
        <Box   display={["none", "none", "block", "block"]} mt={["20px", "20px", "0px", "0px"]}>
          <Box  className={styles.parent} >
            <Box className={styles.image1}>
              <Image src={ellipse} alt="phone" />
            </Box>
            <Box >
              <Image  className={styles.image2} src={phone} alt="phone" />
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default DownloadApp;
