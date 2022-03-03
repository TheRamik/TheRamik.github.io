import { Box, Stack ,Image, Tab, Tabs, TabList, TabPanel, TabPanels, Text, Tooltip } from '@chakra-ui/react'
import Head from 'next/head'

import { MainLayout } from '../components/MainLayout' 

export default function About() {
  return (
    <MainLayout pageHeader="About Me">
      <Head>
        <title>
          About | Ricky Tham
        </title>
      </Head>
      <Stack direction={['column', 'row']} spacing={8}>
        <Image
          borderRadius='full'
          boxSize='200px'
          src='/headshot-suit.jpeg'
          alt='Ricky Tham'
        />
        <Box>
          <Text>
            <Text as='i'>Passionate Software Developer</Text> who graduate from {' '}
              <Tooltip hasArrow label='Zot! Zot! Zot!🤘🏼' bg='gray.300' color='black'>University of California, Irvine (UCI)</Tooltip>
              {' '} with Bachelor's of Science in Computer Science and a minor in Film & Media Studies. 
          </Text>
        </Box>
      </Stack>
      <Box>
        <Tabs isFitted variant='enclosed'>
          <TabList overflowY="hidden"
          sx={{
            scrollbarWidth: 'none',
            '::-webkit-scrollbar': {
              display: 'none',
            },
          }} mb='1em'>
            <Tab>Present</Tab>
            <Tab>Unisys</Tab>
            <Tab>College</Tab>
            <Tab>High School</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>
                Currently, I am a Full Stack Developer at Vincit. Stay tune for more details in the future!! 🇫🇮
              </p>
            </TabPanel>
            <TabPanel>
              <p>
                  I started at Unisys as an intern, part-time during the school year and full-time during the quarter breaks. I started restructuring the Compilers
                  Team's testing infrastructure for about 6 months. Afterwards, I moved to the Database Interface Team that created Unisys ODBC and JDBC drivers
                  for Unisys Databases. I developed deeper understanding on languages such as C++ and Java during my last year at UCI and on this team. We supported
                  the applications on both Windows and Linux(CentOS) so I learned about the ins and outs of C++ and the different libraries for both OS.
                  <br /><br />
                  After a year and a half on the database team, I moved to work on a security application at Unisys called Stealth. The application consists of
                  Javascript, SQLite, and ReactJS. I worked on the backend development. After half a year on the team, I started prototyping the portions of the backend
                  to a new tech stack. We decided to use Express.js, Typescript, TypeORM, and MariaDB.
                  Typescript
                </p>
            </TabPanel>
            <TabPanel>
              <p>
                I started college at California State University, Los Angeles majoring in Electrical Engineering. I took two years of Electrical
                Engineering. One of my favorite moments were meeting up with classmates at the school library and tutoring them due to my background
                in high school. I enjoyed it because it helped refresh my memory on the subject and I was able to create new bonds with people that I
                now call friends!
                <br /><br />
                Fast forward, I transferred to University of California, Irvine and changed my major to Computer Science. I was still fixated on the
                Embeded System projects I did in high school but the Computer Science and Engineering major was impacted so I was unable to change to
                that major. Came to my surprise that Computer Science made more sense the second time around on the subject. I became extremely thrilled
                with all the courses. Towards my last year at UCI, I attended GameJams, Computer Science events, and got an internship at a company called
                Unisys. Besides the STEM stuff, I minored in Film and Media Studies that helped bring the creative and design concepts I wanted to figure out.
              </p>
            </TabPanel>
            <TabPanel>
              <p>
                My first steps into a STEM field was in high school at Don Bosco Technical Institute where I studied Electrical Engineering and
                Computer Science. I had difficulties understanding the abstract concepts of CS where I learned Visual Basic C++ and Java. I found a
                much deeper understanding and interest in Electrical Engineering at the time. One of the courses that finally got me to grasp the
                Computer Science concepts were the Embedded System courses.
                <br /><br />
                My interest in film also grew in high school when I started producing content for school projects. 
              </p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </MainLayout>
  )
}
