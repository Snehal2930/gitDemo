import React from "react";
import { Heading, Flex, Image, Button,Text } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {ArrowForwardIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const Registration = () => {
    const navigate= useNavigate()
  return (
    <>
      <Navbar />
      <Image src={require("../assets/images/Mission/1.jpg")} />
      <Flex
        
        py={"4%"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        gap={{base:7}}
        flexDirection={{md:"row",base:"column"}}
        pl={{base:7}}
      >
        <Flex flexDirection={"column"} gap={3}>
          <Heading fontSize={{md:"3xl",base:"2xl"}} mb={{base:7}}>इस मिशन से कौन जुड़ सकता है?</Heading>
          <Text fontSize={{md:"xl",base:"lg"}}>
            किसान. स्वयंसेवक . एनजीओ / ट्रस्ट . सामाजिक कार्यकर्ता . प्रभावक .{" "}
          </Text>
        </Flex>
        <Button
          _hover={{ bgColor: "text.500",color:"white" }}
          variant={"outline"}
          borderColor={"text.500"}
          p={8}
          fontSize={"xl"}
          onClick={()=>navigate("/")}
          rightIcon={
            <ArrowForwardIcon
              bgColor={"brand.500"}
              color={"white"}
              borderRadius={"8px"}
             
            />
          }
        >
           पंजीकरण
        </Button>
      </Flex>
      <Footer />
    </>
  );
};

export default Registration;
