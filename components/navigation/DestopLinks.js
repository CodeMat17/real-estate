import { Box, Button } from "@chakra-ui/react";
import Link from "next/link";

const DestopLinks = () => {
  return (
    <Box display={{ base: "none", sm: "flex" }}>
      <Link href='/'>
        <Button
          variant='ghost'
          size='lg'
          color='white'
          _hover={{ bg: "blue.600", color: "gray.400" }}>
         Home
        </Button>
      </Link>
      <Link href='/properties'>
        <Button
          variant='ghost'
          size='lg'
          color='white'
          _hover={{ bg: "blue.600", color: "gray.400" }}>
          Properties
        </Button>
      </Link>
      <Link href='https://wa.me/2348063856120' target='_blank'>
        <Button
          variant='ghost'
          size='lg'
          // borderColor='blue.600'
          // shadow='md'
          color='white'
          _hover={{ bg: "blue.600", color: "gray.400" }}>
          Contact Us
        </Button>
      </Link>
    </Box>
  );
};

export default DestopLinks;
