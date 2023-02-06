import { Badge, Box, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { TbBath, TbBed, TbRuler } from "react-icons/tb";
// import { usePropertyFormat } from "../hooks/UsePropertyFormat";
import {usePropertyFormat} from '../hooks/usePropertyFormat'

const PropertyCard = (property) => {
  const {
    address,
    coverPhoto,
    propertyType,
    price,
    title,
    rooms,
    baths,
    purpose,
    sqSize,
    externalID,
  } = usePropertyFormat(property);

  return (
    <Link href={`/properties/${externalID}`}>
      <Box mb='3rem' bg='white' rounded='md' overflow='hidden'>
        <Box
          bgImage={`url("${coverPhoto}")`}
          h='250px'
          bgPos='center'
          bgSize='cover'
          pos='relative'
          display='flex'
          flexDir='column'
          justifyContent='space-between'>
          <Box m='1rem'>
            <Badge fontWeight='medium' colorScheme='green' rounded='full'>
              {purpose}
            </Badge>
          </Box>
          <Box
            h='50%'
            bgGradient='linear(to-t, #0a0b1cd9, #ffffff00 100%)'
            display='flex'
            alignItems='flex-end'>
            <Text
              px='4'
              pb='1'
              color='whiteAlpha.800'
              fontSize={{ base: "xl", sm: "2xl" }}
              fontWeight='medium'>
              ₦{price}
            </Text>
          </Box>
        </Box>
        <Box px='4' pb='4' pt='1'>
          <HStack color='gray.400' align='center' justify='space-around' px='2'>
            <Box fontSize='sm' display='flex' alignItems='center' gap='0.5'>
              <TbBed size={16} />
              {rooms}
            </Box>
            <Box fontSize='sm' display='flex' alignItems='center' gap='0.5'>
              <TbBath size={16} />
              {baths}
            </Box>
            <Box fontSize='sm' display='flex' alignItems='center' gap='0.5'>
              <TbRuler size={16} />
              {sqSize}
              <sup>m2</sup>
            </Box>
          </HStack>
          <Text fontSize='lg' fontWeight='light' mb='1rem'>
            {propertyType}
          </Text>
          <Text mb='2' fontSize='sm' fontWeight='light' noOfLines='2'>
            {address}
          </Text>
          <Text fontSize='sm' fontWeight='light' isTruncated>
            {title}
          </Text>
        </Box>
      </Box>
    </Link>
  );
};

export default PropertyCard;
