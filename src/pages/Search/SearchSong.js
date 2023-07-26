import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    Center,
    Input,
    VStack,
    Flex,
    FormControl, FormLabel, Select, Menu, MenuButton, MenuList, MenuItem
} from '@chakra-ui/react';
import SongCardUser from '../../components/SongComponents/SongCardUser';
import { getAllSongs } from '../../services/SearchServices/SearchServices';
import { useMediaQuery } from 'react-responsive';

function LoadList({ songList, changedData, isMobile }) {
    let flag = true;
    if (changedData.length === songList.length || changedData.length === 0) {
        flag = false;
    }

    return (
        isMobile ?
        <VStack spacing="36px" mt="56px" alignItems="stretch" width="90%">
            {flag
                ? changedData.map((song) => (
                    <SongCardUser key={song.id} {...song} />
                ))
                : songList.map((song) => (
                    <SongCardUser key={song.id} {...song} />
                ))}
        </VStack>
        :
        <VStack spacing="36px" mt="56px" alignItems="stretch" width="100%">
            {flag
                ? changedData.map((song) => (
                    <SongCardUser key={song.id} {...song} />
                ))
                : songList.map((song) => (
                    <SongCardUser key={song.id} {...song} />
                ))}
        </VStack>
    );
}

function SongPage() {

    const [songList, setSongList] = useState([]);
    const [changedData, setChangedData] = useState([]);
    const [searchVal, setSearchVal] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('');
    const isMobile = useMediaQuery({ query: '(max-width: 1080px)' });

    const getSongList = async () => {
        const allSongs = await getAllSongs();
        console.log(allSongs);
        setSongList(allSongs);
        setChangedData(allSongs);
    }
    const dummyGenres = [
        { id: 1, name: 'Pop' },
        { id: 2, name: 'Rock' },
        { id: 3, name: 'Hip Hop' },
        { id: 4, name: 'Jazz' },
        { id: 5, name: 'Electronic' },
        // Add more genres as needed
    ];
    const searchHandler = (e) => {
        const inputVal = e.target.value.toLowerCase();
        setSearchVal(inputVal);

        const searchResult = songList.filter((item) => {

            const nameWords = item.name.toLowerCase().split(" ");

            return nameWords.some((word) => word.includes(inputVal)) || item.name.toLowerCase().includes(inputVal);
        });

        console.log(searchResult);
        setChangedData(searchResult);
    };

    const handleGenreChange = (genre) => {
        console.log(genre);
        // setSelectedGenre(e.target.value);
        // const filteredSongs = songList.filter((song) =>
        //     song.genres.includes(e.target.value)
        // );
        // changedData(filteredSongs);
    };

    useEffect(() => {
        // Fetch data from the API on localhost:5000
        getSongList();
    }, []);

    return (
        isMobile ?
        <Flex backgroundColor="#000C66" minH="90vh" overflow = "hidden" width="100%" alignItems = "center"  flexDirection="column" >
            <Flex borderColor="gray.500" mt="60px" width="80%" gap = "20px" flexDirection="row" > 
                <Input width = "100%"
                    color="white"
                    placeholder="Search for song"
                    size="md"
                    borderColor="teal.100"
                    focusBorderColor="white"
                    value={searchVal}
                    onChange={searchHandler}

                />
                <FormControl width="auto" >
                    <Menu>
                        <MenuButton as={Button} colorScheme="teal" color="white">
                            {selectedGenre ? selectedGenre.name : 'Select genre'}
                        </MenuButton>
                        <MenuList bg="#000C66" borderColor="gray.500">
                            {/* Add options for each genre */}
                            {dummyGenres.map((genre) => (
                                <MenuItem bg="#000C66" _hover={{ bg: '#050A30', color: 'white' }}
                                    _focus={{ bg: '#050A30', color: 'white' }}
                                    _active={{ bg: '#050A30', color: 'white' }} color="white" key={genre.id} onClick={() => handleGenreChange(genre)}>
                                    {genre.name}
                                </MenuItem>
                            ))}
                        </MenuList>
                    </Menu>
                </FormControl>
            </Flex>

            <Flex width="100%" justifyContent="center" mt = "20px">
                <LoadList songList={songList} changedData={changedData} isMobile={true}/>
            </Flex>
        </Flex>
        :
        <Flex backgroundColor="#000C66" minH="90vh" width="100%" alignItems="center" flexDirection="column" >
            <Flex borderColor="gray.500" mt="60px" width="1080px" gap = "20px" flexDirection="row">
                <Input width = "100%"
                    color="white"
                    placeholder="Search for song"
                    size="md"
                    ml="20px"
                    borderColor="teal.100"
                    focusBorderColor="white"
                    value={searchVal}
                    onChange={searchHandler}
                />
                <FormControl width="15%" >
                    <Menu>
                        <MenuButton as={Button} colorScheme="teal" color="white">
                            {selectedGenre ? selectedGenre.name : 'Select genre'}
                        </MenuButton>
                        <MenuList bg="#000C66" borderColor="gray.500">
                            {/* Add options for each genre */}
                            {dummyGenres.map((genre) => (
                                <MenuItem bg="#000C66" _hover={{ bg: '#050A30', color: 'white' }}
                                    _focus={{ bg: '#050A30', color: 'white' }}
                                    _active={{ bg: '#050A30', color: 'white' }} color="white" key={genre.id} onClick={() => handleGenreChange(genre)}>
                                    {genre.name}
                                </MenuItem>
                            ))}
                        </MenuList>
                    </Menu>
                </FormControl>
            </Flex>

            <Flex width="1070px" justifyContent="center">
                <LoadList songList={songList} changedData={changedData} isMobile={false}/>
            </Flex>
        </Flex>
    );
}

export default SongPage;
