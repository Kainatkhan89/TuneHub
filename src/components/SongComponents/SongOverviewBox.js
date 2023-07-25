import { CloseIcon, ViewIcon } from "@chakra-ui/icons";
import {
    Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, HStack, Icon, Image, Spacer, Text, VStack, useToast, AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
} from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import image1 from '../../assets/image1.jpg';
import { deleteSong } from '../../services/AdminServices/AdminServices.js'

function SongOverviewBox(props) {

    const responsiveText = { base: '12px', md: '14px', lg: '18px' };

    const [isAlertOpen, setIsAlertOpen] = useState(false);

    // Function to determine if the image is an SVG
    const isSVGImage = (url) => {
        return url.toLowerCase().endsWith('.svg');
    };

    const { id, name, artist, duration } = props;

    //const [artists, setArtists] = useState([]);

    const toast = useToast();
    const removeToast = (message) => {
        toast({
            title: 'Song Removed',
            description: message,
            duration: 5000,
            isClosable: true,
            status: 'success',
            position: 'top'
        })
    }
    const errorToast = (error) => {
        toast({
            title: 'Error',
            description: error,
            duration: 5000,
            isClosable: true,
            status: 'error',
            position: 'top'
        })
    }

    const handleConfirmAction = async () => {
        
        const updatedList = props.songList.filter((item) => item.id !== id);
        const response = await deleteSong(id);
        
        if (response?.message !== null) {
            removeToast(response.message);
            console.log("Response", response)
            props.getSongList();
            props.LoadList(updatedList, props.getSongList);
        }
        else if (response?.error !== null) {
            errorToast(response.error);
        }
        setIsAlertOpen(false);
    }
    
    const handleCancelAction = () => {
        // do nothing
        setIsAlertOpen(false);
    }

    //This use effect will be able to get the name of the artist based on the information present in the artist passed in as the props
    // useEffect(() => {

    //     // Fetch artist information for each artistID in the array
    //     const fetchArtistsData = async () => {
    //         if (!Array.isArray(artist)) {
    //             // Handle the case when artistID is not an array (e.g., throw an error or set default value)
    //             console.error('Invalid artistID data type:', artist);
    //             return;
    //         }
    //         const artistData = await Promise.all(artist.map((id) => fetchArtistById(id)));

    //         setArtists(artistData);
    //     };

    //     fetchArtistsData();
    // }, [artist]);

    return (
        <>
            <Card maxH="250px" backgroundColor="#050A30"  maxW = "100vw">
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
                            {/* {artists?.map((artist) => (
                                <Text key={artist.id} fontSize="15px" color="whiteAlpha.900">
                                    {artist.name}
                                </Text>
                            ))} */}
                            {artist?.map((item) => (
                                <Text key={item} fontSize="15px" color="whiteAlpha.900">
                                    {item}
                                </Text>
                            ))}
                        </VStack>
                    </CardBody>
                    <CardFooter>
                        <HStack justify="space-evenly" spacing="20px" alignItems={{ base: 'flex-start', xl: 'end' }}>
                            <NavLink to="/favorites/details">
                                <Button colorScheme="teal">
                                    <Icon as={ViewIcon} mr="10px" />
                                    <Text fontSize="lg"> View </Text>
                                </Button>
                            </NavLink>

                            <Spacer />
                            <Button onClick={() => setIsAlertOpen(true)} colorScheme="teal">
                                <Icon as={CloseIcon} mr="10px" />
                                <Text fontSize="lg"> Remove </Text>
                            </Button>
                        </HStack>
                    </CardFooter>
                </Flex>
            </Card>
            <AlertDialog isOpen={isAlertOpen} onClose={handleCancelAction}>
                <AlertDialogOverlay />
                <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                        Confirm Remove
                    </AlertDialogHeader>
                    <AlertDialogBody>
                        Are you sure you want to remove this song, you cannot undo this action.
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button onClick={handleCancelAction}>
                            Cancel
                        </Button>
                        <Button colorScheme="red" ml={3} onClick={handleConfirmAction}>
                            Remove
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>



    );


}

export default SongOverviewBox;