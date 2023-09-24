'use client';
import {
  Card,
  Image,
  Stack,
  Text,
  Heading,
  CardBody,
  Container,
} from '@chakra-ui/react';
import about from '../components/images/aboutme.png';

export default function AboutMe() {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
      data-aos='fade-up' data-aos-offset='200'
    >
      <Image
        objectFit='cover'
        marginTop={20}
        maxW={{ base: '100%', sm: '500px' }}
        src={about}
        boxSize='sm'
        alt='Caffe Latte'
        borderRadius='full'
        margin={{ base: "0", sm:  "20"}}

      />

      <Stack 
        spacing={{ base: 1, md: 8, lg: 20 }}
                    >
        <CardBody>
          <Container maxW='2xl' >
            <Heading size='xl' marginTop={'60px'}>ABOUT ME</Heading>
            <Text py='100' textAlign={'start'} fontSize={'1.2em'} marginTop={-50}>
              I'm a Computer Science and Engineering undergraduate with a keen
              interest in full-stack development. With a mastery of both
              front-end and back-end technologies, I'm driven to solve complex
              problems and keep pace with the latest developments. I'm convinced
              that continuous learning and collaboration are key to advancing
              the tech world, and I'm ready to put my skills to work to make a
              positive meaningful impact to the technology field.
            </Text>
          </Container>
        </CardBody>
      </Stack>
    </Card>
  );
}
