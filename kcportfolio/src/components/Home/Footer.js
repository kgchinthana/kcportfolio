'use client';
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaFacebookSquare } from 'react-icons/fa';

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}
      >
        <Stack direction={'row'} spacing={6}>
        <Box as='a' href={'#home-section'}>
            Home
          </Box>
          <Box as='a' href={'#about-section'}>
            About 
          </Box>
          <Box as='a' href={'#projects-section'}>
            Projects
          </Box>
          <Box as='a' href={'#contact-section'}>
            Contact
          </Box>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text>© 2022 KC. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton
              label={'Linkedin'}
              href={'https://www.linkedin.com/in/kavindu-chinthana-63940a233/'}
            >
              <FaLinkedin />
            </SocialButton>
            <SocialButton
              label={'Git Hub'}
              href={'https://github.com/kgchinthana'}
            >
              <FaGithub />
            </SocialButton>
            <SocialButton
              label={'Facebook'}
              href={'https://web.facebook.com/kavindu.chinthana.3'}
            >
              <FaFacebookSquare />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
