import { Box, Fade, Image, Text } from "@chakra-ui/react";

const HeroBanner = () => {
  return (
    <Fade in>
      <Box
        pos='relative'
        minH={{ base: "80vh", sm: "100vh" }}
        bgImage={`url(./images/invest.jpg)`}
        bgPos='center'
        bgSize='cover'
        bgAttachment='fixed'>
        <Box bg='blue.900' pos='absolute' w='full' h='full' opacity='0.75' />
        <Box
          display='flex'
          flexDir={{ base: "column", md: "row-reverse" }}
          alignItems='center'
          justifyContent={{ base: "center" }}
          maxW='6xl'
          mx='auto'
          gap='20px'
          pos='absolute'
          bottom='0'
          top={{ base: 12, sm: 0 }}
          right='0'
          left='0'
          color='white'
          fontWeight='light'
          p='8'>
          <Image
            src='/icons8.svg'
            w={{ base: "200px", md: "300px" }}
            h={{ base: "200px", md: "300px" }}
            alignSelf='center'
          />
          <Text
            fontSize={{ base: "3xl", lg: "4xl" }}
            lineHeight='shorter' textAlign={{base: 'center', md: 'start'}}
            maxW={["lg"]}>
            XYZ Real Estate Agency.
            <strong> Your comfort is our priority</strong>. Contact us today.
          </Text>
        </Box>
      </Box>
    </Fade>
  );
};

export default HeroBanner;
