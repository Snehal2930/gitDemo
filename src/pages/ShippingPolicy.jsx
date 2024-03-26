import {
  Container,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Box,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import BreadCrumbCom from "../components/BreadCrumbCom";

export default function ShippingPolicy() {
  let { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const IsMobileView = searchParams.get("mobile") ?? "false";

  return (
    <>
      {IsMobileView !== "true" && <Navbar />}

      <Container maxW="container.xl">
        <BreadCrumbCom
          second={"Shipping Policy"}
          secondUrl={"/shipping-policy"}
        />
      </Container>
      <Container maxW={"container.xl"} mb={4} px={0}>
        <Box
          w={"100%"}
          bgImage="https://forntend-bucket.s3.ap-south-1.amazonaws.com/dsose/organic-living/shipping.jpg"
          bgSize="cover"
          bgPosition="center"
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt={"-10px"}
          py={20}
          boxShadow={"0px 0px 0px 0px"}
          backdropFilter="blur(10px)"
          height={"550px"}
          // mb={10}
        >
          <Text
            pb={2}
            color={"brand.100"}
            textAlign={"center"}
            textShadow={"lightgreen"}
            fontSize="6xl"
            fontWeight="700"
          >
            Shipping Policy
          </Text>
        </Box>
      </Container>
      <Container maxW={"6xl"} pt={10}>
        <Heading
          fontSize="3xl"
          fontWeight={600}
          textAlign={"center"}
          color={"brand.900"}
        >
          Shipping Policy
        </Heading>
        <Text py={6}>
          {" "}
          We aim to process and dispatch orders as quickly as possible.{" "}
        </Text>
        <UnorderedList pb={8}>
          <ListItem py={4} textAlign={"justify"}>
            For deliveries in the Ahmedabad: two working days unless we are
            exceptionally out of stock in which case we will let you know in
            advance.
          </ListItem>
          <ListItem py={4} textAlign={"justify"}>
            For deliveries in the rest of India: five to six working days unless
            we are exceptionally out of stock in which case we will let you know
            in advance.
          </ListItem>
          <ListItem py={4} textAlign={"justify"}>
            For deliveries in the rest of the world: At this moment, we don’t
            deliver outside India.
          </ListItem>
          <ListItem py={4} textAlign={"justify"}>
            Suryan Organic reserve the right to refuse confirmed orders that are
            customer approved but without enough funds will not be processed.
          </ListItem>
          <ListItem py={4} textAlign={"justify"}>
            Delivery of Goods will take place at the Delivery Address specified
            by you during the Order process. You will need to submit a separate
            Order for Goods where you require multiple delivery destinations.
          </ListItem>
          <ListItem py={4} textAlign={"justify"}>
            If you are not personally available to accept delivery, you may
            appoint a representative to do so in your place.
          </ListItem>
          <ListItem py={4} textAlign={"justify"}>
            On delivery, the Delivery Agent may require you or your nominated
            representative to provide them with proof of identity, such as photo
            identification or proof You or your nominated representative may be
            required to sign a delivery manifest to confirm that the delivery
            has taken place. If you refuse to sign the delivery document, this
            will be taken as a refusal to accept the delivery.
          </ListItem>
          <ListItem py={4} textAlign={"justify"}>
            You agree to give us as much detail as possible about particular
            features of the Delivery Address to ensure delivery can take place.
          </ListItem>
        </UnorderedList>
      </Container>
      {IsMobileView !== "true" && <Footer />}
    </>
  );
}
