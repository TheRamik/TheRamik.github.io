import { Flex, FlexProps } from '@chakra-ui/react'

interface NavBarContainerProps {
  children: React.ReactNode,
  props?:FlexProps;
}

export const NavBarContainer = ({ children, ...props }: NavBarContainerProps) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mt={5}
      mb={3}
      p={8}
      {...props}
    >
      {children}
    </Flex>
  )
}