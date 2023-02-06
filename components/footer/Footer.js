import { Box, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg='gray.700' color='gray.400'>
      <Box maxW='6xl' mx='auto' px='4' pt='4' pb='8'>
        Footer
      </Box>
      <Flex bg='gray.900' p='4' justify='center' fontSize='sm'>logo and copyright</Flex>
    </Box>
  );
};

export default Footer;
