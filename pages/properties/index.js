import PropertyCard from "@/components/swiperComponent/PropertyCard";
import { Box, SimpleGrid } from "@chakra-ui/react";

const Properties = ({ allProperties }) => {
  return (
    <Box bg='#f7f8f9' py='3rem' px='4'>
      <Box maxW='6xl' mx='auto'>
        <SimpleGrid gap={[0, 2]} columns={[1, 2, 2, 3]}>
          {allProperties.map((props) => (
            <PropertyCard key={props.id} {...props} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export async function getStaticProps() {
  const { hits } = require("@/features/data/properties");

  return {
    props: { allProperties: hits },
  };
}

export default Properties;
