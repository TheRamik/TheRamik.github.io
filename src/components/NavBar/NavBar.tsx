import { FlexProps } from '@chakra-ui/react'
import React from "react"
import { NavBarContainer } from './NavBarContainer'
import { Logo } from './Logo'
import { MenuToggle } from './MenuToggle'
import { MenuLinks } from './MenuLinks'

export const NavBar = (props: FlexProps) => {
  const [isOpen, setIsOpen] = React.useState(false)
 
  const toggle = () => setIsOpen(!isOpen)
  return (
    <NavBarContainer {...props}>
      <Logo
        w="100px"
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  )
}