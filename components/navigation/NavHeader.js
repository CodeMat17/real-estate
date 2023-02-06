import { Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import LogoComponent from "../LogoComponent";
import DestopLinks from "./DestopLinks";
import MobileDrawer from "./MobileDrawer";

const NavHeader = () => {
  return (
    <Box as='nav' pos='sticky' top='0' zIndex='60' bg='blue.500' p='4'>
      <Flex maxW='6xl' mx='auto' align='center' justify='space-between'>
        <LogoComponent />
        <HStack spacing='6' align='center' justify='center'>
          {/* <Icon /> */}
          <MobileDrawer />
          <DestopLinks />
        </HStack>
      </Flex>
    </Box>
  );
};

export default NavHeader;
