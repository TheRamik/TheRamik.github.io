import {
  Flex,
  Text,
  Code,
  Image,
  Icon,
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import { AiFillCode } from 'react-icons/ai'
import { BsCameraFill } from 'react-icons/bs'
import Head from 'next/head'

import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'


const Index = () => (
  <Flex direction="column">
    <Head>
      <title>
        Ricky Tham | Software Developer
      </title>
    </Head>
    <Container>
      <Image src='/cover-photo.jpeg' alt='cover photo' />
    </Container>
    <Container height="60vh">
      <Main>
        <Hero />
        <Text fontSize='4xl'>Currently...</Text>
        <Text>
          pursing a career as a <Icon as={AiFillCode} boxSize='1.5em' my={-2} /> {' '} 
          <Code>Full Stack Developer</Code> + {' '}
          <Icon as={BsCameraFill} boxSize='1.5em' my={-2} /> {' '} <Code>Content Creator</Code>.
        </Text>
      </Main>
    </Container>
  </Flex>
)

export default Index
