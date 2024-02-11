import { Box, Button, Flex, Image, Input, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <>
      <Box border={'1px solid gray'} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image
            src='logo.png'
            h={24}
            cursor={'pointer'}
            alt='Instagram Logo'
          />
          <Input placeholder='Email' fontSize={14} type='email' />
          <Input placeholder='Password' fontSize={14} type='password' />

          {!isLogin ? (
            <Input
              placeholder='Confirm Password'
              fontSize={14}
              type='password'
            />
          ) : null}

          <Button width={'full'} colorScheme='blue' size={'sm'} fontSize={14}>
            {isLogin ? 'Login' : 'Register'}
          </Button>

          {/* OR Text */}
          <Flex
            alignItems={'center'}
            justifyContent={'center'}
            my={4}
            gap={4}
            w={'full'}
          >
            <Box flex={2} h={'1px'} bg={'gray.400'} />
            <Text mx={1} color={'white'}>
              OR
            </Text>
            <Box flex={2} h={'1px'} bg={'gray.400'} />
          </Flex>

          <Flex
            alignContent={'center'}
            justifyContent={'center'}
            cursor={'pointer'}
          >
            <Image src='/google.png' w={5} alt='Google Logo' />
            <Text mx={2}>Login with Google</Text>
          </Flex>
        </VStack>
      </Box>
      <Box border={'1px solid gray'} borderRadius={4} padding={5}>
        <Flex alignContent={'center'} justifyContent={'center'}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
          </Box>
          <Box
            onClick={() => setIsLogin(!isLogin)}
            color={'blue.500'}
            cursor={'pointer'}
          >
            {isLogin ? 'Register' : 'Login'}
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default AuthForm