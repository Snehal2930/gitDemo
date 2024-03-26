import Footer from "../components/Footer";
import BreadCrumbCom from "../components/BreadCrumbCom";
import Navbar from "../components/Navbar";
import { Box, Container, VStack, Image, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
const Aboutus = () => {
  let { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const IsMobileView = searchParams.get("mobile") ?? "false";
  return (
    <>
      {IsMobileView !== "true" && <Navbar />}
      <Container maxW={"container.xl"} alignContent={"flex-start"}>
        <BreadCrumbCom second={"About Us"} secondUrl={"/about-us"} />{" "}
      </Container>
      <Container maxW={"container.xl"} mb={4} px={0} centerContent>
        <Box
          w={"100%"}
          bgImage="https://forntend-bucket.s3.ap-south-1.amazonaws.com/dsose/aboutUs.jpg"
          bgSize="cover"
          bgPosition="center"
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt={"-10px"}
          py={20}
          boxShadow={"0px 0px 0px 0px"}
          height={"550px"}
          mb={10}
          // filter="brightness(200%)"
          // style={{ backdropFilter: "blur(10px)" }}
        >
          <Text
            pb={2}
            color={"brand.500"}
            textAlign={"center"}
            fontSize="7xl"
            fontWeight="600"
          >
            About Us
          </Text>

          {/* <Text
            pb={2}
            color={"brand.100"}
            textAlign={"center"}
            textShadow={"1px 1px 2px lightgreen"}
            fontSize="7xl"
            fontWeight="black"
          >
            About us
          </Text> */}
        </Box>
        <VStack>
          <Box
            fontWeight={"600"}
            color={"brand.500"}
            fontSize={"30px"}
            alignContent={"flex-start"}
          >
            d’SOSE is proud to be - PRODUCT of भारत
          </Box>
          {/* <Box maxW={"6xl"}>
            {" "}
            <Image
              src="https://forntend-bucket.s3.ap-south-1.amazonaws.com/dsose/aboutus/about1.jpg")}
              alt="SOSE - an attempt to revive our ancient Bharatiya roots"
            />
          </Box> */}

          <Box maxW={"6xl"} textAlign={"justify"}>
            Bharat is an ancient and advanced culture and civilization that has
            with stood the tests of time. A civilization that has excelled in
            every field, be it Krishi (agriculture), Ayurved ('science of
            life'), Kala (arts), Vigyan (science), Yog as well as the Pursuit of
            Brahman (Supreme Reality).
            <br />
            <br />
            We believe in 'वसुधैवकुटुम्बकम्' ('Vasudhaiv Kutumbakam') means
            Whole World Is Family, and by this we want to serve a good health,
            better living and sustainable environment to the whole world. 
            <br />
            <br />
            Sauces are the melding of ingredients into a harmonious taste and
            that makes everything better embracing the saucy side of life. Dive
            into a world of treat with a pure and authentic delight dripping
            foodie fantasies into like-worthy realities! By d’SOSE Sauces. Our
            sauce making begins with enhanced aromatic fresh vegetables and
            seasonings that are sautéed by infusing authentic spices and
            handpicked herbs to preserve their fresh colour and flavour with
            consistency. These herbs not only add a burst of freshness to the
            sauce but also complement the flavors of the toppings. Our
            traditional sauces start with a base of ethically and naturally
            grown tomatoes. These tomatoes are grown and harvested locally,
            ensuring that they are at the peak of their freshness and flavour.
            We believe in using natural ingredients as they are free from
            harmful chemicals and additives, giving our sauce a more natural and
            authentic taste.
            <br />
            <br />
            These traditional Italian herbs and spices not only add depth to the
            sauce but also give it a distinct and authentic taste. We take great
            care in selecting the highest quality herbs and spices to ensure
            that our sauce is bursting with flavour. One of the key ingredients
            in our sauces is love and passion. Our culinary team puts their
            heart and soul into creating the perfect sauce, just like how it is
            done in traditional Italian kitchens. They mix and blend the
            ingredients with utmost care and precision, ensuring that every
            batch of sauce is of the highest quality. The traditional and
            authentic d’SOSE sauces from our Suryan Organic is a testament to
            our commitment giving homemade taste and also using the best
            ingredients and techniques to create a truly delicious and wholesome
            meal. The taste of d’SOSE sauces is made with time-honoured and
            honest-to-goodness ingredients. Our sauces are made with natural
            based ingredients, ensuring that every bite is not only tasty but
            also nutritious. We promise it will be an authentic and
            unforgettable experience.
            <br />
            <br />
            d’SOSE - A great heritage and an iconic food, a local cuisine and a
            fusion food is the best accompaniment to dishes, tastes delicious
            and is flavour-packed which makes your dishes crowing glory and
            important part of Italian cuisines.
            <br />
            <br />
            Inspired by:  Bansi Gir Gaushala which has been practicing vedic
            gaupalan from last 14 years. Bansi Gir's aim is to contribute to the
            revival of "Gau Sanskriti" an ancient culture which placed the
            Gaumata (cow as divine mother) at the center of healthcare,
            agriculture, education, economy & social activity. Know
            more  www.bansigir.in                 
            <br />
            <br />
            <i>
              🍕 “Next time you bite into your favourite slice, remember, it's
              the sauce that makes it special! Enjoy the magic of pizza sauce
              from d’SOSE”
            </i>
            <br />
            <br />
            <i>
              🍝 “Ever wondered how to spice up your regular pasta dish? We've
              got the secret for you: It's all about the sauce! from d’SOSE”
            </i>
            <br />
            <br />
            Thank you for your purchase! We hope you love your item as much as
            we loved making/ building/ creating it! If you do, leave us a
            review? Spread the word to others like you!
          </Box>

          <br />
          <Box
            maxW={"6xl"}
            fontWeight={"600"}
            color={"brand.500"}
            fontSize={{ base: "20px", lg: "30px" }}
          >
            Why d’SOSE?
          </Box>

          <Box maxW={"6xl"} textAlign={"justify"}>
            Sauce it up, spice it up using d’SOSE products and savor the flavour
            with every dip by indulging in saucy delights inkling Saucy and
            sensational!
            <br />
            <br />
            d'SOSE Sauces are crafted with care, love, and only real, wholesome
            ingredients. We use no artificial colours, preservatives, or
            flavours - just authentic taste from traditional recipes. d'SOSE
            sauces are the key components that adds natural sweetness, acidity,
            moisture and flavour to your pizzas and pastas recipe. d’SOSE Sauces
            are used to dress, compliment, enhance and bring out the flavour of
            the food it is served with and the secret of these sauces is
            hygienically prepared with all nutrients in its original form. It
            enhances nutritional value of the dish. Our products have a keen
            sense of smell, delicate sense of taste, perfect culinary art of
            blend contributing to a perfect sauce and especially giving a
            homemade taste and texture without any artificial ingredients
            harming our digestive system and nurturing lives by its pure and
            natural – original form.
            <br />
            <br />
            d’SOSE pizza sauce bursts with flavour. The rich, Savory tomato base
            is cooked to perfection with garlic, olive, jaggery and Italian
            herbs grown ethically and naturally. Each spoonful is packed with
            the zesty zing of oregano, basil, red and white pepper flakes added
            in its original form with a vision of giving a traditional taste and
            an authentic way of bringing healthier minds together. The d'SOSE
            sauces are meticulously prepared with traditional ingredients,
            guaranteeing an authentic taste without any added preservatives,
            flavours, or colours. This sauce clings to the crust, permeating
            every bite with its robust aroma. The sweetness of the tomatoes
            balances the spices beautifully. With its chunky texture and deep
            red colour, this sauce looks as good as it tastes and feel the party
            in your mouth. This sauce is made for pizza night!
            <br />
            <br />
            Pasta sauce from d’SOSE is a delectable, mouth-watering treat, with
            its rich, tangy tomato flavour mingling with Savory herbs and
            spices. Each bite explodes with joy, coating your tastebuds in a
            luscious medley of garlic, basil, oregano. The ethically and
            naturally grown chunky tomatoes blended, burst with summer
            sweetness, while the olive oil glistens, adding a touch of peppery
            spice in an incredible way. With a commitment to authenticity,
            d'SOSE sauces are carefully crafted using traditional ingredients
            with an authentic taste free from any added preservatives, flavours,
            or colours compromise the integrity of our products. As you twirl
            the pastas around your fork, the sauce clings to each strand,
            beckoning your tastebuds with its irresistible aroma. Slurp up a
            spoonful and let the chunks of tomato tickle your tongue, sending
            your tastebuds on an Italian adventure. With its vibrant red hue and
            lip-smacking Savor, a bowl of pasta is made complete by a generous
            dollop of this exquisite, full-flavored sauce.
            <br />
            <br />
          </Box>
          <br />
        </VStack>
      </Container>
      {IsMobileView !== "true" && <Footer />}
    </>
  );
};

export default Aboutus;
