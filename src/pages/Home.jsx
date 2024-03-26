import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import CarouselWithLinks from "../components/CarouselWithLinks";
import { LazyLoadImage } from "react-lazy-load-image-component";

import ProductListSection from "../components/ProductListSection";
import {
  Container,
  Flex,
  Image,
  Heading,
  Stat,
  StatNumber,
  StatHelpText,
  SimpleGrid,
  Box,
  Link,
  Center,
  useMediaQuery,
  Text,
  Grid,
  GridItem,
  LinkBox,
  LinkOverlay,
  useBreakpointValue,
  Card,
  Skeleton,
  Button,
} from "@chakra-ui/react";
import client from "../setup/axiosClient";
import CheckOrSetUDID from "../utils/checkOrSetUDID";
import { useNavigate, NavLink as RouterLink } from "react-router-dom";
import { ChevronRightIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import Testimonials from "../components/testimonials";

const banner = [
  {
    id: 11,
    alt_text: "Image2",
    image: require("../assets/images/HomePage/banners/Gau Krupa amrutam Home page.jpg"),
    display_status: true,
    image_url: null,
  },
  {
    id: 12,
    alt_text: "Image3",
    image: require("../assets/images/HomePage/banners/banner 2.png"),
    display_status: true,
    image_url: null,
  },
  {
    id: 13,
    alt_text: "Image3",
    image: require("../assets/images/HomePage/banners/gaukrupa_banner_1.jpg"),
    display_status: true,
    image_url: null,
  },
  {
    id: 14,
    alt_text: "Image3",
    image: require("../assets/images/HomePage/banners/gaukrupa_banner_3.jpg"),
    display_status: true,
    image_url: null,
  },
  {
    id: 15,
    alt_text: "Image3",
    image: require("../assets/images/HomePage/banners/gaukrupa_banner_4.jpg"),
    display_status: true,
    image_url: null,
  },
  {
    id: 12,
    alt_text: "Image3",
    image: require("../assets/images/HomePage/banners/gaukrupa_banner_5.jpg"),
    display_status: true,
    image_url: null,
  },
  {
    id: 12,
    alt_text: "Image3",
    image: require("../assets/images/HomePage/banners/gaukrupa_banner_6.jpg"),
    display_status: true,
    image_url: null,
  },
  {
    id: 12,
    alt_text: "Image3",
    image: require("../assets/images/HomePage/banners/gaukrupa_banner_7.jpg"),
    display_status: true,
    image_url: null,
  },
  {
    id: 12,
    alt_text: "Image3",
    image: require("../assets/images/HomePage/banners/gaukrupa_banner_8.jpg"),
    display_status: true,
    image_url: null,
  },
  {
    id: 12,
    alt_text: "Image3",
    image: require("../assets/images/HomePage/banners/gaukrupa_banner_9.jpg"),
    display_status: true,
    image_url: null,
  },
];

const gridItemsData = [
  {
    imageSrc: require("../assets/images/HomePage/our_work1.jpg"),
    title: "नंदी गीर योजना",
    description: "भारतीय गीर नस्ल के सुधार के लिए, गोशाला इस योजना के तहत अन्य विश्वसनीय गोशालाओं और गांवों को नंदी निःशुल्क प्रदान करती है।",
    link: "/activities"
  },
  {
    imageSrc: require("../assets/images/HomePage/our_work2.jpg"),
    title: "जिंजवा घास योजना",
    description: "जिंजवा घास भारतीय गोवंश को बहुत प्रिय है। बंसी गीर गोशाला में इछूक किसानों के लिए जिंजवा घास के पौध की निःशुल्क व्यवस्था की जाती है।",
    link: "/activities"
  },
  {
    imageSrc: require("../assets/images/HomePage/our_work3.jpg"),
    title: "गो आधारित प्राकृतिक खेती और प्रशिक्षण",
    description: "हर दिन भारत के विभिन्न क्षेत्रों से किसान बंसी गीर गोशाला आते हैं और गोपालन और गो-कृषि के बारे में निःशुल्क ज्ञान अथवा प्रशिक्षण प्राप्त करते हैं।",
    link: "/activities"
  },
  {
    imageSrc: require("../assets/images/HomePage/botal copy.jpg"),
    title: "गौ कृपा अमृतम बेकटेरियल कल्चर",
    description: "गो-कृपा अमृतम बैक्टीरियल कल्चर बंसी गीर गोशाला द्वारा पंचगव्य और और आयुर्वेदिक औषधि के उपयोग से बनाया गया बेकटेरियल कल्चर है जो कृषि में अत्यंत उपयोगी सिद्ध हुआ है।",
    link: "/activities"
  }
];

export default function Home() {
  const [isFullScreen] = useMediaQuery("(min-width: 768px)");
  const width = useBreakpointValue({ base: "100%", lg: "100%" });
  const height = useBreakpointValue({ base: "300", lg: "400" });
  const [banners, setBanners] = useState(banner);
  const [loading, setLoading] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 480px)");
  const [homeData, setHome] = useState({});
  // let [isFull] = useMediaQuery("(max-width:1920px)");
  const [blogs, setBlogs] = useState([]);
  const isMobiles = width <= 768;
  const navigate = useNavigate();
  useEffect(() => {
    CheckOrSetUDID();
    getHomePageData();
    getBlogs();
  }, []);

  async function getHomePageData() {
    const response = await client.get("/home");
    if (response.data.status === true) {
      // setBanners(response.data.banners);
      setHome(response.data);
    }
    // setLoading(false);
  }
  async function getBlogs() {
    const params = {};
    const response = await client.get("/home/blogs/", {
      params: params,
    });
    if (response.data.status === true) {
      setBlogs(response.data.blogs);
    }
  }

  return (
    <>
      {/* {loading === true ? (
        <Center h="100vh" w="100vw" backgroundColor={"bg.500"}>
          <Loader site={true} />
        </Center>
      ) : (
        <> */}
      <Navbar />
      <Container maxW={"container.xl"} px={0}>
        {loading === true ? (
          <Skeleton h={489}></Skeleton>
        ) : (
          <Carousel banners={banners} />
        )}
      </Container>

      <Container maxW={"6xl"} mb={4} mt={2}>
        <Text
          fontSize={{ base: "xl", sm: "2xl", xl: "3xl" }}
          fontWeight={600}
          //bgColor={"bg.500"}
          textAlign={"center"}
          color="text.500"
          py={4}
          my={7}
        >
          गौ कृपा अमृतम (बेक्टीरियल कल्चर)
        </Text>
        <Text
          color={"text.300"}
          align={{ base: "justify" }}
          fontWeight={600}
          fontSize={{ base: "sm", lg: "lg" }}
          mb={4}
        >
          गो-कृपा अमृतम प्राकृतिक पंचगव्य और अन्य जड़ी-बूटियों के उपयोग से बनाया
          गया बेकटेरियल कल्चर है, जो हमारे विस्तृत अनुसंधान और परीक्षण का परिणाम
          है। यह कल्चर बंसी गीर गोशाला द्वारा किसानों को निःशुल्क दिया जा रहा
          है।
          {/* <Link
            fontWeight={700}
            color={"brand.500"}
            as={RouterLink}
            to={"/about-us"}
          >
            Read more
          </Link> */}
        </Text>
        <Text
          color={"text.300"}
          align={{ base: "justify" }}
          fontSize={{ base: "sm", lg: "lg" }}
        >
          वेदों में स्पष्ट रूप से कहा गया है की जैसी गोमाता की स्थिति वैसी हमारी
          स्थिति। हमारे गुरुदेव भी स्पष्ट रूप से कहते थे की जब तक गाय और किसान
          दुखी हैं तब तक देश कभी खुश नहीं रह सकता। बहुत विचार, अनुसंधान और
          परीक्षण के बाद, गुरु , गोविंद और गोमाता के आशीर्वाद से , हमने एक बहुत
          ही सरल और सस्ती पद्धति विकसित की है। हमारा विश्वास है कि यह पद्धति
          किसी भी किसान को आत्म-सम्मान के साथ सफलतापूर्वक खेती करने में सक्षम
          बनाएगी। इस विधि को गोमाता के प्रसाद यानि गो-कृपा अमृतम बेकटेरियल कल्चर
          की मदद से संभव बनाया गया है।
        </Text>
        <Text
          mt={4}
          fontWeight={700}
          align={{ base: "justify" }}
         
          fontSize={{ base: "sm", lg: "xl" }}
        >
          गो-कृपा अमृतम के लाभ (संक्षिप्त में) -
        </Text>
        <Text
          color={"text.300"}
          align={{ base: "justify" }}
          fontSize={{ base: "sm", lg: "lg" }}
          mt={2}
        >
          १) धरती में मित्र सुक्ष्म कीटाणुओं का संचार होता है - वनस्पति की रोग
          प्रतिकारक शक्ति और गुणवत्ता बढ़ती है। <br /> २) वनस्पति को धरती, गोमय
          और गोमूत्र से पोशक तत्व सरल सुपाच्य स्वरुप में उपलब्ध होते है और
          केचुओं की वृद्धि होती है। <br /> ३) धरती अधिक नरम बनती है - बारिश का
          पानी अधिक सोख लेती है - धरती में भूजल का प्रमाण बढ़ता है। <br />
          ४) किसान कम से कम खर्च कर के स्वाभिमान से गौ आधारित खेती कर सकता है।
        </Text>
      </Container>

      <Container maxW={"container.xl"} mb={5} centerContent>
        <LazyLoadImage
          src={require("../assets/images/HomePage/Gir Cycle.png")}
          alt=""
          style={{
            opacity: 1,
            transition: "opacity 0.7s",
            height: 750,
          }}
        />
        <Text
          color={"text.300"}
          align={{ base: "justify" }}
          px={{ base: 15, lg: 20 }}
          fontSize={{ base: "sm", lg: "2xl" }}
          mb={2}
        >
          गोमाता आधारित स्वस्थ और समृद्ध 'जीवन चक्र'
        </Text>
      </Container>

      <Container mb={5} px={0} maxW={"6xl"} centerContent>
        <LazyLoadImage
          src={require("../assets/images/gopalbhai_image.jpg")}
          alt=""
          style={{
            opacity: 1,
            transition: "opacity 0.7s", // Note the corrected syntax here
          }}
        />
        <Text
          color={"text.500"}
          align={{ base: "justify" }}
         
          fontSize={{ base: "sm", lg: "2xl" }}
          fontWeight={700}
          my={5}
        >
          हमारे संस्थापक - श्री गोपालभाई सुतारिया (बंसी गीर गोशाला)
        </Text>
        <Text
          color={"text.300"}
          align={{ base: "justify" }}
          fontSize={{ base: "sm", lg: "lg" }}
          fontWeight={500}
          mb={3}
        >
          हमारे संस्थापक श्री गोपालभाई सुतरिया ने अपना जीवन भारत की गोसंस्कृति
          को पुनर्जीवित करने के लिए समर्पित किया है। अपने आध्यात्मिक गुरुजी श्री
          परमहंस हंसानंदतीर्थ दंडीस्वामी के प्रभाव में , अपने जीवन में प्रारंभिक
          समय से वह राष्ट्र और मानवता की सेवा करने के लिए जीवन बिताने के अभिलाषी
          थे। वे इ .स. २००६ में अहमदाबाद आए और बंसी गीर गोशाला की स्थापना की।
        </Text>
        <Text
          color={"text.300"}
          align={{ base: "justify" }}
          fontSize={{ base: "sm", lg: "lg" }}
          fontWeight={500}
          mt={2}
        >
          गोपालभाई के प्रयासों के परिणामस्वरूप बंसी गीर गोशाला गोपालन और गोकृषि
          के क्षेत्र में प्रयोग, प्रशिक्षण और अनुसंधान का एक उत्कृष्ट केंद्र बन
          गई है। ‘स्वस्थ नागरिक, स्वस्थ परिवार, स्वस्थ भारत’ के उद्देश्य से,
          बंसी गीर गोशाला आयुर्वैदिक उपचार के क्षेत्र में प्रभावशाली अनुसंधान और
          निर्माण का कार्य भी कर रही है।
        </Text>
      </Container>

      <Container maxW="6xl" centerContent>
        <Heading
          color="brand.500"
          size="lg"
          mx="auto"
          align={"center"}
          mt={7}
          pb={"10px"}
        >
          बंसी गीर गोशाला की जानकारी
        </Heading>

        <Grid
          templateColumns={{
            md: "repeat(2, 1fr)",
            base: "repeat(1, 1fr)",
          }}
          gap={6}
          my={6}
        >
          <GridItem>
            <Image
              src={require("../assets/images/bansi-gir-gaushala.jpg")}
              w={"100%"}
            />
          </GridItem>
          <GridItem>
            <Text
              color={"text.300"}
              fontSize={"lg"}
              align={{ base: "justify" }}
            >
              गोपाल भाई सुतरिया और उनके छोटे भाई श्री गोपेशभाई सुतरिया बचपन से
              उनके गुरुजी श्री परमहंस हंसानंदतीर्थ दंडीस्वामी से अत्यंत प्रभावित
              थे। श्री राजीव दीक्षित जी के स्वदेशी अभियान से प्रेरित होकर २००६
              में यह दोनों भाई अहमदाबाद आए और बंसी गीर गोशाला की स्थापना की। कुछ
              साल बाद दोनों भाइयों ने पहले छात्र के रूप में अपने ४ बच्चों के साथ
              गोतीर्थ विद्यापीठ गुरुकुल की स्थापना की। जैसे जैसे समय बीतता गया,
              गोशाला बढ़ती गई और आज गोशाला में १८ गोत्रों से ६०० गोवंश की
              उपस्थिति है।
              <br />
              <br />
              पिछले १५ वर्षों से बंसी गीर गोशाला गोपालन, गो आधारित आयुर्वेद और
              गो आधारित कृषि के क्षेत्र में रचनात्मक बदलाव लाने में प्रयत्नशील
              है। बंसी गीर गोशाला की गतिविधियों से आज बड़ी संख्या में वैदिक
              विद्वान, कृषि वैज्ञानिक, आयुर्वेदाचार्य, संत-महात्मा, गो भक्त,
              किसान संगठन और अनेक सामाजिक संस्थाएं हृदय से जुड़े हुए हैं।
              <br />
              <br />
              बंसी गीर गोशाला के संस्थापक श्री गोपाल भाई सुतरिया और उनका समस्त
              परिवार इस अभियान में समर्पित हैं। परिवार और गोशाला से जुड़े लोगों
              का अटूट विश्वास है कि यह सब परिसर के वातावरण में <b>
                गुरुजी
              </b>{" "}
              श्री परमहंस हंसानंदतीर्थ दंडीस्वामी, <b>गोविंद</b> श्री कृष्ण और
              दिव्य <b>गोमाता</b>
              की ठोस उपस्थिति के कारण संभव हुआ है।
            </Text>
          </GridItem>
        </Grid>
      </Container>
      <Container maxW={"6xl"} my={5}>
        <Text
          color={"text.300"}
          fontSize={"2xl"}
          fontWeight={500}
          ml={5}
          align={{ base: "justify" }}
        >
          बंसी गीर गोशाला - योजनाए और गतिविधियां
        </Text>
        <Grid
  templateColumns={{
    md: "repeat(2, 1fr)",
    base: "repeat(1, 1fr)",
  }}
  gap={6}
  my={6}
>
  {gridItemsData.map((item, index) => (
    <GridItem key={index} as={Card} boxShadow={"xl"} p={5} gap={6}>
      <Image src={item.imageSrc} />
      <Text color={"text.500"} fontSize={"24px"} fontWeight={700}>
        {item.title}
      </Text>
      <Text color={"text.300"} fontSize={"19px"}>
        {item.description} <Link href={item.link}>(अधिक पढे)</Link>
      </Text>
    </GridItem>
  ))}
</Grid>
      </Container>

      <Container backgroundColor={"bg.500"} maxW={"container.xl"} py={5}>
        <Heading size={"lg"} color={"text.500"} textAlign={"center"}>
          गौ कृपा अमृतम का प्रभाव
        </Heading>
        <SimpleGrid
          columns={[2, 3, null, 4]}
          px={6}
          maxW={"container.xl"}
          my={6}
          backgroundColor={"bg.500"}
          align="center"
          spacingX={{ base: "10vw", md: "30px" }}
          spacingY="40px"
        >
          <Stat>
            <StatHelpText
              color="text.500"
              fontWeight={600}
              fontSize={{ base: "3xl", md: "xl" }}
            >
              सक्रिय राज्य
            </StatHelpText>
            <StatNumber color="gray.600" fontSize={{ base: "3xl", md: "xl" }}>
              २२+
            </StatNumber>
          </Stat>

          <Stat>
            <StatHelpText
              color="text.500"
              fontWeight={600}
              fontSize={{ base: "3xl", md: "xl" }}
            >
              फसल में सफल परिणाम
            </StatHelpText>
            <StatNumber color="gray.600" fontSize={{ base: "3xl", md: "xl" }}>
              ६०+
            </StatNumber>
          </Stat>

          <Stat>
            <StatHelpText
              color="text.500"
              fontWeight={600}
              fontSize={{ base: "3xl", md: "xl" }}
            >
              कृषि समुदाय
            </StatHelpText>
            <StatNumber color="gray.600" fontSize={{ base: "3xl", md: "xl" }}>
              ७,००,०००+
            </StatNumber>
          </Stat>
          <Stat>
            <StatHelpText
              color="text.500"
              fontWeight={600}
              fontSize={{ base: "3xl", md: "xl" }}
            >
              उपभोक्ताओं को लाभ
            </StatHelpText>
            <StatNumber color="gray.600" fontSize={{ base: "3xl", md: "xl" }}>
              ६,९१,७०,३७०+
            </StatNumber>
          </Stat>
          <Stat>
            <StatHelpText
              color="text.500"
              fontWeight={600}
              fontSize={{ base: "3xl", md: "xl" }}
            >
              जीवाणु की मात्रा / १ ग्राम मिट्टी (१९८० में)
            </StatHelpText>
            <StatNumber color="gray.600" fontSize={{ base: "3xl", md: "xl" }}>
              २ करोड़+
            </StatNumber>
          </Stat>
          <Stat>
            <StatHelpText
              color="text.500"
              fontWeight={600}
              fontSize={{ base: "3xl", md: "xl" }}
            >
              जीवाणु की मात्रा / १ ग्राम मिट्टी (वर्तमान काल)
            </StatHelpText>
            <StatNumber color="gray.600" fontSize={{ base: "3xl", md: "xl" }}>
              {" < ४० लाख"}
            </StatNumber>
          </Stat>
          <Stat>
            <StatHelpText
              color="text.500"
              fontWeight={600}
              fontSize={{ base: "3xl", md: "xl" }}
            >
              मित्रा जीवाणु की मात्रा / १ मिली गो-कृपा अमृतम
            </StatHelpText>
            <StatNumber color="gray.600" fontSize={{ base: "3xl", md: "xl" }}>
              २.६ लाख
            </StatNumber>
          </Stat>
          <Stat>
            <StatHelpText
              color="text.500"
              fontWeight={600}
              fontSize={{ base: "3xl", md: "xl" }}
            >
              गो-कृपा में विविध मित्र जीवाणुओं के प्रकार
            </StatHelpText>
            <StatNumber color="gray.600" fontSize={{ base: "3xl", md: "xl" }}>
              ५०+
            </StatNumber>
          </Stat>
          <Stat>
            <StatHelpText
              color="text.500"
              fontWeight={600}
              fontSize={{ base: "3xl", md: "xl" }}
            >
              जीवाणु की मात्रा / १ ग्राम मिट्टी (वर्तमान काल)
            </StatHelpText>
            <StatNumber color="gray.600" fontSize={{ base: "3xl", md: "xl" }}>
              {" < ४० लाख"}
            </StatNumber>
          </Stat>
          <Stat>
            <StatHelpText
              color="text.500"
              fontWeight={600}
              fontSize={{ base: "3xl", md: "xl" }}
            >
              गौ कृपा अमृतम कल्चर की क़ीमत
            </StatHelpText>
            <StatNumber color="gray.600" fontSize={{ base: "3xl", md: "xl" }}>
              ०.०० रुपए
            </StatNumber>
          </Stat>
          <Stat>
            <StatHelpText
              color="text.500"
              fontWeight={600}
              fontSize={{ base: "3xl", md: "xl" }}
            >
              गौ कृपा अमृतम - किसान को १ लीटर बनाने में खर्च
            </StatHelpText>
            <StatNumber color="gray.600" fontSize={{ base: "3xl", md: "xl" }}>
              ०.५० रुपए
            </StatNumber>
          </Stat>
          <Stat>
            <StatHelpText
              color="text.500"
              fontWeight={600}
              fontSize={{ base: "3xl", md: "xl" }}
            >
              गोमाता / एकड़ (अनुशंसित)
            </StatHelpText>
            <StatNumber color="gray.600" fontSize={{ base: "3xl", md: "xl" }}>
              १ गोमाता
            </StatNumber>
          </Stat>
        </SimpleGrid>
      </Container>
      <Container maxW={{ base: "100vw", md: "container.xl" }} my={9}>
        <Heading my={5} textAlign={"center"} fontSize={"32px"} color="text.500">
          संबद्धता
        </Heading>
        <Flex
          justifyContent="space-evenly"
          direction={{ base: "column", md: "row" }}
          align="center"
          gap={12}
          pt={1}
          pb={6}
        >
          <Image
            src={require("../assets/images/HomePage/GAAS_AFFILATION.jpg")}
            alt="ciolook-certificate"
            boxSize={150}
          />
        </Flex>
        <Flex
          bgColor={"bg.500"}
          py={"4%"}
          gap={{ base: 7 }}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          flexDirection={{ md: "row", base: "column" }}
          pl={{ base: 7 }}
        >
          <Flex flexDirection={"column"} gap={3}>
            <Heading fontSize={"2xl"} mb={{ base: 7 }}>
              इस मिशन से कौन जुड़ सकता है?
            </Heading>
            <Text fontSize={"lg"}>
              किसान. स्वयंसेवक . एनजीओ / ट्रस्ट . सामाजिक कार्यकर्ता . प्रभावक .{" "}
            </Text>
          </Flex>
          <Button
            variant={"outline"}
           color="text.500"
            borderColor={"text.500"}
            _hover={{ bgColor: "text.500",color:"white" }}
            p={8}
            fontSize={"xl"}
            onClick={() => navigate("/")}
            rightIcon={
              <ArrowForwardIcon
                bgColor={"brand.500"}
                color={"white"}
                borderRadius={"8px"}
              />
            }
          >
            रजिस्ट्रेशन
          </Button>
        </Flex>
      </Container>
      <Footer />
      {/* </>
      )} */}
    </>
  );
}
