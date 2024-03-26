import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Image,
  Flex,
  Grid,
  Button,
} from "@chakra-ui/react";
import { FaFacebookF, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FiInstagram } from "react-icons/fi";
import { useNavigate, NavLink as RouterLink } from "react-router-dom";

import { AiFillMail } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"700"} fontSize={"xl"} mb={1} color="brand.500">
      {children}
    </Text>
  );
};

export default function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const [isMobiles, setIsMobiles] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
      setIsMobiles(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [RouterLink]);
  return (
    <>
      <hr />
      <Container maxW={"container.xl"}>
        {/* <Box className="scrolling-text-container">
          <Text
            align={"center"}
            color="brand.900"
            pt={4}
            px={4}
            fontSize={{ base: "sm", lg: "md" }}
            className="scrolling-text"
          >
            For Deliveries in America, Canada, Europe, UAE, Singapore, etc Email
            us on
            <Link
              target="_blank"
              href="mailto:export@suryanorganic.com"
              isExternal
              fontWeight={"bold"}
            >
              export@suryanorganic.com
            </Link>{" "}
            or Whatsapp on{" "}
            <Link
              target="_blank"
              href="https://wa.me/+916354800089?text=Hello%2C%20this%20is%20a%20test%20message"
              fontWeight={"bold"}
            >
              +91-6354-8000-89
            </Link>
          </Text>
        </Box> */}
        <Container as={Stack} maxW={"6xl"} pt={10} pb={2}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacingY="8px">
            <Stack align={"flex-start"} fontSize={"md"} color="text.300">
              <ListHeader>त्वरित संपर्क</ListHeader>
              <Link
                textDecoration="none"
                color="text.300"
                _hover={{ color: "text.500" }}
                as={RouterLink}
                to={"/"}
              >
                होम
              </Link>
              <Link
                textDecoration="none"
                _hover={{ color: "text.500" }}
                as={RouterLink}
                to={"/mission"}
              >
                अभियान
              </Link>
              <Link
                textDecoration="none"
                _hover={{ color: "text.500" }}
                as={RouterLink}
                to={"/activities"}
              >
                गतिविधि
              </Link>
              <Link
                textDecoration="none"
                _hover={{ color: "text.500" }}
                as={RouterLink}
                to={"/howtouse"}
              >
                केसे उपयोग करे
              </Link>
              <Link
                textDecoration="none"
                _hover={{ color: "text.500" }}
                as={RouterLink}
                to={"/result"}
              >
                गौ कृपा अमृतम के परिणाम
              </Link>
              <Link
                textDecoration="none"
                _hover={{ color: "text.500" }}
                as={RouterLink}
                to={"/photos"}
              >
                तस्वीरे
              </Link>
              <Link
                textDecoration="none"
                _hover={{ color: "text.500" }}
                as={RouterLink}
                to={"/faq"}
              >
                प्रश्नोतरी
              </Link>
              <Link
                textDecoration="none"
                _hover={{ color: "text.500" }}
                as={RouterLink}
                to={"/contact-us"}
              >
                संपर्क
              </Link>
              <Link
                textDecoration="none"
                _hover={{ color: "text.500" }}
                as={RouterLink}
                to={"/inspire-and-support"}
              >
                प्रेरणा और समर्थन
              </Link>
              <Link
                textDecoration="none"
                _hover={{ color: "text.500" }}
                as={RouterLink}
                to={"/registration"}
              >
                पंजीकरण
              </Link>
            </Stack>
            <Stack align={"flex-start"} fontSize={"md"} color="text.300">
              <ListHeader align={"flex-start"} marginBottom={5}>
                संपर्क
              </ListHeader>
              <Flex alignItems={"center"}>
                <BsFillTelephoneFill />
                +९१ ६३५१ ००० ३४९
              </Flex>
              <Flex alignItems={"center"}>
                <BsFillTelephoneFill />
                +९१ ७४८७ ०६ ४३९५
              </Flex>
              <Flex alignItems={"center"}>
                <BsFillTelephoneFill /> +९१ ९३१६ ७४ ६९९०
              </Flex>
              <Flex alignItems={"center"}>
                <BsFillTelephoneFill />
                +९१ ६३५१ ९७ ८०८७
              </Flex>
              <Flex alignItems={"center"}>
                <AiFillMail />
                info@bansigir.in
              </Flex>
            </Stack>

            <Stack mt={{ md: 3 }}>
              <ListHeader align={"flex-start"} marginBottom={5}>
                पता
              </ListHeader>
              <Text fontWeight={600} color="text.300" mb={7} fontSize={"md"}>
                बंसी गिर गौशाला, मेट्रो होलसले मॉल के पीछे, शांतिपुरा सर्कल, एस
                पी रिंग रोड, सरखेज, अहमदाबाद, गुजरात - ३८२२१०
              </Text>
              <Text fontSize={"md"}>
                आने का समय : शाम के ०३:०० से ०६:०० बजे तक
              </Text>
              <Button target="_blank" _hover={{textDecoration:"none",bgColor:"text.500",color:"white"}} as={Link} href="https://goo.gl/maps/uagHQeDoCBEk3ErM9" color="text.500" size={"lg"} w={200} variant={"outline"} leftIcon={<FaMapMarkerAlt />}>Google Map</Button>
             
            </Stack>
          </SimpleGrid>
        </Container>
        <Box py={4}>
          <Text pt={6} fontSize={"sm"} textAlign={"center"} color={"brand.500"}>
            Copyright © Bansi Gir Gaushala
          </Text>
        </Box>
      </Container>
    </>
  );
}
