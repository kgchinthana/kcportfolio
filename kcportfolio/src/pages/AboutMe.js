'use client';
import {
  Image,
  Stack,
  Text,
  Heading,
  Flex,
} from '@chakra-ui/react';
import about from '../components/images/aboutme.png';

export default function AboutMe() {
  return (
   
    <Stack
      minH={'100vh'}
      direction={{ base: 'column', md: 'row' }}
      data-aos='fade-up'
      data-aos-offset='200'
    >
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          boxSize={{ base: '300px', md: '400px', lg: '500px' }}
          align={{ base: 'center', sm: 'center' }}
          src={about}
        />
      </Flex>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text as={'span'}>Who am I ? </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'} textAlign={"center"}>
            I'm a Computer Science and Engineering undergraduate with a keen
            interest in full-stack development. With a mastery of both front-end
            and back-end technologies, I'm driven to solve complex problems and
            keep pace with the latest developments. I'm convinced that
            continuous learning and collaboration are key to advancing the tech
            world, and I'm ready to put my skills to work to make a positive
            meaningful impact to the technology field.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}></Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}
