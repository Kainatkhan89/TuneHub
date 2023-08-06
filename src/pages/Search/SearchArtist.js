import {
    Button,
    Flex,
    FormControl,
    Heading,
    Input,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import SongCardUser from '../../components/SongComponents/SongCardUser';
import { getAllGenres, getAllArtists } from '../../services/SearchServices/SearchServices';

function LoadList({ artistList, changedData, isMobile }) {
    // Check if any changes occurred in the artistList data
    let flag = true;
    if (changedData.length === artistList.length) {
        flag = false;
    }

    // Display a message if no songs exist or no search results are found
    if (changedData.length === 0) {
        return <Heading color="white" mt="100px"> No such song exists </Heading>;
    }

    return (
        // Display song list in a vertical stack
        isMobile ? (
            <VStack spacing="36px" mt="72px" alignItems="stretch" width="90%">
                {flag
                    ? changedData.map((song) => (
                        <SongCardUser key={song.id} {...song} />
                    ))
                    : artistList.map((song) => (
                        <SongCardUser key={song.id} {...song} />
                    ))}
            </VStack>
        ) : (
            <VStack spacing="36px" mt="72px" alignItems="stretch" width="100%">
                {flag
                    ? changedData.map((song) => (
                        <SongCardUser key={song.id} {...song} />
                    ))
                    : artistList.map((song) => (
                        <SongCardUser key={song.id} {...song} />
                    ))}
            </VStack>
        )
    );
}

function SongPage() {
    // State variables for songs, filtered data, search, and genre selection
    const [artistList, setArtistList] = useState([]);
    const [changedData, setChangedData] = useState([]);
    const [searchVal, setSearchVal] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('');
    const [filteredData, setFilteredData] = useState('');
    const [genreList, setGenreList] = useState([]);
    const isMobile = useMediaQuery({ query: '(max-width: 1080px)' });

    // Function to fetch all songs from the API and set initial state
    const getArtistList = async () => {
        const allArtists = await getAllArtists();
        setArtistList(allArtists);
        setChangedData(allArtists);
        setFilteredData(allArtists);
    };

    // Function to fetch all genres from the API and set initial state
    const getGenreList = async () => {
        const allGenres = await getAllGenres();
        const genreListWithNone = [{ id: 0, name: 'None' }, ...allGenres];
        setGenreList(genreListWithNone);
    };

    // Function to handle search for songs based on input value and selected genre
    const searchHandler = (e) => {
        const inputVal = e.target.value.toLowerCase();
        setSearchVal(inputVal);

        if (selectedGenre === undefined || selectedGenre === null || selectedGenre === '') {
            const searchResult = filteredData.filter((item) => {
                const nameWords = item.name.toLowerCase().split(' ');
                return nameWords.some((word) => word.includes(inputVal)) || item.name.toLowerCase().includes(inputVal);
            });
            setChangedData(searchResult);
        } else {
            const searchResult = filteredData.filter((item) => {
                const nameWords = item.name.toLowerCase().split(' ');
                return nameWords.some((word) => word.includes(inputVal)) || item.name.toLowerCase().includes(inputVal);
            });
            setChangedData(searchResult);
        }
    };

    // Function to handle genre selection and filter songs accordingly
    const handleGenreChange = (genre) => {
        const genreName = genre.name.toLowerCase();
        if (genreName === 'none') {
            setChangedData(artistList); // If no genre is selected, show all songs
            setSelectedGenre('');
            setFilteredData(artistList);
        } else if (genre) {
            const filteredArtists = artistList.filter((song) =>
                song.genres.some((item) => item.toLowerCase().includes(genreName)) // Filter songs by genre name
            );
            setChangedData(filteredArtists);
            setFilteredData(filteredArtists);
            setSelectedGenre(genre);
        } else {
            setChangedData([]); // If no genre is selected, show all songs
        }
    };

    // Fetch data from the API and set initial state on component mount
    useEffect(() => {
        getArtistList();
        getGenreList();
        setFilteredData(artistList);
    }, []);

    return (
        // Conditional rendering based on the device screen width
        isMobile ? (
            <Flex backgroundColor="#000C66" minH="90vh" overflow="hidden" width="100%" alignItems="center" flexDirection="column">
                {/* Search input and genre selection */}
                <Flex borderColor="gray.500" mt="60px" width="80%" gap="20px" flexDirection="row">
                    <Input
                        width="100%"
                        color="white"
                        placeholder="Search for artist"
                        size="md"
                        borderColor="teal.100"
                        focusBorderColor="white"
                        value={searchVal}
                        onChange={searchHandler}
                    />
                    <FormControl width="auto">
                        <Menu>
                            <MenuButton as={Button} colorScheme="teal" color="white">
                                {selectedGenre ? selectedGenre.name : 'Select genre'}
                            </MenuButton>
                            <MenuList bg="#000C66" borderColor="gray.500">
                                {/* Add options for each genre */}
                                {genreList.map((genre) => (
                                    <MenuItem
                                        bg="#000C66"
                                        _hover={{ bg: '#050A30', color: 'white' }}
                                        _focus={{ bg: '#050A30', color: 'white' }}
                                        _active={{ bg: '#050A30', color: 'white' }}
                                        color="white"
                                        key={genre.id}
                                        onClick={() => handleGenreChange(genre)}
                                    >
                                        {genre.name}
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </Menu>
                    </FormControl>
                </Flex>

                {/* Song list */}
                <Flex width="100%" justifyContent="center" mt="20px">
                    <LoadList artistList={artistList} changedData={changedData} isMobile={true} />
                </Flex>
            </Flex>
        ) : (
            <Flex backgroundColor="#000C66" minH="90vh" width="100%" alignItems="center" flexDirection="column">
                {/* Search input and genre selection */}
                <Flex borderColor="gray.500" mt="60px" width="1080px" gap="20px" flexDirection="row">
                    <Input
                        width="100%"
                        color="white"
                        placeholder="Search for artist"
                        size="md"
                        ml="20px"
                        borderColor="teal.100"
                        focusBorderColor="white"
                        value={searchVal}
                        onChange={searchHandler}
                    />
                    <FormControl width="15%">
                        <Menu>
                            <MenuButton as={Button} colorScheme="teal" color="white">
                                {selectedGenre ? selectedGenre.name : 'Select genre'}
                            </MenuButton>
                            <MenuList bg="#000C66" borderColor="gray.500">
                                {/* Add options for each genre */}
                                {genreList.map((genre) => (
                                    <MenuItem
                                        bg="#000C66"
                                        _hover={{ bg: '#050A30', color: 'white' }}
                                        _focus={{ bg: '#050A30', color: 'white' }}
                                        _active={{ bg: '#050A30', color: 'white' }}
                                        color="white"
                                        key={genre.id}
                                        onClick={() => handleGenreChange(genre)}
                                    >
                                        {genre.name}
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </Menu>
                    </FormControl>
                </Flex>

                {/* Loads all the songs retrieved from the database */}
                <Flex width="1070px" justifyContent="center">
                    <LoadList artistList={artistList} changedData={changedData} isMobile={false} />
                </Flex>
            </Flex>
        )
    );
}

export default SongPage;
