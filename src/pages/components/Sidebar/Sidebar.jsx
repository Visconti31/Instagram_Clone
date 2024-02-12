import { Avatar, Box, Flex, Link } from '@chakra-ui/react'

import { AiFillHome } from 'react-icons'

import { Link as RouterLink } from 'react-router-dom'

import {
  CreatePostLogo,
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
  SearchLogo,
} from '../../../assets/constants'

const Sidebar = () => {
  const sidebarItems = [
    {
      icon: <AiFillHome size={25} />,
      text: 'Home',
      link: '/',
    },
    {
      icon: <SearchLogo />,
      text: 'Search',
    },
    {
      icon: <NotificationsLogo />,
      text: 'Notifications',
    },
    {
      icon: <CreatePostLogo />,
      text: 'Create',
    },
    {
      icon: <Avatar size={'sm'} name="Visconti" src="/profilepic.png" />,
      text: 'Profile',
      link: '/visconti',
    },
  ]

  return (
    <Box
      height={'100vh'}
      borderRight={'1px solid'}
      borderColor={'whiteAlpha.300'}
      py={8}
      position={'sticky'}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction={'column'} gap={10} w={'full'} height={'full'}>
        <Link
          top={'/'}
          as={RouterLink}
          pl={2}
          display={{ base: 'none', md: 'block' }}
          cursor={'pointer'}
        >
          <InstagramLogo />
        </Link>
        <Link
          top={'/'}
          as={RouterLink}
          p={2}
          display={{ base: 'block', md: 'none' }}
          cursor={'pointer'}
          borderRadius={6}
          _hover={{
            bg: 'whiteAlpha.200',
          }}
          w={10}
        >
          <InstagramMobileLogo />
        </Link>
        <Flex direction={'column'} gap={5} cursor={'pointer'}>
          {sidebarItems.map((item, index) => ())}
        </Flex>
      </Flex>
    </Box>
  )
}

export default Sidebar
