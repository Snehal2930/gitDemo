import React from "react";
import {
  Heading,
  Box,
  Container,
  SimpleGrid,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Photos = () => {
  const data = [
    { id: 1, image: require("../assets/images/Photos/009(1).jpg") },
    { id: 2, image: require("../assets/images/Photos/021 (1).jpg") },
    { id: 3, image: require("../assets/images/Photos/031.jpg") },
    { id: 4, image: require("../assets/images/Photos/034.jpg") },
    { id: 5, image: require("../assets/images/Photos/018.jpg") },
    { id: 6, image: require("../assets/images/Photos/009.jpg") },
    { id: 7, image: require("../assets/images/Photos/000.jpg") },
    { id: 8, image: require("../assets/images/Photos/001.jpg") },
    { id: 9, image: require("../assets/images/Photos/003.jpg") },
    { id: 10, image: require("../assets/images/Photos/006.jpg") },
    { id: 11, image: require("../assets/images/Photos/008.jpg") },
    { id: 12, image: require("../assets/images/Photos/012.jpg") },
    { id: 13, image: require("../assets/images/Photos/013.jpg") },
    { id: 14, image: require("../assets/images/Photos/015.jpg") },
    { id: 15, image: require("../assets/images/Photos/017.jpg") },
    { id: 16, image: require("../assets/images/Photos/020.jpg") },
    { id: 17, image: require("../assets/images/Photos/021.jpg") },
    { id: 18, image: require("../assets/images/Photos/024.jpg") },
    

    // Add more data as needed
  ];
  return (
    <>
      <Navbar />

      <Container maxW={"6xl"} py={10}>
        <Image src={require("../assets/images/Photos/Milk.jpg")} />
        <Grid
          templateColumns={{
            md: "repeat(2, 1fr)",
            base: "repeat(1, 1fr)",
          }}
          gap={4}
          my={4}
        >
          <GridItem>
            <Image src={require("../assets/images/Photos/image_13.jpg")} />
          </GridItem>
          <GridItem>
            <Image
              w={"100%"}
              src={require("../assets/images/Photos/image_12.jpg")}
            />
          </GridItem>
        </Grid>
        <Image
          src={require("../assets/images/Photos/image_19.jpg")}
          w={"100%"}
          mb={4}
        />
        <Grid
          templateColumns={{
            md: "repeat(3, 1fr)",
            base: "repeat(1, 1fr)",
          }}
          gap={4}
          my={4}
        >
          <GridItem>
            <Image src={require("../assets/images/Photos/image_14.jpg")} />
          </GridItem>
          <GridItem>
            <Image
              w={"100%"}
              src={require("../assets/images/Photos/image_16.jpg")}
            />
          </GridItem>
          <GridItem>
            <Image src={require("../assets/images/Photos/000 (1).jpg")} />
          </GridItem>
        </Grid>
        <Image
          w={"100%"}
          src={require("../assets/images/Photos/image_15.jpg")}
        />
        <Grid
          templateColumns={{
            md: "repeat(3, 1fr)",
            base: "repeat(1, 1fr)",
          }}
          gap={4}
          my={4}
        >
          {data.map((item) => (
            <GridItem>
              <Image src={item.image} w={"100%"} />
            </GridItem>
          ))}
        </Grid>
        <Image w={"100%"} src={require("../assets/images/Photos/025.jpg") } />
        <Grid
          templateColumns={{
            md: "repeat(2, 1fr)",
            base: "repeat(1, 1fr)",
          }}
          gap={4}
          my={4}
        >
          <GridItem>
            <Image  w={"100%"} src={require("../assets/images/Photos/031 (1).jpg")} />
          </GridItem>
          <GridItem>
            <Image
              w={"100%"}
              src={require("../assets/images/Photos/033.jpg")}
            />
          </GridItem>
        </Grid>
        <Image  w={"100%"} src={require("../assets/images/Photos/028.jpg")} />
        <Grid
          templateColumns={{
            md: "repeat(3, 1fr)",
            base: "repeat(1, 1fr)",
          }}
          gap={4}
          my={4}
        >
          <GridItem>
            <Image src={require("../assets/images/Photos/026.jpg")} />
          </GridItem>
          <GridItem>
            <Image
              w={"100%"}
              src={require("../assets/images/Photos/029.jpg")}
            />
          </GridItem>
          <GridItem>
            <Image src={require("../assets/images/Photos/027.jpg")} />
          </GridItem>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Photos;
