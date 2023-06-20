import { Grid, GridItem, Heading, Image, Text, Flex } from "@chakra-ui/react";
import * as React from "react";
import image1 from '../../assets/image1.svg';
import image2 from '../../assets/image2.svg';
import image3 from '../../assets/image3.svg';
import image4 from '../../assets/image4.svg';

function AboutUs() {
    return (
        <Flex justifyContent="start" alignItems="center" h="90vh" backgroundColor="#000C66" direction="column">
            <Heading as="h1" size="3xl" fontWeight="bold" ml="30px" mt = "32px" mb = "64px"color="white">
                About Us
            </Heading>
            <Grid templateColumns="repeat(4, 1fr)" gap={6}  placeItems="center" ml="30px" mr="20px" color="white">
                <GridItem colSpan={1}>
                    <Heading size="lg" mb="10px"> OUR MISSION </Heading>
                    <Text> We aim to bring you the best music according to your taste and help you find what you've always been looking for
                    </Text>
                </GridItem>
                <GridItem colSpan={1}>
                    <Image src={image1} height="70%" width="70%" />

                </GridItem>
                <GridItem colSpan={1}>
                    <Heading size="lg" mb="10px"> OUR JOURNEY </Heading>
                    <Text> Our Team has come a long way by researching and bridging the gap between music available and you.
                    </Text>
                </GridItem>
                <GridItem colSpan={1}>
                    <Image src={image2} height="70%" width="70%" />

                </GridItem>
                <GridItem colSpan={1}>
                    <Image src={image4} height="70%" width="70%" />

                </GridItem>
                <GridItem colSpan={1}>
                    <Heading size="lg" mb="10px"> OUR SERVICES </Heading>
                    <Text> We recommend, we help you search, we help you integrate with spottify and mainly, we help you find your music.
                    </Text>

                </GridItem>
                <GridItem colSpan={1}>
                    <Image src={image3} height="70%" width="70%" />

                </GridItem>
                <GridItem colSpan={1}>
                    <Heading size="lg" mb="10px"> OUR TEAM </Heading>
                    <Text> Harsh: Project Manager
                        Dev: Web Designer
                        Kainat: Security Specialist
                        Preeti: Database Administrator
                        Vishwa: DevOps Engineer
                    </Text>

                </GridItem>
            </Grid>
        </Flex>

    );
}

export default AboutUs;