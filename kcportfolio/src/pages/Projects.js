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
          templateColumns='repeat(auto-fill, minmax(250px, 1fr))'
        >
          <Card maxW='sm'>
            <CardBody>
              <Image
                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Living room Sofa</Heading>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                  $450
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                  Buy now
                </Button>
                <Button variant='ghost' colorScheme='blue'>
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
          <Card maxW='sm'>
            <CardBody>
              <Image
                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Living room Sofa</Heading>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.adaedadadddadddaddad
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                  $450
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                  Buy now
                </Button>
                <Button variant='ghost' colorScheme='blue'>
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Box>
    );
  }
  
  export default Projects;
  