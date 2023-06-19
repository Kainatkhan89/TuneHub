import { Box, Button, Flex, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';


function NavBar() {

  return (
    <Flex as="nav" alignItems="center" justify="space-between" h="80px" w="100%" backgroundColor="#050A30">
      {/* Logo */}
      <NavLink to="/">
        <Box padding="16px 24px">
          <Text color="white">TuneHub</Text>
        </Box>
      </NavLink>

      <HStack gap="24px" mr="40px">
        {/* Home */}
        <Box>
          <NavLink to='/'>
            <Text fontWeight="medium" color="white">Home</Text>
          </NavLink>
        </Box>
        {/* Features */}
        <Box>
        <NavLink to='/'>
            <Text fontWeight="medium" color="white">Features</Text>
          </NavLink>
        </Box>
        {/* About Us */}
        <Box>
        <NavLink to='/'>
            <Text fontWeight="medium" color="white">About Us</Text>
          </NavLink>
        </Box>
        {/* News */}
        <Box>
        <NavLink to='/'>
            <Text fontWeight="medium" color="white">News</Text>
          </NavLink>
        </Box>
        {/* Contact */}
        <Box>
        <NavLink to='/'>
            <Text fontWeight="medium" color="white">Contact</Text>
          </NavLink>
        </Box>
        {/* CTA */}
        <NavLink to='/'>
            <Button fontWeight="medium" colorScheme="teal" variant="solid">Start now</Button>
          </NavLink>
      </HStack>
    </Flex>
  );
}

export default NavBar;