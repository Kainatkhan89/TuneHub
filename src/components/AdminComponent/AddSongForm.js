import React from 'react';
import { Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';

function AddSongForm() {
  return (
    <VStack spacing="30px" width= "350px"> {/* Decrease the width using maxW */}
      <FormControl isRequired>
        <FormLabel color="white">Name</FormLabel>
        <Input color = "white" type="text" id="name" name="name" required />
      </FormControl>
      <FormControl isRequired>
        <FormLabel color="white">Artist</FormLabel>
        <Input color = "white"type="text" id="artist" name="artist" required />
      </FormControl>
      <FormControl isRequired>
        <FormLabel color="white">Duration</FormLabel>
        <Input color = "white" type="text" id="duration" name="duration" required />
      </FormControl>
      <FormControl isRequired>
        <FormLabel color="white">Genres</FormLabel>
        <Input color = "white" type="text" id="genres" name="genres" required />
      </FormControl>
      <FormControl isRequired>
        <FormLabel color="white">Release Year</FormLabel>
        <Input color = "white" type="number" id="releaseYear" name="releaseYear" required />
      </FormControl>
      <Button colorScheme="teal" type="submit">
        Add Song
      </Button>
    </VStack>
  );
}

export default AddSongForm;
