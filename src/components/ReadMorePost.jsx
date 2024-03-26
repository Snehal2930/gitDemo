import {
  Container,
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";

const ReadMorePost = ({ postDetails }) => {
  return (
    <Container maxW={{ base: "100vw", lg: "100vw" }} my={12} centerContent>
      <Card
        direction={{ base: "column", lg: "row" }}
        overflow="hidden"
        boxShadow={"none"}
      >
        <Image
          objectFit="contain"
          maxW={{ base: "100%", sm: "500px" }}
          src={postDetails.image}
          alt={postDetails.title}
          borderRadius={"xl"}
        />

        <Stack ps={{ base: 0, lg: 3 }}>
          <CardBody p={{ base: 2, lg: 4 }} pt={4}>
            <Heading fontWeight={"600"} color={"brand.500"} size="lg">
              {postDetails.title}
            </Heading>
            <Text textAlign={"justify"} py="2" fontSize={"md"} >
              {postDetails.content}
            </Text>
          </CardBody>

          <CardFooter mt={{ base: 0, lg: 2 }} px={{ base: 2, lg: 3 }}>
            <LinkBox
              as={Button}
              variant="outline"
              color="brand.900"
              _hover={{bgColor:"#f08e80"}}
            >
              <LinkOverlay  href={postDetails.href}>अधिक पढ़े</LinkOverlay>
            </LinkBox>
          </CardFooter>
        </Stack>
      </Card>
    </Container>
  );
};

export default ReadMorePost;
