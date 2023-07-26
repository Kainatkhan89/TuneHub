import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import LeaderboardSVG from '../../assets/learderboard.svg';
// Leaderboard.js
import { fetchLeaderboardData, submitScore } from '../../services/TriviaServices/LeaderboardServices';


function Leaderboard() {
    const [leaderboardData, setLeaderboardData] = useState([]);

    // Function to fetch leaderboard data from the backend
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchLeaderboardData();
            setLeaderboardData(data);
        };
        fetchData();
    }, []);


    return (
        <Flex justifyContent="space-around" minH="90vh" backgroundColor="#000C66" w="100%" >

            <Flex w="45%" >
                <Image src={LeaderboardSVG} alt="Animated Woman with Power" boxSize="500px" />
            </Flex>
            <Flex w="45%">
                <VStack spacing="4" align="start" color="white" order={[2, 2, 1]} mb="24px">
                    <Text as="h1" fontSize="5xl" fontWeight="medium" color="white" mb="1">
                        Leaderboard
                    </Text>
                    {leaderboardData.map((data, index) => (
                        <Box
                            key={data._id}
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            width="400px"
                            padding="10px"
                            backgroundColor="#0a1c5a"
                            borderRadius="8px"
                            boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
                        >
                            <Box fontSize="xl">
                                {index + 1}.
                            </Box>
                            <Box fontWeight="medium">
                                {data.name}
                            </Box>
                            <Text>{data.score} points</Text>
                        </Box>
                    ))}
                </VStack>
            </Flex>

        </Flex>
    );
}

export default Leaderboard;
