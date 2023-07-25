import {
    Center,
    Flex
} from '@chakra-ui/react';
import AddSongForm from '../../components/AdminComponent/AddSongForm.js';
import LeftSidePanel from '../../components/AdminComponent/AdminSidePanel.js';


function SongForm() {

    const tabIndex = 1;

    return (
        <Flex p={0} backgroundColor="#000C66" minH="100vh">
            {/* Set padding to 0 and overflow to hidden */}
            <Flex >
                <LeftSidePanel selectedTab={tabIndex} />
            </Flex>
            <Center flex="1">
                <Flex backgroundColor="#050A30"
                    mt="32px"
                    borderRadius="10px"
                    maxW="400px"
                    flex="1"
                    pt="20px"
                    pb="20px"
                    position="relative"
                    justifyContent="center"
                    alignItems="center"
                >
                    {/* Center the content */}
                    <AddSongForm />
                </Flex>
            </Center>
        </Flex>

    );
}



export default SongForm;

