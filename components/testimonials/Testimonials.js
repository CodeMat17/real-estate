import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { testimonialInfo } from "../../testimonialData";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <Box maxW='full' mx='auto' bg='gray.100'>
      <Box
        maxW='6xl'
        mx='auto'
        mb='12'
        py={{ base: "3rem", sm: "6rem" }}
        px={{ base: 0, sm: 4 }}>
        <Text
          px={{ base: 0, sm: 2 }}
          fontSize={{ base: "4xl", sm: "5xl" }}
          lineHeight='shorter'
          fontWeight='light'
          textAlign='center'>
          Testimonials
        </Text>
        <Text
          mb='12'
          px={{ base: 0, sm: 2 }}
          // fontSize={{ base: "4xl", sm: "5xl" }}
          // lineHeight='shorter'
          fontWeight='light'
          textAlign='center'>
          Here is what our customers say about us.
        </Text>
        <SimpleGrid
          px='8'
          maxW='6xl'
          mx='auto'
          gap='30px'
          columns={[1, 1, 2, 3]}>
          {testimonialInfo.map((item) => (
            <TestimonialCard key={item.id} {...item} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Testimonials;
