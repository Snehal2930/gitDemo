import React, { useState } from "react";
import { Box, Flex, Grid, GridItem, Image } from "@chakra-ui/react";
import ReactImageZoom from "react-image-zoom";

function ImageContainer({ children }) {
    return (
        <Box
            height={{ base: "75vw", md: "400px" }}
            width={{ base: "70vw", md: "350px" }}
            position="relative"
        >
            {children}
        </Box>
    );
}
function ProductImageSection({ images }) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    if (!images) {
        return <ImageContainer />;
    }
    
    return (
        <>
            <Box position={"relative"} mt={8}>
            <Grid gridTemplateRows="repeat(3, 1fr)" gap={4} marginLeft={"-130px"} display={"grid"} marginBottom={"-350px"}>
                    {images?.map((url, index) => (
                        <GridItem key={index}>
                            <Image                            
                                src={url}
                                height={{ base: "30vw", md: "100px" }}
                                width={{ base: "60vw", md: "110px" }}
                                position="relative"
                                marginTop={"30px"}
                                cursor="pointer"
                                paddingRight={"3px"}
                                border={
                                    selectedImageIndex === index
                                        ? "1px solid #799a4e"
                                        : ""
                                }
                                borderRadius={3}
                                onClick={() => setSelectedImageIndex(index)}
                            />
                        </GridItem>
                    ))}
                </Grid>
            </Box>
            <ReactImageZoom
                width={350}
                height={375}
                zoomWidth={500}
                img={images?.[selectedImageIndex]}
            />
    
        </>
    );
}

export default ProductImageSection;
