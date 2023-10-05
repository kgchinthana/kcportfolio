'use client';

import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  Link as ChakraLink,
} from '@chakra-ui/react';
import profile from '../components/images/profile.png';
export default function Home() {
  return (
    <Stack
      minH={'100vh'}
      direction={{ base: 'column', md: 'row' }}
      data-aos='fade-up'
      data-aos-offset='200'
    >
      <Flex
        p={8}
        flex={1}
        align={'center'}
        justify={'center'}
        marginTop={'10%'}
      >
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}
            >
              Hey, I'm Kavindu
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              Full Stack Developer
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            I am Kavindu Gayan Chinthana, a third-year undergraduate at the
            University of Moratuwa, majoring in Computer Science and
            Engineering. I have a passion for full-stack development and am
            interested in creating innovative solutions using cutting-edge
            technologies. My areas of expertise include front-end development
            using JavaScript frameworks such as React, as well as back-end
            development using Nodejs and Spring Boot.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
              onClick={() => {
                const contactSection =
                  document.getElementById('contact-section');

                if (contactSection) {
                  contactSection.scrollIntoView({
                    behavior: 'smooth',
                  });
                }
              }}
            >
              Get In Touch
            </Button>
            <Button rounded={'full'}>
              <ChakraLink
                href='https://drive.google.com/file/d/1opijKFCkYNANUBQBtfyh5tI7wXVv6EH_/view?usp=sharing'
                isExternal
                textDecoration='none' // Fix: Use 'none' for textDecoration
              >
                Get CV
              </ChakraLink>
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          borderRadius='full'
          boxSize={{ base: '300px', md: '400px', lg: '500px' }}
          src={profile}
        />
      </Flex>
    </Stack>
  );
}
