import React from "react";
import Footer from "../components/Footer";
import BreadCrumbCom from "../components/BreadCrumbCom";
import Navbar from "../components/Navbar";
import { Box, Container, VStack, Image, Text, Heading } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const Activities = () => {
  let { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const IsMobileView = searchParams.get("mobile") ?? "false";
  return (
    <>
      {IsMobileView !== "true" && <Navbar />}
      {/* <Container maxW={"container.xl"} alignContent={"flex-start"}>
      <BreadCrumbCom second={"About Us"} secondUrl={"/about-us"} />{" "}
    </Container> */}
      <Container maxW={"6xl"} my={10} px={{xl:0,md:10,base:6}} centerContent>
        <VStack>
          <Box
            fontWeight={700}
            color={"brand.500"}
            fontSize={{md:"30px",base:"34px"}}
            alignContent={{md:"flex-start",base:"center"}}
            mb={7}
           
          >
            हमारी गतिविधियाँ - जो हमें विशेष बनाती है
          </Box>

          <Box
           
            textAlign={"justify"}
          >
            <Text fontSize={{md:"18px",base:"16px"}}>
              जन्माष्टमी 2019 से लॉकडाउन के पहले के समय दरम्यान हमें भारत के
              विविध राज्यो में जाकर सेंकड़ों नि:शुल्क शिबिर का आयोजन कर “गो-कृपा
              अमृतम” बैक्टीरिया का नि:शुल्क वितरण करके काफी किसानो को प्रशिक्षित
              किया है। आज यह कल्चर कम समय में भारत के १५ से अधिक राज्यो में
              लाखों किसानो के पास पहुंच चूका है। और किसानो को अच्छे परिणाम मिलने
              पर स्वयं किसान ही अन्य किसानो को नि:शुल्क आगे बांटते जा रहे है।
              <br />
              <br />
              बंसी गीर गोशाला की गतिविधियों से आज बड़ी संख्या में संत महात्मा,
              गो भक्त, वैदिक विद्वान, कृषि वैज्ञानिक, आयुर्वेदाचार्य और किसान
              संगठन हृदय से जुड़े हुए हैं। परिवार और गोशाला से जुड़े लोगों का
              अटूट विश्वास है कि यह सब परिसर के वातावरण में गुरुजी श्री परमहंस
              हंसानंदतीर्थ दंडीस्वामी, गोविंद श्री कृष्ण और दिव्यगोमाता की ठोस
              उपस्थिति के कारण संभव हुआ है।
              <br />
              <br />
              गोशाला विभिन्न वैदिक प्रतिमानों का परीक्षण करने के लिए एक जीवित
              प्रयोगशाला बन गई है, और गोपालन, आयुर्वेद, शिक्षा और कृषि के
              क्षेत्र में उल्लेखनीय परिणाम देखे गए हैं। बंसी गीर गोशाला का काम
              निम्नलिखित पहलुओं पर केंद्रित है।
            </Text>
            <br />
            <br />
            <Heading fontSize={"2xl"}>१ ) नंदी गीर योजना </Heading>
            <br />
            <Text fontSize={"18px"}>
              गोपालभाईके नेतृत्व में, बंसी गीर गोशाला ने घास की १००से अधिक
              स्थानीय किस्मों का अध्ययन किया है। इस अध्ययन में उनके पोषण मूल्य
              के साथ-साथ गोमाता के स्वाद और पसंदको भी ध्यान में रखा गया। इन में
              से कुछ सबसे पौष्टिक किस्में जो गोमाता द्वारा पसंद की जाती हैं,
              उनका उपयोग गोशाला में गोचर निर्माण के लिए किया गया है। इन में से
              सबसे महत्व के घास किसानो को गोचर निर्माण के लिए मुफ्त में दिये
              जाते हैं। ५,०००से अधिक किसानों ने इस योजना का लाभ उठाया है।
              गोशालाप्रकृतिक सूखे फ़ीड, नॉन-जीएमओ और पोषण के आयुर्वेदिक स्रोतों
              के उपयोग की पुरजोर से वकालत करती है।
            </Text>
            <br />
            <br />
            <Heading fontSize={"2xl"}>२) जिंजवा घास योजना </Heading>
            <br />
            <Text fontSize={"18px"}>
              गोपालभाईके नेतृत्व में, बंसी गीर गोशाला ने घास की १००से अधिक
              स्थानीय किस्मों का अध्ययन किया है। इस अध्ययन में उनके पोषण मूल्य
              के साथ-साथ गोमाता के स्वाद और पसंदको भी ध्यान में रखा गया। इन में
              से कुछ सबसे पौष्टिक किस्में जो गोमाता द्वारा पसंद की जाती हैं,
              उनका उपयोग गोशाला में गोचर निर्माण के लिए किया गया है। इन में से
              सबसे महत्व के घास किसानो को गोचर निर्माण के लिए मुफ्त में दिये
              जाते हैं। ५,०००से अधिक किसानों ने इस योजना का लाभ उठाया है।
              गोशालाप्रकृतिक सूखे फ़ीड, नॉन-जीएमओ और पोषण के आयुर्वेदिक स्रोतों
              के उपयोग की पुरजोर से वकालत करती है।
            </Text>
            <br />
            <br />
            <Heading fontSize={"2xl"}>३) गो आधारित कृषि का पुनरुद्धार</Heading>
            <br />
            <Text fontSize={"18px"}>
              गोपालभाई के मन में और कई गौ भक्तों के मन में हमेशा से यह सवाल रहा
              है कि गोमाता को किसानों के घर में वापस कैसे स्थापित किया जाए।
              मशीनीकृत रासायनिक आधारित खेती और गोचर में गिरावट के साथ, अधिकांश
              आधुनिक किसानों को न तो इस बात की जरूरत महसूस होती है और न ही
              गोमाता को रखने और उनके परिवार को पर्याप्त रूप से खिलाने की वित्तीय
              क्षमता होती है। गुरु, गोविंद और गोमाता के आशीर्वाद के साथ, कई
              वर्षों के अनुसंधान और प्रयोग के दौरान, बंसी गीर गोशाला में एक
              क्रांतिकारी प्रोबायोटिक जीवाणु कल्चरका विकास हुआ,जिसे 'गो-कृपा
              अमृतम' नाम दिया गया। इस जीवाणु कल्चर में ६०से अधिक विभिन्न प्रकार
              के लाभकारी बैक्टीरिया हैं और इन्हें गीर गोमाता की विशेष और दुर्लभ
              नस्लों के पंचगव्य और २०से अधिक अन्य जड़ी-बूटियों के उपयोग से
              विकसित किया गया है। यह बैक्टीरिया वनस्पति कोमिट्टी, गोमुत्र और
              गोमय से आवश्यक पोषक तत्वों को अवशोषित करने में मदद करते है। यह
              कल्चर विनाशकारी वायरस और कवक सहित बहोत सी वनस्पति में होती
              बीमारियों के इलाज में भी प्रभावी रही है। जुलाई २०१९में प्रक्षेपण
              होने के बाद, कुछ ही महीनों के अंतराल में गो-कृपा अमृतम को १३से
              अधिक राज्यों में ६०,०००से अधिक किसानों द्वारा अपनाया गया, जिसमें
              ४४से अधिक विभिन्न फसलों के प्रभावशाली परिणाम सामने आए। इस कल्चर का
              उपयोग करते हुए, एक ही मौसम के भीतर, कई किसान यूरिया और डीएपी या
              रासायनिक कीटनाशकों जैसे सिंथेटिक उर्वरकों को खरीदने पर एक पैसा
              खर्च किए बिना १००% गो आधारित कृषि कर पाये हैं। इससे भी महत्वपूर्ण
              बात, गो-कृपा अमृतम सभी किसानों को पूरी तरह से मुफ्त में दिया जा
              रहा है, इसका उपयोग करने के लिए नि:शुल्क प्रशिक्षण के साथ। इस कल्चर
              का उपयोग करके किसान दूध न देने वाली गोमाता भी रख सकते हैं जिनके
              गोमय और गोमूत्र का उपयोग गो-कृपा अमृतम आधारित खेती में होता है। जब
              प्रयोगशाला के अनुसंधान और गोशाला के खेतों में प्रारंभिक परीक्षणों
              से गो-कृपा अमृतम बेक्टीरियल कल्चर की उच्च कल्याणकरी क्षमता सिद्ध
              हुई,तो गोपालभाई, गोपेशभाई और उनके परिवार ने किसानों की पीड़ा कम
              करने के लिए इस कल्चर का व्यवसायीकरण नहीं करने का फैसला किया, और
              इसे गोमाताके आशीर्वाद के रूप में भारत के किसानो को निःशुल्क
              समर्पित करने का निर्णय लिया। गोपालभाई और उनके साथी गो-कृपा अमृतम
              का उपयोग करकेसम्पूर्ण गो आधारित कृषि पर किसानों को प्रशिक्षित करने
              के लिए भारत की यात्रा करते है। इस गतिविधि को गोशाला के परिसर में
              स्थित गोपेशभाई के कार्यालय द्वारा आर्थिक और प्रशासनिक रूप से
              समर्थन दिया जाता है। गो-कृपा अमृतम अब एक अजेय किसान आंदोलन बन गया
              है, और इस में न केवल गोपालभाई बल्कि उनके सहयोगी जैसे की भगत सिंह
              पुरोहित और कई किसान संगठन, धार्मिक संस्थाएं और कृषि विश्वविद्यालय
              शामिल हैं।
            </Text>
            <br />
            <br />
            <Heading fontSize={"2xl"}>
              ४) गो कृपा अमृतम बेकटेरियल कल्चर{" "}
            </Heading>
            <br />
            <Text fontSize={"18px"}>
              बंसी गीर गोशाला में एक क्रांतिकारी प्रोबायोटिक जीवाणु कल्चरका
              विकास हुआ,जिसे 'गो-कृपा अमृतम' नाम दिया गया। इस जीवाणु कल्चर में
              ६०से अधिक विभिन्न प्रकार के लाभकारी बैक्टीरिया हैं और इन्हें गीर
              गोमाता की विशेष और दुर्लभ नस्लों के पंचगव्य और २०से अधिक अन्य
              जड़ी-बूटियों के उपयोग से विकसित किया गया है। यह बैक्टीरिया वनस्पति
              कोमिट्टी, गोमुत्र और गोमय से आवश्यक पोषक तत्वों को अवशोषित करने
              में मदद करते है। यह कल्चर विनाशकारी वायरस और कवक सहित बहोत सी
              वनस्पति में होती बीमारियों के इलाज में भी प्रभावी रही है। जुलाई
              २०१९में प्रक्षेपण होने के बाद, कुछ ही महीनों के अंतराल में गो-कृपा
              अमृतम को १३से अधिक राज्यों में ६०,०००से अधिक किसानों द्वारा अपनाया
              गया, जिसमें ४४से अधिक विभिन्न फसलों के प्रभावशाली परिणाम सामने आए।
              इस कल्चर का उपयोग करते हुए, एक ही मौसम के भीतर, कई किसान यूरिया और
              डीएपी या रासायनिक कीटनाशकों जैसे सिंथेटिक उर्वरकों को खरीदने पर एक
              पैसा खर्च किए बिना १००% गो आधारित कृषि कर पाये हैं। इससे भी
              महत्वपूर्ण बात, गो-कृपा अमृतम सभी किसानों को पूरी तरह से मुफ्त में
              दिया जा रहा है, इसका उपयोग करने के लिए नि:शुल्क प्रशिक्षण के साथ।
              इस कल्चर का उपयोग करके किसान दूध न देने वाली गोमाता भी रख सकते हैं
              जिनके गोमय और गोमूत्र का उपयोग गो-कृपा अमृतम आधारित खेती में होता
              है। जब प्रयोगशाला के अनुसंधान और गोशाला के खेतों में प्रारंभिक
              परीक्षणों से गो-कृपा अमृतम बेक्टीरियल कल्चर की उच्च कल्याणकरी
              क्षमता सिद्ध हुई,तो गोपालभाई, गोपेशभाई और उनके परिवार ने किसानों
              की पीड़ा कम करने के लिए इस कल्चर का व्यवसायीकरण नहीं करने का फैसला
              किया, और इसे गोमाताके आशीर्वाद के रूप में भारत के किसानो को
              निःशुल्क समर्पित करने का निर्णय लिया। गोपालभाई और उनके साथी
              गो-कृपा अमृतम का उपयोग करकेसम्पूर्ण गो आधारित कृषि पर किसानों को
              प्रशिक्षित करने के लिए भारत की यात्रा करते है।
            </Text>
            <br />
            <br />
            <Heading fontSize={"2xl"}>५) गीर नस्ल का विकास </Heading>
            <br />
            <Text fontSize={"18px"}>
              जैसे-जैसे वर्ष बीतते गए, गोपालभाई ने १८ अलग-अलग गोत्रों से गीर
              गोमाता का अध्ययन किया और इनको इकट्ठा किया। नतीजतन, आज गोशाला एक
              ऐसा खजाना है जिसमें गीर गोमाता के लगभग हर विविधप्रकार शामिल हैं,
              जिनमें बहुत ही दुर्लभ और विशेष प्रकार जैसे कि स्वर्ण कपिला, श्वेत
              कपिला, कृष्ण कपिला आदि शामिल हैं। दूसरा, एक ही गोत्र में प्रजनन
              करना वेदों में निषिद्ध है।यहआधुनिक वैज्ञानिक दृष्टिकोण से भी
              महत्वपूर्ण है क्यू की इस बात का ध्यान रखना आनुवंशिक अखंडता और
              विविधता को संरक्षित करता है। जैसे-जैसे गोशाला बढ़ी है, बंसी गीर
              गोशाला ने गोमाता के दूध उत्पादन, प्रजनन क्षमता और जीवन प्रत्याशा
              में उल्लेखनीय प्रगति देखी है। यहप्राचीन वैदिक दर्शन और प्रथाओं के
              अनुरूप गोपालन के कारण संभव हुआ है।
            </Text>
            <br />
            <br />
            <Heading fontSize={"2xl"}>६) स्थानीय नस्लों का महत्व </Heading>
            <br />
            <Text fontSize={"18px"}>
              गोशाला ने भारत के सैकड़ों किसानों को बेहद उत्साहजनक परिणामों के
              साथ अपनी स्थानीय नस्लों पर ध्यान केंद्रित करने और विकसित करने के
              लिए प्रेरित किया है। सैकड़ों किसान और गो-भक्त गोमाता की सेवा करने
              की इच्छा के साथ हर साल प्रेरणा लेने और गोपालन सीखने बंसी गीर
              गोशाला आते हैं, परंतु उनका ध्यान आमतौर पर गीर नस्ल पर होता है।
              लेकिन गोपालभाई ने इन सभी को भारत की सभी स्थानीय नस्लों को विकसित
              करने के लिए गहन आध्यात्मिक और साथ ही साथ व्यावहारिक महत्व को
              समझाने का प्रयत्न किया है। गोमाता की ३६से अधिक स्थानीय नस्लों ने
              हमारी भूमि को अपनी उपस्थिती का आशीर्वाद दिया है, लेकिन देश में
              विदेशी आनुवंशिक पूल की आमद या गीर जैसी नस्लों से आधुनिक आकर्षण के
              कारण उनकी आबादी घट रही है। यह एक ऐसा विषय है, जो बंसी गीर गोशालाके
              सभी शैक्षिक अभियानों में केंद्रित है।
            </Text>
            <br />
            <br />
            <Heading fontSize={"2xl"}>
              ७) वैदिक गोपालन और दोहन का पुनरुद्धार
            </Heading>
            <br />
            <Text fontSize={"18px"}>
              गोशाला ने भारत के हजारों किसानों को दोहन के वैदिक प्रणाली को
              पुनर्जीवित करने के लिए प्रेरित किया है। गोचरकम होने के कारणऔर खेती
              और डेयरी के अलगाव से किसानों और डेयरियों के लिए गोमाता को रखना
              आर्थिक रूप से कठिन हो गया है। इससे दोहन की प्राचीन भारतीय प्रथा
              में गिरावट आई, जिसके तहत बछड़ा दो आँचलसे अपनी संतुष्टि से दूध पीने
              के लिए स्वतंत्र है, जबकि शेष दो आँचलका उपयोग मनुष्यों के लिए दूध
              प्राप्त करने के लिए किया जाता है। दोहन के पालन सेगोमाता की आने
              वाली पीढी और नस्ल और मजबूत होती है। दोहन गोमाता को संतुष्ट और
              प्रसन्न रखने में मदद करता हैं, जिससे उनके गव्य (दूध, दही, घी,
              गोमुत्र और गोमय) सही मायने में लाभकारी और मंगलकारी सिद्ध होते है।
            </Text>
            <br />
            <br />
            <Heading fontSize={"2xl"}>
              ८) गो आधारित आयुर्वेद का पुनरुद्धार{" "}
            </Heading>
            <br />
            <Text fontSize={"18px"}>
              गोशाला इस तथ्य का भी एक जीवित प्रदर्शन है कि वैदिक गोपालन और
              आयुर्वेद के बीच प्रभावी तालमेल से मानवता की शारीरिक पीड़ा दूर की
              जा सकती है और इसके साथ ही अरबों डॉलर बचाए जा सकते हैं जो आधुनिक
              विश्व रासायनिक आधारित दवाओं पर खर्च करता है। बंसी गीर गोशालाभारत
              के प्रमुख आयुर्वेदिक चिकित्सकों से जुड़ी हुई है, और उनके
              मार्गदर्शन और पर्यवेक्षण में कई पथ-प्रदर्शक दवाएं और पूरक विकसित
              किए हैं। हर दिन, गोशाला के गो आधारित आयुर्वेदिक क्लिनिक के मरीज
              अनिद्रा, बालों के झड़ने, जोड़ों में दर्द, ऊसरता, मासिक धर्म की
              अनियमितता, अस्थमा इत्यादि जैसी विभिन्न स्वास्थ्य तकलीफ़ों में बेहद
              उत्साहजनक परिणाम साजा करते हैं।
            </Text>
            <br />
            <br />
            <Heading fontSize={"2xl"}> ९) भारतीय शिक्षा का पुनरुद्धार </Heading>
            <br />
            <Text fontSize={"18px"}>
              वेदों में, गोमाता को गुरुमाता भी कहा गया है, जिसमें उनकी उपस्थिति
              छात्रों के लिए और शिक्षा की समग्र प्रक्रिया के लिए बहुत मंगलकारी
              है। गोतीर्थ विद्यापीठ गुरुकुल को २०१६में बंसी गीर गोशाला परिसर में
              स्थापित किया गया। गुरुकुल ने प्राचीन भारतीय पारंपरिक शिक्षा और
              गोमाता आधारित पोषण का उपयोग करके छात्रों की बौद्धिक और शारीरिक
              क्षमताओं में उल्लेखनीय परिणाम प्राप्त किए। यहां छात्र कई अन्य
              विषयों के साथ वैदिक गणित, संस्कृत,गोपालन, कृषि, योग, आयुर्वेद,
              शास्त्रीय कला और कलारिपयतु सीखते हैं। परिसर में रहने वाले कई
              छात्रों के साथ शैक्षिक वातावरण प्राचीन "गुरु-शिष्य परम्परा" के
              अनुरूप है।
            </Text>
            <br />
            <br />
          </Box>
        </VStack>
      </Container>
      {IsMobileView !== "true" && <Footer />}
    </>
  );
};

export default Activities;