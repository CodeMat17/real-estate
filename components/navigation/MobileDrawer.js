import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import LogoComponent from "../LogoComponent";

const MobileDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box display={{ base: "block", sm: "none" }}>
      <IconButton
        onClick={onOpen}
        variant='outline'
        borderColor='blue.600'
        color='white'
        icon={<HiOutlineMenuAlt3 size={30} />}
        _hover={{ bg: "blue.600", color: "gray.400" }}
      />

      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <LogoComponent />
          </DrawerHeader>

          <DrawerBody mt='16'>
            <Link href='/'>
              <Button mb='4' onClick={onClose} w='full' size='lg' py='2'>
                Home
              </Button>
            </Link>
            <Link href='/properties'>
              <Button mb='4' onClick={onClose} w='full' size='lg' py='2'>
                Properties
              </Button>
            </Link>
            <Link href='https://wa.me/2348063856120' target='_blank'>
              <Button mb='4' onClick={onClose} w='full' size='lg' py='2'>
                Contact Us
              </Button>
            </Link>
          </DrawerBody>

          <DrawerFooter>
            {/* <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button> */}
           <Text textAlign='center'>Designed and developed by Matthew</Text> 
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default MobileDrawer;
