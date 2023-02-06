import { Box, Text } from "@chakra-ui/react";
import PropertiesSwiper from "./PropertiesSwiper";

const FeaturedProperties = ({ properties }) => {
  return (
    <Box bgColor='blue.50'>
      <Box
        maxW='6xl'
        mx='auto'
        color='gray.600'
        px='2'
        py={{ base: "3rem", sm: "6rem" }}>
        <Text
          fontSize={{ base: "4xl", sm: "5xl" }}
          lineHeight='shorter'
          fontWeight='light'
          px='8'
          textAlign='center'>
          See Our Listings
        </Text>
        <Text
          px='8'
          fontSize='lg'
          fontWeight='light'
          textAlign='center'
          mb='12'>
          Most recent properties
        </Text>
        <PropertiesSwiper properties={properties} />
      </Box>
    </Box>
  );
};

export default FeaturedProperties;
