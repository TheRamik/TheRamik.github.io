import { Link as ChakraLink, Button, Flex } from '@chakra-ui/react'

export const CTA = () => (
  <Flex
    direction="column"
    alignItems="center"
    justifyContent="flex-start"
    flexDirection="row"
    bottom="0"
    width="100%"
    maxWidth="48rem"
    py="1rem"
  >
    <ChakraLink href="/about" flexGrow={1} mx={2}>
      <Button width="100%" variant="outline" colorScheme="green">
        Learn more about me!
      </Button>
    </ChakraLink>

    <ChakraLink
      href="/projects"
      flexGrow={3}
      mx={2}
    >
      <Button width="100%" variant="solid" colorScheme="green">
        See my projects!
      </Button>
    </ChakraLink>
  </Flex>
)
