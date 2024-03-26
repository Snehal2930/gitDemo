import React from "react";
import { Heading, Text, Container, Grid, GridItem,useBreakpointValue } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Vidoes = () => {
  const height = useBreakpointValue({base:"270",md:"370"})
  return (
    <>
      <Navbar />

      <Container maxW={"6xl"} px={{base:6,md:8,xl:0}} py={10} >
        <Grid
          templateColumns={{
            xl:"repeat(2, 1fr)",
            md: "repeat(1, 1fr)",
            base: "repeat(1, 1fr)",
          }}
          gap={8}
          my={9}
        >
          <GridItem mt={10}>
            <Text fontSize={"22px"} fontWeight={600} mb={3}>
              गो-कृपा अमृतम प्रोबायोटिक बैक्टीरियल कल्चर - किसानों के लिए
              क्रांतिकारी परिणाम है
            </Text>
            <Text  fontSize={"21px"}>भाषा - गुजराती</Text>
            <Text  fontSize={"18px"} mt={8}>
              बंसी गिर गौशाला ने एक क्रांतिकारी कृषि प्रोबायोटिक विकसित किया है,
              जो किसानों को मुफ्त दिया जा रहा है। इस विस्तृत वीडियो में, श्री
              गोपालभाई सुतारिया अपने इतिहास के बारे में बात करते हैं, इसका उपयोग
              कैसे करें और इस संस्कृति का उपयोग करने के बाद किसानों द्वारा
              प्राप्त परिणाम
            </Text>
          </GridItem>
          <GridItem>
            <iframe
             width={"100%"}
              height={height}
              src="https://www.youtube.com/embed/XzSZ8a0lUk0"
              title="ગો-કૃપા અમૃતમ - ભારતના કિસાનો માટે ક્રાંતિકારી પરિણામો - દિવ્ય ગોમાતાનો આશીર્વાદ"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </GridItem>
          <GridItem>
            <iframe
              width={"100%"}
               height={height}
              src="https://www.youtube.com/embed/hrAtHU3bR50"
              title="गो-कृपा अमृतम बैक्टीरिया - गो-कृषि के लिए मित्र सूक्ष्म कीटाणु - Bansi Gir Gaushala"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </GridItem>
          <GridItem mt={20}>
           <Text fontSize={"22px"} fontWeight={600} mb={3}>
              खेती में सुधार - गो-कृपा अमृत कृषि प्रोबायोटिक
           </Text>
            <Text fontSize={"21px"}>भाषा - हिंदी</Text>
            <Text fontSize={"18px"} mt={8}>
              श्री गोपालभाई सुतारिया खेती में एक नई क्रांति के बारे में बात करते
              हैं - गिर गो-कृपा अमृतम् कृषि प्रोबायोटिक जो मिट्टी को लाभकारी
              बैक्टीरिया के साथ भरने और फिर से भरने की शक्ति रखता है। कई वर्षों
              के अनुसंधान और भारत के अग्रणी कृषिविज्ञानी और आयुर्वेदाचार्य के
              सहयोग से विकसित होने के बाद, इस संस्कृति में अनुकूल बैक्टीरिया के
              40 से अधिक उपभेद हैं और किसानों को बंसी गिर गौशाला द्वारा मुफ्त
              में दिया जा रहा है।
            </Text>
          </GridItem>
          <GridItem mt={20}>
           <Text fontSize={"22px"} fontWeight={600} mb={3}>
              गौचर - चराई के खेत इतने महत्वपूर्ण क्यों हैं?
           </Text>
            <Text fontSize={"21px"}>भाषा - हिंदी</Text>
            <Text fontSize={"18px"} mt={8}>
              श्री गोपालभाई सुतारिया गौपालन के एक महत्वपूर्ण पहलू के बारे में
              बात करते हैं - गौचर या गौमाता के लिए चारागाह। वह बताते हैं कि कैसे
              प्राचीन भारतीय परम्परा के रूप में हाल ही में ब्रिटिश औपनिवेशिक
              शासन ने गौचर पर बहुत जोर दिया, और किसानों के साथ-साथ उपभोक्ता
              स्वास्थ्य पर गौचर के लापता होने का प्रभाव पड़ा। वह लुप्त गौचरों की
              समस्या के लिए कुछ समाधान भी प्रस्तुत करता है।
            </Text>
          </GridItem>
          <GridItem>
            <iframe
             width={"100%"}
               height={height}
              src="https://www.youtube.com/embed/93A5PlRUub0"
              title="Gopal Sutariya - गोचर देश की धरोहर - Bansi Gir Gaushala"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </GridItem>
          <GridItem>
            <iframe
             width={"100%"}
               height={height}
              src="https://www.youtube.com/embed/llQtpvrQukw"
              title="गो-कृपा घास - गौचर बनाने में अति लाभकारी - Bansi Gir Gaushala"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </GridItem>
          <GridItem mt={20}>
            <Text fontSize={"22px"} fontWeight={600} mb={3}>
              गौचर - हम चराई के खेतों को कैसे पुनर्जीवित और फिर से स्थापित कर
              सकते हैं?
           </Text>
            <Text fontSize={"21px"}>भाषा - हिंदी</Text>
            <Text fontSize={"18px"} mt={8}>
              बंसी गिर गौशाला ने घास की 100 किस्मों, उनके स्वाद और पोषण मूल्य,
              संभावित औषधीय मूल्य और गौमाता की पसंद पर बड़े पैमाने पर अध्ययन
              किया है। यहाँ, श्री गोपालभाई ऐसी ही एक अनोखी किस्म के बारे में बात
              करते हैं - गो-कृपा ग्रास, और गौमाता के लिए चराई क्षेत्रों को
              पुनर्जीवित करने के हमारे प्रयासों में इसकी उपयोगिता।
            </Text>
          </GridItem>
          <GridItem mt={20}>
           <Text fontSize={"22px"} fontWeight={600} mb={3}>
              गौ संस्कृति को पुनर्जीवित करने के प्रयास की प्रेरक कहानी
           </Text>
            <Text fontSize={"21px"}>भाषा - गुजराती</Text>
            <Text fontSize={"18px"} mt={8}>
              श्री गोपालभाई सुतारिया, संस्थापक - बंसी गिर गौशाला VTV गुजराती
              न्यूज़ से बात करते हैं और बंसी गिर गौशाला के 'गौसंस्कृति' को
              पुनर्जीवित करने के प्रयासों के बारे में बताते हैं। वह वैदिक गोपालन
              के बारे में बात करता है, कृषि, चिकित्सा और शिक्षा पर इसके लाभकारी
              परिणाम।
            </Text>
          </GridItem>
          <GridItem>
            <iframe
             width={"100%"}
               height={height}
              src="https://www.youtube.com/embed/2mAbgiYzQZI"
              title="ગુજરાતનો ગોપાલ: ગાયો અને ખેડૂતો  માટે છોડી દીધો હીરાનો કરોડોનો ધંધો |  Hu Chhu Gujarati"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </GridItem>
          <GridItem>
            <iframe
             width={"100%"}
               height={height}
              src="https://www.youtube.com/embed/942qEzO7eEE"
              title="Shree Gopalbhai Sutariya  speech in Dairy Business at GPBS2018"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </GridItem>
          <GridItem mt={20}>
           <Text fontSize={"22px"} fontWeight={600} mb={3}>
              क्या गौ संस्कृत भारत और मानवता के सामने आने वाली समस्याओं का जवाब
              है?
           </Text>
            <Text fontSize={"21px"}>भाषा - गुजराती</Text>
            <Text fontSize={"18px"} mt={8}>
              प्राचीन और गोपालन के बारे में किसानों और डेयरी व्यवसाय के मालिकों
              को संबोधित करते हुए, श्री गोपालभाई सुतारिया द्वारा एक आकर्षक और
              आंख खोलने वाली बात, और बड़े पैमाने पर किसानों और देश को इसके लाभ।
            </Text>
          </GridItem>
          <GridItem mt={40}>
           <Text fontSize={"22px"} fontWeight={600} mb={3}>
              गो-कृपा कृषि पद्धति - 5 सरल चरणों में - प्रशिक्षण विडियो - बिना
              यूरिया, डीएपी, पेस्टिसाइड
           </Text>
            <Text fontSize={"18px"}>भाषा - गुजराती</Text>
          </GridItem>
          <GridItem>
            <iframe
             width={"100%"}
               height={height}
              src="https://www.youtube.com/embed/Jwpz2gcVC5M"
              title="गो-कृपा कृषि पद्धति - 5 सरल चरणों में - प्रशिक्षण विडियो - बिना यूरिया, डीएपी, पेस्टिसाइड"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </GridItem>
          <GridItem>
            <iframe
             width={"100%"}
               height={height}
              src="https://www.youtube.com/embed/XPGTda--ZGE"
              title="गो-कृपा कृषि पद्धति प्रशिक्षण विडिओ - उत्तम खेती सरलता से कैसे करेंगे? विस्तृत उदाहरणों के साथ समझें"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </GridItem>
          <GridItem mt={40}>
           <Text fontSize={"22px"} fontWeight={600} mb={3}>
              गो-कृपा कृषि पद्धति प्रशिक्षण विडिओ - उत्तम खेती सरलता से कैसे
              करेंगे? विस्तृत उदाहरणों के साथ समझें
           </Text>
            <Text fontSize={"21px"}>भाषा - गुजराती</Text>
          </GridItem>
          <GridItem mt={40}>
           <Text fontSize={"22px"} fontWeight={600} mb={3}>
              दुगुने से अधिक उत्पादन - कैसे ? कुछ रोचक उदाहरणों से समझते हैं कि
              यह कैसे संभव है
           </Text>
            <Text fontSize={"21px"}>भाषा - गुजराती</Text>
          </GridItem>
          <GridItem>
            <iframe
             width={"100%"}
               height={height}
              src="https://www.youtube.com/embed/Y7Wxw1q9qIg"
              title="दुगुने से अधिक उत्पादन - कैसे ?  कुछ रोचक उदाहरणों से समझते हैं कि यह कैसे संभव है"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </GridItem>
          <GridItem>
            <iframe
             width={"100%"}
               height={height}
              src="https://www.youtube.com/embed/21mw02pLxSo"
              title="॥ गो-संस्कृति ॥ Part-1 (पूर्ण सुख और समृद्धि का आधार) | Shri Gopalbhai Sutariya"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </GridItem>
          <GridItem mt={5}>
           <Text fontSize={"22px"} fontWeight={600} mb={3}>
              ॥ गो-संस्कृति ॥ Part-1 (पूर्ण सुख और समृद्धि का आधार) |
           </Text>
            <Text fontSize={"21px"}>भाषा - हिंदी</Text>
            <Text fontSize={"18px"} mt={8}>
              गौ कृपा कृषि पद्धति एवं गो आधारित आयुर्वेदिक जीवन शैली के
              आध्यात्मिक, आयुर्वेदिक तथा वैज्ञानिक पक्ष का सुन्दर संवाद !!
            </Text>
            <Text fontSize={"18px"} mt={8}>
              रोटरी क्लब अहमदाबाद सर्वम RID 3054 तथा LASI TALKs एवं आर्ट ऑफ़
              लिविंग के श्री श्री गोशाला द्वारा ऑनलाइन वेबिनार के माध्यम से सभी
              किसान भाईओ और गोपालक एवं समाज के सभी समुदाय को लाभान्वित करने हेतु
              यह गौ-संस्कृति पुस्तिका का ऑनलाइन विमोचन किया जायेगा.
            </Text>
          </GridItem>
          <GridItem mt={20}>
           <Text fontSize={"22px"} fontWeight={600} mb={3}>
              गोमाता को लंपि रोग से कैसे बचाएं? गो-कृपा अमृतम किसानों के लिए
              गोमाता का वरदान
           </Text>
            <Text fontSize={"21px"}>भाषा - हिंदी</Text>
            <Text fontSize={"18px"} mt={8}>
              कार्यक्रम का विषय - गोमाता को लंपि रोग से कैसे बचाएं? गो-कृपा
              अमृतम किसानों के लिए गोमाता का वरदान। पांच चरणों में सफल गाय
              आधारित खेती।
            </Text>
          </GridItem>
          <GridItem>
            <iframe
             width={"100%"}
               height={height}
              src="https://www.youtube.com/embed/pcDWJA9Zhbo"
              title="गोमाता को लंपि रोग से कैसे बचाएं? गो-कृपा अमृतम किसानों के लिए गोमाता का वरदान"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </GridItem>
          <GridItem>
            <iframe
             width={"100%"}
               height={height}
              src="https://www.youtube.com/embed/groh8Xf5hjE"
              title="ગો-કૃપા  અમૃતમ  શિબિર - સ્વામિનારાયણ ગુરુકુળ, રામપરવેકરાં - ભુજ, કચ્છ - ગુજરાત."
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </GridItem>
          <GridItem mt={5}>
           <Text fontSize={"22px"} fontWeight={600} mb={3}>
              ગો-કૃપા અમૃતમ શિબિર - સ્વામિનારાયણ ગુરુકુળ, રામપરવેકરાં - ભુજ,
              કચ્છ - ગુજરાત.
           </Text>
            <Text fontSize={"21px"}>भाषा - गुजराती</Text>
            <Text fontSize={"18px"} mt={8}>
              ઓછા ખર્ચ થી ખેતી આ વિષય ને સમજવા
            </Text>
            <Text fontSize={"18px"} mt={8}>
              શ્રી દેવચરણ સ્વામી તપોવન ગુરુકુળ રામપર વેકરા મુખ્ય વક્તા ગો ભક્ત
              ગોપાલભાઈ સુતરીયા બંસી ગીર ગૌશાળા અમદાવાદ અતિથિ વિશેષ મેઘજીભાઈ
              હિરાણી ગો સેવા સંયોજક સૌરાષ્ટ્ર પ્રાંત
            </Text>
          </GridItem>
        </Grid>
      </Container>

      <Footer />
    </>
  );
};

export default Vidoes;
