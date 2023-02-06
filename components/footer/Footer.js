import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import LogoComponent from "../LogoComponent";

const Footer = () => {
  return (
    <Box bg='gray.700' color='gray.400'>
      <Box maxW='6xl' mx='auto' px='4' pt='4' pb='8'>
        <LogoComponent />
        <SimpleGrid mt='4' gap='30px' columns={[1, 2, 3, 4]}>
          <Box>
            <Text fontSize='lg' fontWeight='semibold'>
              About Us
            </Text>
            <Text>Lorem ipsum dolor sit.</Text>
            <Text>Lorem dolor sit.</Text>
            <Text>Lorem ipsum dolor.</Text>
          </Box>
          <Box>
            <Text fontSize='lg' fontWeight='semibold'>
              Our Services
            </Text>
            <Text>Lorem ipsum dolor sit.</Text>
            <Text>Lorem dolor sit.</Text>
            <Text>Lorem ipsum dolor.</Text>
          </Box>
          <Box>
            <Text fontSize='lg' fontWeight='semibold'>
             Geographic Coverage
            </Text>
            <Text>Lorem ipsum dolor sit.</Text>
            <Text>Lorem dolor sit.</Text>
            <Text>Lorem ipsum dolor.</Text>
          </Box>
          <Box>
            <Text fontSize='lg' fontWeight='semibold'>
              Contact Us
            </Text>
            <Text>Lorem ipsum dolor sit.</Text>
            <Text>Lorem dolor sit.</Text>
            <Text>Lorem ipsum dolor.</Text>
          </Box>
        </SimpleGrid>
      </Box>
      <Flex bg='gray.900' p='4' justify='center' fontSize='sm'>
        &copy; All rights reserved.
      </Flex>
    </Box>
  );
};

export default Footer;
