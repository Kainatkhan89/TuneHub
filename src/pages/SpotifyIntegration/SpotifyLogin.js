import { Flex } from '@chakra-ui/react';
import React from 'react';

function SpotifyLogin() {
    const LOGIN_URI = process.env.LOGIN_URI;
    console.log(LOGIN_URI);
    return (
        <Flex>
            <a href="http://localhost:5000/spotify/login">Login to Spotify</a>
        </Flex>
    );
}

export default SpotifyLogin;