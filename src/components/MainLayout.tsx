import { Divider, Heading } from '@chakra-ui/react'
import { Container } from '../components/Container' 
import { Main } from '../components/Main'

interface MainLayoutProps {
  children: React.ReactNode
  pageHeader?: string
}

export const MainLayout = ({ children, pageHeader }: MainLayoutProps) => (
  <Container minHeight="100vh" mb={3}>
    <Main>
      { pageHeader ?
        <>
          <Heading>{pageHeader}</Heading>
          <Divider variant="dashed"/>
        </>
        :
        <></>
      }
      {children}
    </Main>
  </Container>
)