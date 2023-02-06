import { usePropertyFormat } from "@/components/hooks/usePropertyFormat";
import PropertyThumbnailSlider from "@/components/property/PropertyThumbnailSlider";
import { Badge, Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { TbMapPin } from "react-icons/tb";

const PropertDetail = ({ property }) => {
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
    photos,
    description,
    coverVideo,
    panaorama,
    amenities,
    furnished,
  } = usePropertyFormat(property);

  return (
    <Box bg='#f7f8f9' py='3rem' px='4' minH='85vh'>
      <Grid templateColumns='repeat(6, 1fr' gap='5' maxW='6xl' mx='auto'>
        <GridItem colSpan='6' maxW='6xl' mx='auto'>
          <Text
            fontSize='3xl'
            fontWeight='medium'
            color='blue.800'
            textAlign={["center", "left"]}>
            {propertyType} {title}
          </Text>
          <Flex
            alignItems='center'
            flexDir={["column", "row"]}
            textAlign='center'
            color='blue.600'
            fontSize='lg'
            gap='0.5rem'
            my={["1rem", 0]}>
            <TbMapPin />
            <Text fontWeight='light'>
              {address} =ID: {externalID}
            </Text>
            <Badge colorScheme='green'>{purpose}</Badge>
          </Flex>
        </GridItem>
        <GridItem colSpan={[6, 3]}>
          {/* <PropertyThumbnailSlider photos={photos} /> */}
        </GridItem>
      </Grid>
      <PropertyThumbnailSlider />
    </Box>
  );
};

export async function getServerSideProps(context) {
  const property = require("@/features/data/property");

  return {
    props: { property },
  };
}

export default PropertDetail;
