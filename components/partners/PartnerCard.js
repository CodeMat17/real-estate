import { Box, Image, Text } from "@chakra-ui/react";

const PartnerCard = ({ item, name }) => {
  return (
    <Box
      mx='auto'
      textAlign='center'
      opacity='0.3'
      display='flex'
      flexDir='column'>
      <Image src={item} alignSelf='center' w='50px' h='50px' />
      <Text>{name}</Text>
      </Box>
  );
};

export default PartnerCard;
