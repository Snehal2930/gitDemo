import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReadMorePost from "../components/ReadMorePost";
import { Box, Container, Text } from "@chakra-ui/react";
import BreadCrumbCom from "../components/BreadCrumbCom";

const Posts = [
  {
    image: require("../assets/images/inspire-and-support/bansi gir gaushala.jpg"),
    title: "बंसी गीर गौशाला",
    content:<Text>
    बंसी गीर गौशाला को २००६ में श्री गोपालभाई सुतारिया द्वारा भारत की प्राचीन वैदिक संस्कृति को पुनर्जीवित, पुनः स्थापित करने और फिर से स्थापित करने के प्रयास के रूप में स्थापित किया गया था। वैदिक परंपराओं में, गाय को दिव्य माता, गोमाता या गौमाता के रूप में प्रतिष्ठित किया गया था, और जो स्वास्थ्य, ज्ञान और समृद्धि को बढ़ावा देती है। संस्कृत में, "गो" शब्द का अर्थ "लाइट" भी है।<br/><br/> लेकिन जैसे-जैसे समय बीतता गया और मानवता ने डार्क एज ("कलियुग") में प्रवेश किया, इस ज्ञान का अधिकांश हिस्सा खो गया। आधुनिक समय में, गौमाता मानव लालच का शिकार हो गई है।</Text>,
    href: "https://www.bansigir.in/",
  },
 
 
  {
    image: require("../assets/images/inspire-and-support/gotirth.jpg"),
    title: "गोतीर्थ विद्यापीठ",
    content:"प्राचीन भारत का शिक्षा-दर्शन धर्म से ही प्रभावित था। शिक्षा का उद्देश्य धर्माचरण की वृत्ति जाग्रत करना था। शिक्षा, धर्म, अर्थ, काम और मोक्ष के लिए थी। इनका क्रमिक विकास ही शिक्षा का एकमात्र लक्ष्य था। धर्म का सर्वप्रथम स्थान था। धर्म से विपरीत होकर अर्थ लाभ करना मोक्ष प्राप्ति का मार्ग अवरुद्ध करना था। मोक्ष जीवन का सर्वोपरि लक्ष्य था और यही शिक्षा का भी अन्तिम लक्ष्य था।",
    href: "https://www.gotirthvidyapeeth.in/",
  },
  {
    image: require("../assets/images/inspire-and-support/sidha kisan se.jpg"),
    title: "सीधा किसान से",
    content:
      "आधुनिक समय में, किसान एक ही स्तर की समृद्धि और सामाजिक स्थिति का आनंद नहीं लेते हैं जो उन्होंने एक बार प्राचीन भारत में किया था। उन दिनों, लोग अधिकतम में विश्वास करते थे, 'उत्तम खेति, मधयम वायपर, कनिष्ठ नौकरी', अर्थात् व्यवसायों के बीच खेती सबसे अच्छी है, व्यापार और अंत में सेवा या रोजगार। हालांकि, तथाकथित आधुनिक 'नॉलेज इकोनॉमी' के आगमन के साथ, यह कहावत वर्तमान में सभी व्यवसायों के कम से कम पारिश्रमिक मानी जाने वाली खेती के साथ उलट गई है। हमें लगता है कि यह एक गंभीर गलती है जिसे तत्काल सुधारने की आवश्यकता है।",
    href: "https://www.sidhakisanse.com/",
  },
];

export default function InspireSupport() {
  return (
    <>
      <Navbar />

     
      {/* <Container maxW={"container.xl"} mb={4} px={0}>
        <Box
          w={"100%"}
          bgImage="https://forntend-bucket.s3.ap-south-1.amazonaws.com/dsose/organic-living/inspire and support.jpg"
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
            color={"brand.500"}
            textAlign={"center"}
            textShadow={"lightgreen"}
            fontSize="6xl"
            fontWeight="700"
          >
            Inspire & Support
          </Text>
        </Box>
      </Container> */}
      <Container maxW={"6xl"} py={4}>
        {Posts.map((postDetails) => (
          <ReadMorePost postAlign="horizontal" postDetails={postDetails} />
        ))}
      </Container>
      <Footer />
    </>
  );
}
