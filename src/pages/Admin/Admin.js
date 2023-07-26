import {
    Flex,
    VStack
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import LeftSidePanel from '../../components/AdminComponent/AdminSidePanel.js';
import SongOverviewBox from '../../components/SongComponents/SongOverviewBox.js';
import { getAllSongs } from '../../services/AdminServices/AdminServices';

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

    const tabIndex = 0;

    const getSongList = async () => {
        const allSongs = await getAllSongs();
        console.log(allSongs);
        setSongList(allSongs);
    }

    useEffect(() => {
        // Fetch data from the API on localhost:8080
        getSongList();
    }, []);

    return (
        <Flex p={0} backgroundColor="#000C66" minH="100vh" overflow="hidden"> {/* Set padding to 0 and overflow to hidden */}
            <Flex minH="100vh" >
                <LeftSidePanel selectedTab={tabIndex} />
            </Flex>
            <Flex ml="50px" mr="50px" flex="1" position="relative" justifyContent="center"> {/* Use ml (margin-left) to create space for the tab */}
                <LoadList songList={songList} getSongList={getSongList} />
            </Flex>
        </Flex>
    );
}



export default AdminPage;