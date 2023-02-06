import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { logos } from "../../partnersLogo";
import PartnerCard from "./PartnerCard";

const PartnersLogo = () => {
  return (
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
        Our Partners
      </Text>
      <Text
        mb='12'
        px={{ base: 0, sm: 2 }}
        // fontSize={{ base: "4xl", sm: "5xl" }}
        // lineHeight='shorter'
        fontWeight='light'
        textAlign='center'>
        Reliable and trusted.
      </Text>
      <SimpleGrid px='8' maxW='6xl' mx='auto' gap='30px' columns={[2, 3, 4, 5]}>
        {logos.map((logo) => (
          <PartnerCard key={logo.id} {...logo} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default PartnersLogo;
