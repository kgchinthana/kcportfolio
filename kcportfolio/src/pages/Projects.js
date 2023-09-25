import {
  Heading,
  Box,
  VStack,
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
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import carcare from '../components/gif/carcare.gif';
import emailclient from '../components/gif/emailclient.gif';
function Projects() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <Box py={12} data-aos='fade-up' data-aos-offset='200'>
      <VStack spacing={2} textAlign='center'>
        <Text fontSize='xl' color={'gray.500'}>
          Recent Projects
        </Text>
        <Heading as='h2' fontSize='4xl'>
          My Portfolio
          <Button
            marginLeft={{ base: '10', sm: '300' }}
            colorScheme='twitter'
            leftIcon={<FaGithub />}
          >
            <Link href='https://github.com/kgchinthana?tab=repositories'>
              GitHub
            </Link>
          </Button>
        </Heading>
      </VStack>
      <SimpleGrid
        spacing={5}
        marginTop={10}
        marginLeft={10}
        marginRight={10}
        columns={{ base: 1, md: 4 }}
        alignContent={'center'}
        alignItems={'center'}
        templateColumns='repeat(4, minmax(250px, 1fr))'
      >
        <Card maxW='lg'>
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
        <Card maxW='sm'>
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
        <Card maxW='sm'>
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
        <Card maxW='sm'>
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
      </SimpleGrid>
    </Box>
  );
}

export default Projects;
