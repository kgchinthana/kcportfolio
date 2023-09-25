'use client';
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Image,
  SimpleGrid,
} from '@chakra-ui/react';
import backend from '../components/images/backend.png';
import frontend from '../components/images/frontend.png';
import design from '../components/images/design.png';
import {
  FaNodeJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
  FaPython,
  FaJava,
  FaGithub,
} from 'react-icons/fa';
import { SiSpring, SiCplusplus } from 'react-icons/si';
import { BiLogoJavascript, BiLogoPostgresql } from 'react-icons/bi';
import { GrMysql } from 'react-icons/gr';

function PriceWrapper(props) {
  const { children } = props;

  return (
    <Box
      mb={4}
      shadow='base'
      borderWidth='1px'
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}
    >
      {children}
    </Box>
  );
}

export default function MyExperties() {
  return (
    <Box py={12} data-aos='fade-up' data-aos-offset='200'>
      <VStack spacing={2} textAlign='center'>
        <Text fontSize='xl' color={'gray.500'}>
          My Skills
        </Text>
        <Heading as='h2' fontSize='4xl'>
          My Expertise
        </Heading>
      </VStack>
      <SimpleGrid
        direction={{ base: 'column', md: 'row' }}
        textAlign='center'
        justify='center'
        spacing={{ base: 2, lg: 5 }}
        templateColumns={{
          base: 'repeat(1, minmax(200px, 1fr))',
          md: 'repeat(3, minmax(200px, 1fr))',
          lg: 'repeat(5, minmax(200px, 1fr))',
        }}
        py={10}
      >
        <PriceWrapper minH ={'4'}>
          <Box py={4} px={15}>
            <Text fontWeight='500' fontSize='2xl'>
              Back-End
            </Text>
            <HStack justifyContent='center'>
              <Image
                marginTop={5}
                objectFit='cover'
                boxSize='ms'
                src={backend}
                alt='backend'
              />
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}
          >
            <List spacing={3} textAlign='start' px={12}>
              <ListItem>
                <ListIcon as={FaNodeJs} color='green.500' />
                Node.js
              </ListItem>
              <ListItem>
                <ListIcon as={SiSpring} color='green.500' />
                Spring Boot
              </ListItem>
            </List>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position='relative'>
            <Box py={4} px={15}>
              <Text fontWeight='500' fontSize='2xl'>
                Front-End
              </Text>
              <HStack justifyContent='center'>
                <Image
                  marginTop={5}
                  objectFit='cover'
                  boxSize='ms'
                  src={frontend}
                  alt='frontend'
                />
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}
            >
              <List spacing={3} textAlign='start' px={12}>
                <ListItem>
                  <ListIcon as={FaReact} color='green.500' />
                  React
                </ListItem>
                <ListItem>
                  <ListIcon as={BiLogoJavascript} color='green.500' />
                  JavaScript
                </ListItem>
                <ListItem>
                  <ListIcon as={FaHtml5} color='green.500' />
                  HTML
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCss3Alt} color='green.500' />
                  CSS
                </ListItem>
              </List>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={15} minH={10}>
            <Text fontWeight='500' fontSize='2xl'>
              UI / UX Design
            </Text>
            <HStack justifyContent='center'>
              <Image
                marginTop={5}
                objectFit='cover'
                boxSize='ms'
                src={design}
                alt='design'
              />
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}
          >
            <List spacing={3} textAlign='start' px={12}>
              <ListItem>
                <ListIcon as={FaFigma} color='green.500' />
                Figma
              </ListItem>
            </List>
          </VStack>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={15} minH={'10'}>
            <Text fontWeight='500' fontSize='2xl'>
              Languages
            </Text>
            <HStack justifyContent='center'>
              <Image
                marginTop={5}
                objectFit='cover'
                boxSize='ms'
                src={frontend}
                alt='design'
              />
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}
          >
            <List spacing={3} textAlign='start' px={12}>
              <ListItem>
                <ListIcon as={FaPython} color='green.500' />
                Python
              </ListItem>
              <ListItem>
                <ListIcon as={FaJava} color='green.500' />
                Java
              </ListItem>
              <ListItem>
                <ListIcon as={SiCplusplus} color='green.500' />
                C++
              </ListItem>
              <ListItem>
                <ListIcon as={GrMysql} color='green.500' />
                MySQL
              </ListItem>
              <ListItem>
                <ListIcon as={BiLogoPostgresql} color='green.500' />
                PostgreSQL
              </ListItem>
            </List>
          </VStack>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={15}>
            <Text fontWeight='500' fontSize='2xl'>
              Version Control
            </Text>
            <HStack justifyContent='center'>
              <Image
                marginTop={5}
                objectFit='cover'
                boxSize='ms'
                src={backend}
                alt='design'
              />
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}
          >
            <List spacing={3} textAlign='start' px={12}>
              <ListItem>
                <ListIcon as={FaGithub} color='green.500' />
                GitHub
              </ListItem>
            </List>
          </VStack>
        </PriceWrapper>
      </SimpleGrid>
    </Box>
  );
}
