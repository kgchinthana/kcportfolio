import {
  Heading,
  Box,
  Text,
  Button,
  Divider,
  SimpleGrid,
  Card,
  Image,
  Stack,
  ButtonGroup,
  CardFooter,
  CardBody,
  Link,
  Flex,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import carcare from '../components/gif/carcare.gif';
import emailclient from '../components/gif/emailclient.gif';
import POS from '../components/gif/pos.gif';
import rpal from '../components/gif/rpal.gif';
import kcmail from '../components/gif/kcmail.gif';
import airline from '../components/images/airline.jpg';
function Projects() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <Box py={12} data-aos='fade-up' data-aos-offset='200'>
      <Text fontSize='xl' color={'gray.500'}>
        Recent Projects
      </Text>
      <Stack direction={{ base: 'column', md: 'row' }}>
        <Flex p={2} flex={1} align={'center'} justify={'center'}>
          <Heading fontSize={{ base: '4xl', md: '4xl' }}>My Portfolio</Heading>
        </Flex>
        <Flex p={2} flex={1} align={'center'} justify={'center'}>
          <Button colorScheme='twitter' leftIcon={<FaGithub />}>
            <Link href='https://github.com/kgchinthana?tab=repositories'>
              GitHub
            </Link>
          </Button>
        </Flex>
      </Stack>

      <SimpleGrid
        spacing={4}
        alignItems={'center'}
        justifyItems={'center'}
        templateColumns={{
          base: 'repeat(1, minmax(200px, 1fr))',
          md: 'repeat(2, minmax(200px, 1fr))',
          lg: 'repeat(3, minmax(200px, 1fr))',
        }}
      >
          <Card  maxW='sm' maxH='1000' height='100%'> 
          <CardBody>
            <Image src={carcare} alt='project gif' borderRadius='lg' />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Car Care 360</Heading>
              <Text>
                We developed a Customer Relationship Management (CRM) system
                specifically for automobile maintenance. The objective of this
                project is to improve customer satisfaction by streamlining the
                automobile servicing procedure. the project's key aspects
                included. Implemented using MERN stack.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button variant='solid' colorScheme='blue'>
                <Link href='https://github.com/kgchinthana/CarCare360CRMSyestem.git'>
                  GitHub Repo
                </Link>
              </Button>
              <Button variant='ghost' colorScheme='blue'>
                More Details
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        <Card  maxW='sm' maxH='1000' height='100%'> 
          <CardBody>
            <Image src={emailclient} alt='project gif' borderRadius='lg' />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Email Client</Heading>
              <Text>
                The primary objective of this project was to design, develop,
                and implement a versatile and efficient command-line-based email
                client in Java. The project aimed to provide a comprehensive
                email management solution with a strong focus on recipient
                management, email sending, and automation.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button variant='solid' colorScheme='blue'>
                <Link href='https://github.com/kgchinthana/Email-Client.git'>
                  GitHub Repo
                </Link>{' '}
              </Button>
              <Button variant='ghost' colorScheme='blue'>
                More Details
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        <Card  maxW='sm' maxH='1000' height='100%'> 
          <CardBody>
            <Image src={rpal} alt='rpal gif' borderRadius='lg' />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>RPAL Interpreter</Heading>
              <Text>
                The RPAL compiler project is focused on creating a robust tool
                for developers to work with the RPAL programming language. RPAL
                is a language that requires a compiler to convert its code into
                executable instructions. We implemented a lexical analyzer and
                parser for the RPAL programming language
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button variant='solid' colorScheme='blue'>
                <Link href='https://github.com/kgchinthana/RPAL-Interpreter.git'>
                  GitHub Repo
                </Link>{' '}
              </Button>
              <Button variant='ghost' colorScheme='blue'>
                More Details
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        <Card  maxW='sm' maxH='1000' height='100%'> 
          <CardBody>
            <Image src={airline} alt='project gif' borderRadius='lg' />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Airline Reservation System</Heading>
              <Text>
                We designed and implemented a comprehensive database system for
                airline reservation system. The system allows passengers to book
                flights online and provides various features, including seat
                selection, discounts for registered users and dynamic pricing
                based on traveler class.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button variant='solid' colorScheme='blue'>
                <Link href='https://github.com/kgchinthana/AirlineReservationSystem.git'>
                  GitHub Repo
                </Link>{' '}
              </Button>
              <Button variant='ghost' colorScheme='blue'>
                More Details
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        <Card  maxW='sm' maxH='1000' height='100%'> 
          <CardBody>
            <Image src={POS} alt='project gif' borderRadius='lg' />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Inventory Management and POS System.</Heading>
              <Text>
                Designed and developed a robust Inventory Management and POS
                System for OXI CROP SCIENCE using cutting-edge technologies
                including React, Node.js, Express.js, and MySQL database. The
                system seamlessly integrates inventory tracking and
                point-of-sale functionalities, providing the company with a
                streamlined and efficient solution for managing their
                agricultural products.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button variant='solid' colorScheme='blue'>
                <Link href='https://github.com/kgchinthana/Oxi-Crop-Science.git'>
                  GitHub Repo
                </Link>{' '}
              </Button>
              <Button variant='ghost' colorScheme='blue'>
                More Details
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        <Card  maxW='sm' maxH='1000' height='100%'> 
          <CardBody>
            <Image src={kcmail} alt='project gif' borderRadius='lg' />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>KC Mail</Heading>
              <Text>
                I developed a comprehensive email client using Spring Boot for
                the backend and React for the frontend. The application includes
                a company management system to automate birthday wishes and
                other email communications, enhancing internal communication and
                fostering a positive workplace culture.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button variant='solid' colorScheme='blue'>
                <Link href='https://github.com/kgchinthana/KC-Email.git'>
                  GitHub Repo
                </Link>{' '}
              </Button>
              <Button variant='ghost' colorScheme='blue'>
                More Details
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </Box>
  );
}

export default Projects;
