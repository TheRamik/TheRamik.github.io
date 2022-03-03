import { Link } from "@chakra-ui/react"
import NextLink from "next/link"

interface MenuItemProps {
  children: React.ReactNode,
  to:string;
}

export const MenuItem = ({ children, to="/"}: MenuItemProps) => {
  return (
    <NextLink href={to} passHref>
      <Link>{children}</Link>
    </NextLink>
  )
}