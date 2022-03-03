import { Box, Text , BoxProps} from "@chakra-ui/react"
import NextLink from "next/link"

export const Logo = (props: BoxProps) => {
  return (
      <Box {...props}>
        <Text fontSize="2xl" fontWeight="bold">
          <NextLink href="/">RICKY THAM</NextLink>
        </Text>
      </Box>
  )
}