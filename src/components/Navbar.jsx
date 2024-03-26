import { useState, useEffect, useRef, Fragment } from "react";
import {
  useMediaQuery,
  Flex,
  Image,
  Link,
  useDisclosure,
  useToast,
  Container,
  Divider,
  Grid,
  GridItem,
  DrawerFooter,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  Drawer,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Link as ReactRouterLink,
  useNavigate,
  useSearchParams,
  useLocation,
  createSearchParams,
} from "react-router-dom";

import client from "../setup/axiosClient";
import CheckOrSetUDID from "../utils/checkOrSetUDID";

import { TfiYoutube } from "react-icons/tfi";
import { FaFacebookF, FaGooglePlay,FaApple } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { debounce } from "lodash";

const Links = [
  {
    name: "अभियान",
    location: "/mission",
  },
  {
    name: "गतिविधि",
    location: "/activities",
  },
  {
    name: "उपयोग विधि",
    location: "/howtouse",
  },
  {
    name: "जानकारी",
    location: "/videos",
  },
  {
    name: "परिणाम",
    location: "/result",
  },
  // {
  //   name: "समाचार लेख",
  //   location: "/blogs?page=1",
  // },
  {
    name: " रजिस्ट्रेशन",
    location: "/registration",
  },
  {
    name: "पुस्तक डाउनलोड",
    location: "/download-book",
  },
];

export default function Navbar() {
  let { search } = useLocation();

 


  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const navigate = useNavigate();
  const menuButtonRef = useRef();
 

 

  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const Logout = () => {
    localStorage.clear();
    toast({
      title: "Logged out successfully!",
      status: "success",
      position: "top-right",
      duration: 4000,
      isClosable: true,
    });

    navigate("/");
    // CheckOrSetUDID();
  };

  return (
    <>
      
      <Flex justify="center" display={isMobile ? "flex" : "none"}>
        <Link as={ReactRouterLink} to="/">
          <Image
            // width="100px"
            // height="50px"
            mt={2}
            boxSize="130px"
            objectFit="contain"
            src="/go_krupa_amrutam_logo.png"
            alt="SOSE Logo"
          />
        </Link>
      </Flex>
      <Container maxW={"container.xl"} my={2} display={isMobile ? "" : "none"}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={{
            base: "space-between",
            md: "space-between",
            xl: "space-between",
          }}
          gap={{ base: 2, xl: 10, "2xl": 20 }}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ lg: "none" }}
            onClick={isOpen ? onClose : onOpen}
            ref={menuButtonRef}
          />

          <HStack spacing={{ base: 4, md: 6 }}></HStack>
        </Flex>
        <Drawer
          isOpen={isOpen}
          onClose={onClose}
          placement="left"
          finalFocusRef={menuButtonRef}
        >
          <DrawerOverlay backdropFilter="auto" backdropBlur="2px" />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader as={Flex} justify="center">
              <Link as={ReactRouterLink} to="/">
                <Image
                  boxSize="105px"
                  objectFit="contain"
                  src="/go_krupa_amrutam_logo.png"
                  alt="SOSE Logo"
                />
              </Link>
            </DrawerHeader>

            <DrawerBody p={0}>
              <Flex direction="column" gap={2}>
                {Links.map((link) => (
                  <Fragment key={link.name}>
                    <Link
                      as={ReactRouterLink}
                      color="brand.900"
                      _hover={{
                        textDecoration: "none",
                      }}
                      ms={4}
                    >
                      {link.name}
                    </Link>

                    <Divider h={"1px"} bg="gray.200" />
                  </Fragment>
                ))}
              </Flex>

              {/* </Link> */}
            </DrawerBody>
            <DrawerFooter></DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Container>
      <Container
        maxW={"container.xl"}
        style={{
          boxShadow: "rgba(0, 0, 0, 0.15) 0px 1.95px 0px",
          position: "sticky",
          overFlow: "hidden",
          backgroundColor: "white",
          top: 0,
          zIndex: 9,
        }}
        display={isMobile ? "none" : "block"}
      >
        <Grid templateColumns={{ xl: "repeat(12, 1fr)", lg: "repeat(12,1fr)" }}>
          <GridItem colSpan={1}>
            <Link as={ReactRouterLink} to="/">
              <Image
                boxSize="100px"
                objectFit="contain"
                src="/go_krupa_amrutam_logo.png"
                alt="SOSE Logo"
              />
            </Link>
          </GridItem>
          <GridItem
            colSpan={7}
            display={"flex"}
            // style={{ borderBottom: "0.5px solid #b7b7b7" }}
          >
            <Flex
              as={"nav"}
              gap={{ md: 6, lg: 4, xl: 5 }}
              display={{ base: "flex", lg: "flex" }}
              fontSize={{ lg: 11, xl: 16, md: 9 }}
              alignItems={"center"}
            >
              {Links.map((link) => (
                <Link
                  as={ReactRouterLink}
                  to={link.location}
                  className={link.name === "SOSE Elite" ? "new-link" : ""}
                  _hover={{
                    textDecoration: "none",
                    color: "brand.900",
                  }}
                  // fontWeight={600}
                  //onMouseEnter={handleClose}
                >
                  {link.name}
                </Link>
              ))}
            </Flex>
          </GridItem>

          <GridItem colSpan={4} display={"flex"} justifyContent={"end"}>
            <Flex
              as={"nav"}
              gap={{ md: 6, lg: 5 }}
              display={{ base: "flex", lg: "flex" }}
              fontSize={{ xl: 16, lg: 16 }}
              alignItems={"center"}
            >
              <Link
                isExternal={true}
                _hover={{ color: "text.500" }}
                as={ReactRouterLink}
                to={"https://www.facebook.com/gokrupaamrutam"}
              >
                <FaFacebookF fontSize={20} />
              </Link>
              <Link
                _hover={{ color: "text.500" }}
                isExternal={true}
                as={ReactRouterLink}
                to={"https://www.instagram.com/gokrupaamrutam/"}
              >
                <FiInstagram fontSize={20} />
              </Link>

              <Link
                _hover={{ color: "text.500" }}
                isExternal={true}
                as={ReactRouterLink}
                to={"https://www.youtube.com/@gokrupaamrutam2022"}
              >
                <TfiYoutube fontSize={20} />
              </Link>

              <Link
                _hover={{ color: "text.500" }}
                isExternal={true}
                as={ReactRouterLink}
                to={
                  "https://play.google.com/store/apps/details?id=com.sose.gokrupaamrutam&hl=en&gl=US"
                }
              >
                <FaGooglePlay fontSize={22} />
              </Link>
              <Link
                _hover={{ color: "text.500" }}
                isExternal={true}
                as={ReactRouterLink}
                to={
                  "https://apps.apple.com/in/app/go-krupa-amrutam/id6478011641"
                }
              >
                <FaApple fontSize={22} />
              </Link>
            </Flex>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
}
