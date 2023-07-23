import {
    Box,
    Flex,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    VStack
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import SongOverviewBox from '../../components/SongOverviewBox';

function LoadList() {

    const [songList, setSongList] = useState([]);

    useEffect(() => {
        // Fetch data from the API on localhost:5000
        fetch('http://localhost:5000/songs')
            .then((response) => response.json())
            .then((data) => setSongList(data))
            .catch((error) => console.error('Error fetching songs:', error));
    }, []);


    return (
        <VStack spacing="30px" mt="30px" alignItems="stretch">
            {songList.map((song) => (
                <SongOverviewBox key={song.id} {...song} />
            ))}
        </VStack>
    );
}

function AdminPage() {
    // No initial value is given so will automatically take the first index
    const [selectedTab, setSelectedTab] = useState();

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <Flex p={4}>
            <Box w="250px">
                <Tabs index={selectedTab} onChange={handleTabChange} orientation="vertical">
                    <TabList>
                        <Tab>Songs</Tab>
                        <Tab>Review Moderation</Tab>
                    </TabList>
                </Tabs>
            </Box>
            <Box flex="1">
                <Tabs index={selectedTab} onChange={handleTabChange}>
                    <TabPanels>
                        <TabPanel>
                            <LoadList />
                        </TabPanel>
                        <TabPanel>
                            <Text> Review Moederation</Text>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Flex>
    );
}



export default AdminPage;