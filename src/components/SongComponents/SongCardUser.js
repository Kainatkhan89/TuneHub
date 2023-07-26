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
    //console.log("id", id);
    return (
        <>
            <NavLink>
                <Flex w="100%" justifyContent="space-between" background="#050A30" maxH = "100px" borderRadius="10px">
                    <Flex p="16px">
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
                        <Flex flexDirection="column" ml="24px" justifyContent="space-between">
                            <Text fontSize="md" color="white" fontWeight="medium">{name}</Text>
                            <Text fontSize="md" color="white" fontWeight="medium">{artist}</Text>
                        </Flex>
                    </Flex>
                    <Flex justifyContent="center" alignItems="center" pr="16px">
                        <Text fontSize="md" color="white" fontWeight="medium">{duration}</Text>
                    </Flex>
                </Flex>
            </NavLink>

        </>



    );


}

export default SongOverviewBox;