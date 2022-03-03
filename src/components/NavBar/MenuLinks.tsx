import { Box, Stack } from "@chakra-ui/react"
import { MenuItem } from "./MenuItem"
import { DarkModeSwitch } from './DarkModeSwitch'

interface MenuLinksProps {
  isOpen: boolean
}

export const MenuLinks = ({ isOpen }: MenuLinksProps) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/about">About</MenuItem>
        <MenuItem to="/blog">Blog</MenuItem>
        <MenuItem to="/projects">Projects</MenuItem>
        <MenuItem to="/hobbies">Hobbies</MenuItem>
        <MenuItem to="/resume">Resume</MenuItem>
        <DarkModeSwitch />
      </Stack>
    </Box>
  )
}