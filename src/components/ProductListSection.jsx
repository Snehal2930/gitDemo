import {
  Container,
  Text,
  Flex,
  useMediaQuery,
  Box,
  Skeleton,
  SkeletonText,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import ProductCard from "./ProductCard";

export default function ProductListSection({ title, products, loading }) {
  return (
    <>
      <Container maxW={"container.xl"} px={0} pt={4} pb={6}>
        <Text
          fontSize={{ base: "xl", sm: "2xl", xl: "3xl" }}
          bgColor={"bg.500"}
          px={{ base: 2, md: 8 }}
          py={4}
          mb={8}
          textAlign={{ base: "center", md: "start" }}
          fontWeight={500}
        >
          {title}
        </Text>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(5, 1fr)",
          }}
          //justify={ "start"}
          justify="center"
          align="center"
          direction={{ base: "column", md: "row" }}
          // wrap={"wrap"}
          wrap={{ md: "wrap", lg: "nowrap" }}
          px={5}
        >
          {loading === true ? (
            <>
              {[0, 1, 2, 3, 4].map(() => (
                <Box
                  padding="6"
                  boxShadow="lg"
                  bg="white"
                  w={{ base: "80vw", sm: "3xs", lg: "2xs" }}
                >
                  <Skeleton width={150} mx={"auto"} height={150} />
                  <SkeletonText
                    my="4"
                    noOfLines={1}
                    spacing="4"
                    skeletonHeight="2"
                  />
                  <Skeleton mx="auto" width={100} height={5} />
                </Box>
              ))}
            </>
          ) : (
            <>
              {products?.map((product) => (
                <GridItem my={4}>
                  <ProductCard key={product.id} product={product} />
                </GridItem>
              ))}
            </>
          )}
        </Grid>
      </Container>
    </>
  );
}
