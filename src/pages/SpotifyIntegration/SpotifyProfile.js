import { Flex, Text } from '@chakra-ui/react';
import React, { useState, useEffect }from 'react';
import { getUserInfo, logout } from '../../spotify-integration/SpotifyIntegration';

function SpotifyProfile() {
    const [user, setUser] = useState(null);
    const [followedArtists, setFollowedArtists] = useState(null);
    const [playlists, setPlaylists] = useState(null);
    const [topArtists, setTopArtists] = useState(null);
    const [topTracks, setTopTracks] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          const { user, followedArtists, playlists, topArtists, topTracks } = await getUserInfo();
          setUser(user);
          setFollowedArtists(followedArtists);
          setPlaylists(playlists);
          setTopArtists(topArtists);
          setTopTracks(topTracks);
        };
        fetchData();
      }, []);

    return (
        <Flex>
         {
            user ?
            <Text>Spotify profile of {user.display_name}</Text>:
            <Text>Loading</Text>
         }
        </Flex>
    );
}

export default SpotifyProfile;