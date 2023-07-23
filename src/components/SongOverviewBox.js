import { CloseIcon, ViewIcon } from "@chakra-ui/icons";
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, HStack, Icon, Image, Spacer, Text, VStack, useToast } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import image1 from '../assets/image1.jpg';

function SongOverviewBox(props) {
    const responsiveText = { base: '12px', md: '14px', lg: '18px' };

    // Function to determine if the image is an SVG
    const isSVGImage = (url) => {
        return url.toLowerCase().endsWith('.svg');
    };

    const { id, name, artist, duration } = props;
    
    const [artists, setArtists] = useState([]);

    const toast = useToast();
    const removeToast = () => {
        toast({
            title: 'Song Removed',
            description: 'Successfully Removed Song',
            duration: 7000,
            isClosable: true,
            status: 'success',
            position: 'top'
        })
    }

    //This use effect will be able to call the artist based on the information present in the artist passed in as the props
    useEffect(() => {
        // Function to fetch artist information by ID
        const fetchArtistById = async (id) => {

            try {
                if (!Array.isArray(artist)) {
                    // Handle the case when artistID is not an array (e.g., throw an error or set default value)
                    console.error('Invalid artistID data type:', artist);
                    return;
                }
                const response = await fetch(`http://localhost:5000/artist/${id}`);
                
                const data = await response.json();
                console.log("response", data);
                return data;
            } catch (error) {
                console.error('Error fetching artist:', error);
                return null;
            }
        };

        // Fetch artist information for each artistID in the array
        const fetchArtistsData = async () => {
            const artistData = await Promise.all(artist.map((id) => fetchArtistById(id)));
            console.log("Here", artistData);
            setArtists(artistData);
        };

        fetchArtistsData();
    }, [artist]);
    
    console.log(artists);
    return (
        <Card maxH="250px" bg="blackAlpha.800">
            <Flex alignItems={{ base: 'flex-start', lg: 'center' }} direction={{ base: 'column', lg: 'row' }} justify="space-between">
                <CardHeader>
                    <Box maxH="100%" overflow="hidden">
                        {isSVGImage(image1) ? (
                            // Render SVG with image URL if it is an SVG image
                            <svg width="45%" height="45%" viewBox="0 0 100 100">
                                <image width="100%" height="100%" href={image1} />
                            </svg>) : (
                            // Render JPG image if it is a JPG image
                            <Image src={image1} alt="Song Image" maxHeight="100%" maxWidth="100%" objectFit="cover" />
                        )}
                    </Box>

                </CardHeader>
                <CardBody>
                    <VStack align="flex-start" justify="flex-start">
                        <HStack alignContent="center">
                            <Text flexWrap="wrap" fontSize={{ base: '14px', md: '18px', lg: '22px' }} color="whiteAlpha.900">
                                {name}
                            </Text>
                            <Spacer />
                            <Text fontSize={responsiveText} padding="5px" color="whiteAlpha.900">
                                {duration}
                            </Text>
                        </HStack>
                        {artists?.map((artist) => (
                            <Text key={artist.id} fontSize="15px" color="whiteAlpha.900">
                                {artist.name}
                            </Text>
                        ))}
                    </VStack>
                </CardBody>
                <CardFooter>
                    <HStack justify="space-evenly" spacing="20px" alignItems={{ base: 'flex-start', xl: 'end' }}>
                        <NavLink to="/favorites/details">
                            <Button>
                                <Icon as={ViewIcon} mr="10px" />
                                <Text fontSize="lg"> View </Text>
                            </Button>
                        </NavLink>

                        <Spacer />
                        <Button onClick={removeToast}>
                            <Icon as={CloseIcon} mr="10px" />
                            <Text fontSize="lg"> Remove </Text>
                        </Button>
                    </HStack>
                </CardFooter>
            </Flex>
        </Card>


    );


}

export default SongOverviewBox;