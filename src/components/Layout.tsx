import {
  Flex,
  Icon,
  Link,
  HStack,
} from '@chakra-ui/react'
import Head from 'next/head'
import NextLink from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import { NavBar } from '../components/NavBar/NavBar'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'

export const Layout = ({children}) => {
  return (
    <Flex direction="column">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar />
      <main>
        {children}
      </main>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="flex-start"
      >
        <Footer>
          <HStack>
            <NextLink href="https://github.com/theramik" passHref>
              <Link isExternal>
                <Icon boxSize='2em' as={FaGithub}></Icon>
              </Link>
            </NextLink>
            <NextLink href="https://www.linkedin.com/in/rickytham" passHref>
              <Link isExternal>
                <Icon boxSize='2em' as={FaLinkedin}></Icon>
              </Link>
            </NextLink>
          </HStack>
        </Footer>
        <CTA />
      </Flex> 
    </Flex>
  );

}