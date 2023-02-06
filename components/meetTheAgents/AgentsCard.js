import { Box, Button, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { MdCall } from "react-icons/md";

const AgentsCard = ({ name, image, contact, title }) => {
  return (
    <Box
      w='full' // minW={{ base: "auto", sm: "160px", md: "200px" }}
      mx='auto'
      bg='#f1f1f14a'
      py='2rem'
      display='flex'
      flexDir='column'
      justifyContent='center'
      alignItems='center'
      textAlign='center'
      mb={{ base: "1rem", sm: 0 }}
      rounded='md'>
      <Box px='4'>
        <Image src={image} rounded='full' mb='2rem' shadow='md' w='150px' />
      </Box>
      <Text
        color='blue.500'
        fontWeight='medium'
        fontSize='xl'
        px='2'
        noOfLines='1'>
        {name}
      </Text>
      <Text
        color='blue.700'
        fontWeight='light'
        fontSize='md'
        px='2'
        mb='2'
        noOfLines='1'>
        {title}
      </Text>
      {/* <Text
        mt='2'
        color='gray.500'
        textAlign='center'
        fontWeight='light'
        fontSize='sm'
        px='2'>
        {contact}
      </Text> */}
      <Box>
        <Menu>
          <MenuButton
            as={IconButton}
            px='8'
            py='3'
            aria-label='Options'
            icon={<MdCall size={23} />}
            rounded='full'
            color='blue.500'
            shadow='md'>
        
          </MenuButton>
          <MenuList>
            <MenuItem minH='48px'>
              <Image
                boxSize='2rem'
                borderRadius='full'
                src={image}
                alt={name}
                mr='12px'
              />
              <span>Call not activated yet</span>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};

export default AgentsCard;
