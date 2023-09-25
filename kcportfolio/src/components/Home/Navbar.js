'use client';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
} from '@chakra-ui/react';

import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';

const Links = ['Home', 'About', 'Projects', 'Contact'];

const NavLink = (props) => {
  const { children } = props;

  return (
    <Box
      as='a'
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}
    >
      {children}
    </Box>
  );
};

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <HStack
        bg={useColorModeValue('gray.100', 'gray.900')}
        px={10}
        position={'fixed'}
        zIndex={1}
        width={'100%'}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box
              fontSize={'1.5em'}
              marginLeft={50}
              fontWeight={'bold'}
              fontFamily={'Playfair Display'}
            >
              Kavindu Chinthana
            </Box>
            <HStack
              as={'nav'}
              spacing={10}
              display={{ base: 'none', md: 'flex' }}
              fontFamily={'Playfair Display'}
              fontSize={'1.1em'}
              marginLeft={100}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'} marginLeft={100} >
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </HStack>
    </>
  );
}
