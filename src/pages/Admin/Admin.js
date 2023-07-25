import {
    Box,
    Flex,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    VStack
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { getAllSongs } from '../../services/AdminServices/AdminServices';
import LeftSidePanel from '../../components/AdminComponent/AdminSidePanel.js';
import AddSongForm from '../../components/AdminComponent/AddSongForm.js';
import SongOverviewBox from '../../components/SongComponents/SongOverviewBox.js';

function LoadList({ songList, getSongList }) {

    return (
        <VStack spacing="30px" mt="30px" alignItems="stretch">
            {songList?.map((song) => (
                <SongOverviewBox key={song.id} {...song} LoadList={LoadList} songList={songList} getSongList={getSongList} />
            ))}
        </VStack>
    );
}

function AdminPage() {
    // No initial value is given so will automatically take the first index
    const [songList, setSongList] = useState([]);

    const [selectedTab, setSelectedTab] = useState();

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    const getSongList = async () => {
        const allSongs = await getAllSongs();
        console.log(allSongs);
        setSongList(allSongs);
    }

    useEffect(() => {
        // Fetch data from the API on localhost:5000
        getSongList();
    }, []);

    return (
        <Flex p={0} backgroundColor="#000C66" minH="100vh" overflow="hidden"> {/* Set padding to 0 and overflow to hidden */}
            <LeftSidePanel selectedTab={selectedTab} handleTabChange={handleTabChange} />
            <Box ml="50px" mr="50px" flex="1" position="relative"> {/* Use ml (margin-left) to create space for the tab */}
                <Tabs index={selectedTab} onChange={handleTabChange} h="100%" ml="0"> {/* Set the height of Tabs to 100% */}
                    <TabPanels ml="0" display= "flex" justifyContent= "center">
                        <TabPanel>
                            <LoadList songList={songList} getSongList={getSongList} />
                        </TabPanel>
                        <TabPanel backgroundColor="#050A30" mt = "60px" borderRadius="10px"  justifyContent="center" alignItems="center">
                            <AddSongForm />
                        </TabPanel>
                        <TabPanel>
                            <Text>Review Moderation</Text>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Flex>
    );
}



export default AdminPage;