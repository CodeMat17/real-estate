import { Box, HStack, Image, Text } from "@chakra-ui/react";
import { TbQuote } from "react-icons/tb";

const TestimonialCard = ({ img, name, testimonial }) => {
  return (
    <Box overflow='hidden'
      shadow='md'
      mx='auto'
      bg='whiteAlpha.900'
      rounded='md'
      pt='6'
      maxW='sm'
      display='flex'
      flexDir='column'>
      <HStack px='4'>
        <TbQuote size={20} />
      </HStack>
      <Text py='2' px='6' textAlign='center' color='gray'>
        {testimonial}
      </Text>
      <HStack px='4' justify='flex-end'>
        <TbQuote size={20} />
      </HStack>
      <Box p='6' mt='2' bg='gray.50' display='flex' flexDir='column' alignItems='center'>
        <Image src={img} w='100px' rounded='full' />

        <Text fontWeight='light' color='gray'>
          by
        </Text>
        <Text fontSize='lg'> {name}</Text>
      </Box>
    </Box>
  );
};

export default TestimonialCard;
