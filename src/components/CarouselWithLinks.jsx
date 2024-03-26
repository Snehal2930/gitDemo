import { useEffect, useState } from "react";
import {
    Box,
    IconButton,
    Image,
    Text,
    useBreakpointValue,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

export default function CarouselWithLinks({
    bannersWithLinks,
    // handleImageClick,
    transparentBtn = true,
    autoplay,
    autoplaySpeed,
    fullWidth,
    desktopHeight = 120,
    textBanners = false,
}) {
    // Settings for the slider
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: autoplay ?? true,
        speed: 500,
        autoplaySpeed: autoplaySpeed ?? 10000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const [slider, setSlider] = useState(Slider | null);
    const side = useBreakpointValue({ base: "0px", md: "0px" });
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const ShowButtons = windowWidth > 330;
    const navigate = useNavigate();
    return (
        <Box
            position={"relative"}
            height={{ base: "100%", md: "50%" }}
            width={fullWidth ? "100vw" : "100%"}
            bg={textBanners && "bg.500"}
        // overflow={"hidden"}
        >
            {/* CSS files for react-slick */}
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            {/* Left Icon */}
            {ShowButtons && (
                <>
                    <IconButton
                        aria-label="left-arrow"
                        icon={<ChevronLeftIcon style={{ fontSize: 34 }} />}
                        background={transparentBtn ? "#ffffff00" : "#434242"}
                        color="#fff"
                        size={{ base: "sm", md: "md" }}
                        position="absolute"
                        left={side}
                        top={"50%"}
                        transform={"translate(50%, -50%)"}
                        zIndex={2}
                        display={{ base: "block", md: "block" }}
                        onClick={() => slider?.slickPrev()}
                        _hover={"background:#ffffff00"}
                        borderRadius={"40px"}
                        
                    />
                    {/* Right Icon */}
                    <IconButton
                        aria-label="right-arrow"
                        icon={<ChevronRightIcon style={{ fontSize: 34 }} />}
                        background={transparentBtn ? "#ffffff00" : "#434242"}
                        color="#fff"
                        size={{ base: "sm", md: "md" }}
                        position="absolute"
                        right={side}
                        top={"50%"}
                        transform={"translate(-50%, -50%)"}
                        zIndex={2}
                        display={{ base: "block", md: "block" }}
                        onClick={() => slider?.slickNext()}
                        _hover={"background:#ffffff00 "}
                        borderRadius={"40px"}
                    
                    />
                </>
            )}
            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {bannersWithLinks.map((data, index) => (
                    <>
                        {textBanners === true ? (
                            <Box
                                key={index}
                                textAlign="center"
                                w="50vw"
                                mx={"auto"}
                                pb={4}
                                onClick={() => navigate(data?.href)}
                                cursor="pointer"
                            >
                                {/* <Text fontSize="md" mb={4}>
                  {data?.content}
                </Text> */}
                                <Text
                                    display={"inline-block"}
                                    fontSize={"20px"}
                                    fontWeight={600}
                                >
                                    <span
                                        style={{
                                            fontSize: "1rem",
                                            color: "#436131",
                                            fontWeight: 900,
                                        }}
                                    >
                                        &#8220;
                                    </span>{" "}
                                    {data?.content}
                                    <span
                                        style={{
                                            color: "#436131",
                                            fontSize: "1rem",
                                            fontWeight: 900,
                                        }}
                                    >
                                        &#8221;
                                    </span>
                                </Text>
                                <Text
                                    color={"gray"}
                                    fontSize={"18px"}
                                    fontWeight={600}
                                    mt={4}
                                    mb={8}
                                >
                                    -{data.title}
                                </Text>
                            </Box>
                        ) : (
                            <Image
                                key={index}
                                src={data.image}
                                alt={data.alt_text}
                                onClick={() => navigate(data?.href)}
                                //objectFit="fit"
                                cursor="pointer"
                                w="100%"
                            //h={{ base: "100%", md: `${desktopHeight}px` }}
                            ></Image>
                        )}
                    </>
                ))}
            </Slider>
        </Box>
    );
}
