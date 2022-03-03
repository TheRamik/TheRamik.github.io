// pages/404.tsx
import { Button, Link as ChakraLink, Stack, Text } from '@chakra-ui/react'
import Head from 'next/head'

import { MainLayout } from '../components/MainLayout' 
import { Hero } from '../components/Hero'

export default function Custom404() {
  return (
    <MainLayout>
      <Head>
        <title>
          Page Not Found | Ricky Tham
        </title>
      </Head>
      <Hero title="Wait, you're not suppose to be here"/>
      <Stack alignItems="center" justifyContent="flex-start">
        <Text>404 | Page Not Found</Text>
      </Stack>
      <ChakraLink href="/" flexGrow={1} mx={2}>
        <Button width="100%" variant="solid" colorScheme="green">
          Let's bring you back home.
        </Button>
    </ChakraLink>
    </MainLayout>
  )
}
