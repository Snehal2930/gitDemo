import React from "react";
import Footer from "../components/Footer";
import BreadCrumbCom from "../components/BreadCrumbCom";
import Navbar from "../components/Navbar";
import {
  Box,
  Container,
  VStack,
  Image,
  Text,
  Heading,
  GridItem,
  Grid,
  Flex,
  Link,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { FaRegFilePdf } from "react-icons/fa";

const Howtouse = () => {
  const pdf = [
    {
      id: 1,
      title: "केसे उपयोग करे (हिन्दी मे)",
      href:"/pdf/Go-Krupa-Amrutam-Leaflet-Hindi.pdf",
      download:"Go-Krupa-Amrutam-Leaflet-Hindi.pdf"
    },
    {
      id: 2,
      title: "केसे उपयोग करे (गुजराती मे)",
      href:"/pdf/Go-Krupa-Amrutam-Leaflet-Gujarati.pdf",
      download:"Go-Krupa-Amrutam-Leaflet-Gujarati.pdf"
    },
    {
      id: 3,
      title: "केसे उपयोग करे (अँग्रेजी मे)", 
      href:"/pdf/Go-Krupa-Amrutam-Leaflet-English.pdf",
      download:"Go-Krupa-Amrutam-Leaflet-English.pdf"
    },
    {
      id: 4,
      title: "केसे उपयोग करे (कन्नड़ मे)",
      href:"/pdf/gokrupa_Kanadda.pdf",
      download:"gokrupa_Kanadda.pdf"
    },
    {
      id: 5,
      title: "केसे उपयोग करे (मराठी मे)",
      href:"/pdf/gokrupa_Marathi.pdf",
      download:"gokrupa_Marathi.pdf"    },
    {
      id: 6,
      title: "केसे उपयोग करे (असमिया मे)",
      href:"/pdf/gokrupa_Assamese.pdf",
      download:"gokrupa_Assamese.pdf"    },
    {
      id: 7,
      title: "केसे उपयोग करे (तमिला मे)",
      href:"/pdf/Gokrupa_Tamil.pdf",
      download:"Gokrupa_Tamil.pdf"    },
    {
      id: 8,
      title: "केसे उपयोग करे (बंगाली मे)",
      href:"/pdf/Gokrupa_Bengali.pdf",
      download:"Gokrupa_Bengali.pdf"    },
    {
      id: 9,
      title: "केसे उपयोग करे (पंजाबी मे)",
      href:"/pdf/Gokrupa_Punjabi.pdf",
      download:"Gokrupa_Punjabi.pdf"    },
    {
      id: 10,
      title: "केसे उपयोग करे (मलयालम मे)",
      href:"/pdf/Go-Krupa_Amrutam_Leaflet_Malayalam.pdf",
      download:"Go-Krupa_Amrutam_Leaflet_Malayalam.pdf"    },
  ];
  let { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const IsMobileView = searchParams.get("mobile") ?? "false";




      


  return (
    <>
      {IsMobileView !== "true" && <Navbar />}
      {/* <Container maxW={"container.xl"} alignContent={"flex-start"}>
  <BreadCrumbCom second={"About Us"} secondUrl={"/about-us"} />{" "}
</Container> */}
      <Container maxW={"6xl"} my={10}  centerContent>
        <Flex mb={12} flexDirection={"column"}>
          <Text
            textAlign={"start"}
            fontWeight={700}
            color={"brand.500"}
            fontSize={"27px"}
            my={7}
          >
            गो-कृपा कृषि पद्धति - ५ सरल और सहज चरणों में
          </Text>

          <Box
           
            textAlign={{ base: "justify", md: "start" }}
          >
            <Text fontSize={"18px"}>
              वेदों में स्पष्ट कहा है की जैसी गौमाता की स्थिति वैसी ही हमारी
              स्थिति। आज हम महसूस कर रहे हैं कि भारत में जिन घरों में गौमाता को
              सुख पूर्वक रखा जाता है वहां की स्थिति कुछ अलग ही होती है। बहुत
              सूक्ष्म दृष्टि से अभ्यास करने के बाद बहुत स्पष्ट दर्शन दिखता है कि
              गौमाता का सच्चा घर किसान का घर है। हमारे गुरुदेव ने स्पष्ट कहा था
              गाय और किसान दुखी रहेंगे तो देश कभी खुश नहीं रह सकता। खेती को बहुत
              सहज स्वरूप में कैसे किया जाए वह बहुत चिंतन करने के बाद पूरी उसकी
              एक सरल पद्धति जो ५ चरणों में सरलता से कोई भी किसान कर सकता है वह
              स्वरूप में हमने लाने का प्रयास किया है। जैसे गो-कृपा अमृतम गाय
              माता का प्रसाद है वैसे ही इस पद्धति का नाम भी गो-कृपा कृषि पद्धति
              ही रखा है।.
              <br />
              <br />
            </Text>
            <Heading fontSize={"24px"} mb={7}>
              पहला चरण :- गो-कृपा अमृतम कैसे बनाना है?
            </Heading>
            <Text fontSize={"18px"}>
              मित्रों हमारे शिबीर में से अगर आपने गो-कृपा अमृतम की बोतल प्राप्त
              की है या कहीं और से लिया हो तो पहले देखें कि इस बोतल में छेद है कि
              नहीं। अगर छेड़ है तो आपके पास गुणवत्ता युक्त मधर कल्चर पहुंचा है।
              <br />
              <br />• पहले चरण में आपको २०० लिटर पानी का ड्रम लेना है। ड्रम एकदम
              साफ होना चाहिए। अंदर कोई तेल या केमिकल कुछ लगा नहीं होना चाहिए।
              अच्छे से साफ करके ड्रम में २०० लिटर पानी भर देना है।
              <br />
              <br />
              • एक बाल्टी में थोड़ा पानी लेकर उसमें २ किलो गुड़ मिलाकर गुड़ का
              पानी बनाकर वह २०० लिटर में डाल देना है.
              <br />
              <br />
              • देसी गाय की २ लिटर देसी गोमाता से प्राप्त हुई ताजी छाछ डालें।
              इसे ड्रम में डाल दें।
              <br />
              <br />• ड्रम आपको किसी पेड़ की छांव के नीचे रख देना है। उसे सूती
              कपड़े से ढक देना है ताकि अंदर कोई जीव न पड़े। अगर कोई पेड़ नहीं है
              तो ग्रीन नेट के नीचे रख सकते हैं। परंतु वर्षा ऋतु में इसे बारिश के
              पानि से बचा कर रखना है।
              <br />
              <br />
              • साफ-सुथरे लकड़े से रोज दो-चार मिनट हिलाएँ। ६ से ७ दिन में आपका
              गो-कृपा अमृतम तैयार हो जाएगा।
              <br />
              <br />
              कितना सरल है ना मित्रों? और यह तो जामन हो गया, जामन कभी खतम होता
              है क्या? जैसे दहि के जामन से आप और अधिक दहि बना सकते हैं वैसे ही
              इस जामन के उपयोग से आप और गो-कृपा अमृतम बना सकते हैं। आप को और
              गो-कृपा अमृतम का द्रावण तयार करने के लिए केवल गुड और देसी गोमाता
              की छाछ की आवश्यकता होगी। आप यह जामन में से दूसरे किसानों को भी दे
              सकते हैं।
              <br />
              <br />
              अगर आपको हर रोज इसे हिलाने में दिक्कत हो रही है तो मछली घर में हवा
              छोड़ने वाला २०० से ३०० रुपये का एक छोटा सा मशीन आता है। इसे ड्रम
              पर लगा देंगे तो एक हफ्ते से कम समय में भी गो- कृपा अमृतम कल्चर
              तैयार हो सकता है।
              <br />
              <br />
              ईस ड्रम में से गो-कृपा अमृतम उपयोग करते करते सिर्फ १० लिटर जब बचता
              है तो वापस अंदर २०० लिटर पानी भर के २ किलो गुड़ का पानी और २ लिटर
              देसी गोमाता से प्राप्त हुई ताजी छाछ वापस डाल देंगे तो पुनः एक
              हफ्ते में वह २०० लिटर बन जाएगा।
              <br />
              <br />
              ऐसे निरंतर यह प्रक्रिया चलती ही जाएगी। अगर आपने उसमें से कोई मित्र
              को १ या २ लिटर गो-कृपा अमृतम दिया तो बॉटल के ढक्कन के ऊपर छेद करके
              ही देना है ताकि उसमें हवा आती जाती रहे।
              <br />
              <br />
              गो-कृपा अमृतम साल में ४ बार रंग बदलता है। कभी पुराना हो गया तो हरा
              रंग हो सकता है, फिर थोड़ा काला रंग भी पड़ सकता है, लेकिन गुण नहीं
              बदलता है तो चिंता का विषय नहीं है। कभी अंदर छोटे-मोटे कीड़े भी पड़
              सकते हैं तो उसको छान के खेत में उपयोग कर सकते हैं।
              <br />
              <br />
              इस द्रावण का ७ दिन के बाद उपयोग कर सकते है, १ महीने के बाद कर सकते
              है, २ महीने, ६ महीने, हमने तो १ साल पुराना भी उपयोग करके देखा है,
              इसकी प्रभावशीलता कम नहीं होती है। लेकिन एक महीना अगर कोई पेड़ के
              नीचे पड़ा रहा है तो आपको एक डेढ़ महीने के बाद उसमे 1 किलो गुड और १
              लिटर देसी गोमाता की छाछ डाल देना है ताकि उसे खुराक मिलता रहे।
              <br />
              <br />
              उसकी खुशबू थोड़ी अलग अलग हो सकती है लेकिन गुण बदलता नहीं है। कभी
              कभी उस में बुलबुले भी आ सकते हैं। ऊपर हल्की सी जारी भी हो सकती
              हैं। अगर जारी न भी हो तो भी चिंता का विषय नहीं है, क्यूँ की उसका
              गुण बदलता नहीं है।
              <br />
              <br />
              अगर आपको परिणाम नहीं मिले तो हमारा अवश्य संपर्क करें।
              <br />
              <br />
            </Text>
            <Heading fontSize={"24px"} mb={7}>
              दूसरा चरण :- गो-कृपा अमृतम से देसी गाय का गोबर कंपोस्ट करने की
              विधि
            </Heading>
            <Text fontSize={"18px"}>
              अगर आप के पास १००० किलो गोबर है, तो उसमें थोड़ी सी गाय के नीचे से
              थोड़ी सी गो मिट्टी भी ले सकते हैं और गोमूत्र भी उसके अंदर मिला सकते
              हैं।
              <br />
              <br />
              अब इस १००० किलो (या आप के पास जितना भी गोबर हो) गोबर की २ फीट ऊंची
              और २ फीट चौढ़ी लंबी लाइन कर दीजिए। इस लाइन के ऊपर बांबू से अलग-अलग
              जगह पर थोड़े छेद बना दीजिए और ऊपर २० से लेकर के २५ लिटर गो-कृपा
              अमृतम छिड़क दीजिए और हर रोज या हर दो-तीन दिन उसको गिला करते रहिए।
              या आप इसके ऊपर ड्रिप भी लगा सकते हैं। और यह कोई पेड़ की छांव में
              आपको लाइन लगानी है या फिर ग्रीन नेट लगाकर के नीचे रख सकते हैं।
              सिर्फ ३० से ४५ दिन में उत्तम गुणवत्ता वाला खाद बन जाएगा।
              <br />
              <br />
              अगर उससे जल्दी भी आपको चाहिए तो उसको खाप लगा कर के थोड़ा गो-कृपा
              अमृतम वापस अंदर डालते जाइए उलट-पुलट कर देंगे तो २५ दिन में भी
              उपयोग करने के लायक बन जाएगा। उसका उसके साथ में आपके खेत का कोई और
              भी कचरा भी डालेंगे तो वह भी इसके साथ में अच्छे से कमपोस्ट हो
              जाएगा। गोबर के अंदर १२०० से अधिक कम्पाउण्ड होते हैं और गोमूत्र के
              अंदर ५१०० से अधिक कम्पाउण्ड होते हैं। यह खाद ठंडी प्रक्रिया से
              बनेगा जिसके परिणाम स्वरूप बहुत ही सरलता से सुपाच्य स्वरूप में
              माइक्रोनेशन बने रहेंगे।
              <br />
              <br />
              हम एक अकड़ ज़मीन के लिए एक गौमाता रखने की सलाह देते हैं। एक गौमाता
              वर्ष में कम से कम ४ टन गोबर देती है और ८००० लिटर गोमूत्र देती है।
              अगर कहीं छोटी नस्ल की गाय है तो 2 गाय का गोबर लेना है तो यही हो
              जाएगा और यह कंपोस्ट तैयार होने के बाद छांव में ही रखना है।
              <br />
              <br />
              अभी आपको खेत में चास में डालना है। चास में डालेंगे तो आजू बाजू की
              खरपतवार को खाद्य नहीं मिलेगा वह धीरे-धीरे कंट्रोल होंगे और जिसको
              चाहिए उसी को खाद मिलेगा। बारिश के पहले या बुवाई के पहले जब भी आप
              डालते हैं तो १० से १५ दिन पहले ही डाल कर रख सकते हैं। थोड़ी मिट्टी
              भी उसके पर लगा सकते हैं, धूप में खुला छोड़ने से उसकी गुणवत्ता कम
              होने लगती है, काफी कंपाउंड चले जा सकते हैं। इसीलिए नम्र विनंती है
              कि पूरी प्रक्रिया का सही तरीके से अनुकरण करें।
              <br />
              <br />
              चाहे आपने मूंगफली उगाई हो या मूंग दाल उगाई हो उसके पत्ते और
              खरपतवार को मिला कर कम से कम एक एकर में एक गाय तो पल ही सकती है,
              चाहे वह दूध देती हो या नहीं।
              <br />
              <br />
            </Text>

            <Heading fontSize={"24px"} mb={7}>
              तीसरा चरण :- गो-कृपा अमृतम खेत में कितना डालना है?
            </Heading>
            <Text fontSize={"18px"}>
              किसान भाइयों प्रति एकड़ पहली बार १००० लिटर पानी के साथ बहा देना है
              चाहे कोई भी क्रॉप आपने लगाया हो। पहली बार थोड़ा ज्यादा बहाना है
              लेकिन इसके द्वारा २० से ३० साल से भी पुरानी यूरिया की जो परत जमी
              हुई होगी बैक्टीरिया उसे तोड़ कर पूरी भूमि को नरम बनाना चालू कर
              देंगे। उसके बाद में हर पानी में ६०० लिटर प्रति एकड़ बनाकर बहा देना
              है।
              <br />
              <br />
              मतलब महीने में दो से तीन बार ६०० लिटर बहा देना है। अगर आप ड्रिप
              में देते हैं तो प्रति दिन १०० लिटर जितना जा सकते हैं।
              <br />
              <br />
              खेत में डालना बहुत सरल है मित्रों। इसको ड्रिप में भी वेंचुरी लगा
              कर के आप दे सकते हैं, स्प्रिंकलर में भी फवारे में भी बहुत सरलता से
              उपयोग वेंचुरी के द्वारा हो सकता है। फ़्लड इरीगेशन मतलब धोरीये में
              सीधा बाहते है पानी उसमें भी आप चकली चालू करके सीधा ड्रम में से बहा
              सकते हैं पानी के साथ। कितना सरल है ना?
              <br />
              <br />
            </Text>

            <Heading fontSize={"24px"} mb={7}>
              चौथा चरण :- किट नियंत्रक के रूप में इसका कैसे उपयोग करें?
            </Heading>
            <Text fontSize={"18px"}>
              २ लिटर गो-कृपा अमृतम लेकर के बाकी १३ लिटर पानी ऐसे करके पानी का
              पंप तैयार करें। लगभग एक एकड़ में १०-१५ पम्प, जैसी आपकी जरूरत उस
              हिसाब से हर हफ्ते डाल देना है। अगर आपका कोई फसल जटिल है जैसे भिंडी
              है मिर्ची है, उसमें हर दो-तीन दिन में केमिकल का उपयोग होता है।
              उसकी जगह पर हर दो-तीन दिन पर गो-कृपा अमृतम का स्प्रे कर देना है।
              <br />
              <br />
              इसको कौनसे भी स्टेज पर डाला जा सकता है। जैसे अभी बुवाई हुई है उससे
              पहले इस को बीज के पड देने में भी उपयोग कर सकते हैं, बीज संस्कार
              में भी चल सकता है, बुवाई के समय भी चलेगा, ५ दिन के फसल पर भी
              चलेगा, १५ दिन की फसल, फ्लावरिंग स्टेज, फल का स्टेज, कटिंग का
              स्टेज, कभी भी किसान मित्र डाल सकते हैं। इसके कोई साइड इफेक्ट नहीं
              है। यह बहुत सरल गाय माता का आशीर्वाद है कि आप कौन से भी स्टेज में
              कभी भी डाल सकते हैं।
              <br />
              <br />
              कभी कबार आपके फसल में बहुत फंगस लगी है या पत्ते के ऊपर वायरस लगा
              हुआ है तो यह छिड़कने से शायद पत्ते कोई कोई मुरझा जाए, तो वापस
              उसमें से नए पत्ते आएंगे। तो वह चिंता का विषय नहीं है। इसके बारे
              में आप हमें संपर्क करके भी पूछ सकते हैं।
              <br />
              <br />
            </Text>

            <Heading fontSize={"24px"} mb={7}>
              पंचवा चरण :- आपातकालीन किट नियंत्रण
            </Heading>
            <Text fontSize={"18px"}>
              कभी-कभी कोई फसल में बहुत जटिल रोग आ जाते हैं जो सिर्फ २ लिटर
              गो-ग्रुप अमृतम से नहीं जा रहे हैं तो एक आपको आपातकालीन मतलब
              इमरजेंसी में उपयोग करने की विधि हम बताते हैं। आपके खेत में कहीं
              मटके में या ड्रम के अंदर देसी गोमाता से प्राप्त हुई छाछ भर के रख
              दीजिए, उसको पुरानी होने दीजिए। यह छाछ जब भी डालते हैं तभी उसके
              अंदर तांबे के टुकड़े (कॉपर) डाल दीजिये। कोई भंगार में से भी ला
              करके या कहीं से भी कॉपर के थोड़े टुकड़े डाल दीजिए तो उसके गुण छाछ
              में आ जाएंगे। ४५ दिन से ज्यादा पुरानी छाछ हो जाती है तो उसके गुण
              बदल जाते हैं।
              <br />
              <br />
              ४५ दिन के बाद द्रावण तैयार हो जाएगा। तो करना क्या है - १५ लिटर के
              पम्प में २ लिटर यह पुरानी छाछ लेनी है, २ लिटर गो-कृपा अमृतम लेना
              है और २ लिटर ताजा गोमूत्र लेना है। याद रखना मित्रों गोमूत्र पुराना
              नहीं लेना है, ताजा गोमूत्र ही लेना है। और बाकी का ९ लिटर पानी यह
              मिला के पहले २५ या १० पौधे पर डाल कर देख लीजिए। आपको निश्चित
              परिणाम दिखने लगेगा और बाद में पूरे खेत में उपयोग कर सकते हैं।
              <br />
              <br />
            </Text>
          </Box>
          <Text fontSize={"3xl"} fontWeight={500}>
            गौ कृपा अमृतम (बेकटेरियल कल्चर)
          </Text>
          <Text fontSize={"18px"}>
            गो-कृपा अमृतम बैक्टीरियल कल्चर बंसी गिर गौशाला द्वारा पंचगव्य
            उत्पादों और पूरी तरह से प्राकृतिक और आयुर्वेदिक जड़ी-बूटियों से
            विकसित किया गया है। यह हमारे व्यापक अनुसंधान और प्रयोग का परिणाम है।
            इस संस्कृति में अनुकूल बैक्टीरिया के 40 से अधिक उपभेद हैं जो पौधे के
            विकास और प्रतिरक्षा को बढ़ाते हैं। कृपया हिंदी, गुजराती और अंग्रेजी
            में अधिक विवरण डाउनलोड करने के लिए नीचे क्लिक करें।
          </Text>
        </Flex>

        <Grid
          templateColumns={{
            xl: "repeat(3, 1fr)",
            md: "repeat(2, 1fr)",
            base: "repeat(1, 1fr)",
          }}
          gap={6}
          my={6}
         
        >
        {pdf.map((data)=>(
        <GridItem border={"1px"} p={35} as={Link} href={data.href} download={data.download} >
          
         <Flex flexDirection={"column"} alignItems={"center"} gap={7}>
          <FaRegFilePdf fontSize={"3.5rem"} style={{color:"#f08e80"}} />
          <Text fontWeight={600} fontSize={"24px"} color={"text.300"}>
          {data.title}
          </Text>
          </Flex>
        </GridItem>
        ))}
        </Grid>
      </Container>
      {IsMobileView !== "true" && <Footer />}
    </>
  );
};

export default Howtouse;