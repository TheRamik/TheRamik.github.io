import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons"
import { Box } from "@chakra-ui/react"
import { MouseEventHandler } from "react"

interface MenuToggleProps {
  toggle: MouseEventHandler<HTMLDivElement>
  isOpen: boolean
}

export const MenuToggle = ({ toggle, isOpen }: MenuToggleProps) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Box>
  )
}