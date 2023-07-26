import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  chakra
} from "@chakra-ui/react";
import React, { useState } from "react";

export default function CustomerProfile() {
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const location = useLocation(); // Add this line
  const user = location.state?.user;

    useEffect(() => {
      if (user) {
        // Set the initial state with the user data from the location state
        setFirstName(user.firstName);
        setLastName(user.lastName);
        setEmail(user.email);
        setDateOfBirth(user.dateOfBirth);
      }
    }, [user]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

 const handleSaveClick = async () => {
        // Prepare the updated user data
        const updatedUser = {
          firstName,
          lastName,
          email,
          dateOfBirth,
        };

        try {
          // Make the API call to update the user data
          const response = await fetch(`http://localhost:5000/users/edit/${user._id["$oid"]}`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedUser),
          });

          if (response.ok) {
            // If the API call is successful, update the user in the state
            setSuccessMessage("User data updated successfully!");
            setTimeout(() => {setSuccessMessage(null);}, 3000);
            const updatedUserData = await response.json();
            setFirstName(updatedUserData.firstName);
            setLastName(updatedUserData.lastName);
            setEmail(updatedUserData.email);
            setDateOfBirth(updatedUserData.dateOfBirth);

          } else {
            setErrorMessage("Failed to update user data");
            setTimeout(() => {setErrorMessage(null);}, 5000);
          }
        } catch (error) {
           setErrorMessage(`Something went wrong : ${error}`);
           setTimeout(() => {setErrorMessage(null);}, 5000);
        }
        setIsEditing(false);
  };

  const handleCancelClick = () => {
    // Revert changes if any
     setFirstName(user.firstName);
    setLastName(user.lastName);
    setEmail(user.email);
    setDateOfBirth(user.dateOfBirth);
    setIsEditing(false);
  };

  return (
    <Center h="100vh" bg="#000C66">
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Heading as="h1" fontSize="4xl" color="whiteAlpha.900" fontWeight="medium" mt="16px">
          Customer Profile
        </Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form >
            <Stack spacing={4} p="1rem" backgroundColor="#050A30" borderRadius="10px" boxShadow="md" >

              {successMessage && (
                <Text color="green.500" textAlign="center">
                  {successMessage}
                </Text>
              )}
              {errorMessage && (
                <Text color="red.500" textAlign="center">
                  {errorMessage}
                </Text>
              )}
              <FormControl>
                <FormLabel textColor="white" >First Name</FormLabel>
                <Input
                type="text"
                value={firstName}
                readOnly={!isEditing}
                onChange={(e) => setFirstName(e.target.value)}
               /* placeholder="John"*/
                borderColor="white"
                focusBorderColor="teal"
                textColor="white"
                />
              </FormControl>
              <FormControl>
                <FormLabel textColor="white">Last Name</FormLabel>
                <Input
                 type="text"
                 value={lastName}
                 readOnly={!isEditing}
                 onChange={(e) => setLastName(e.target.value)}
                /* placeholder="Doe"*/
                 borderColor="white"
                 focusBorderColor="teal"
                 textColor="white"
                 />
              </FormControl>
              <FormControl>
                <FormLabel textColor="white" >Email</FormLabel>
                <Input
                 type="email"
                 value={email}
                 readOnly={true}
                 onChange={(e) => setEmail(e.target.value)}
                 /*placeholder="johndoe@email.com"*/
                 borderColor="white"
                 bg="grey"
                 focusBorderColor="teal"
                 textColor="white"
                 />
              </FormControl>
              <FormControl>
                <FormLabel textColor="white">Date of Birth</FormLabel>
                <Input
                 type="text"
                 value={dateOfBirth}
                 readOnly={!isEditing}
                 onChange={(e) => setDateOfBirth(e.target.value)}
                /* placeholder="1900-01-01"*/
                 borderColor="white"
                 focusBorderColor="teal"
                 textColor="white"
                 />
              </FormControl>
              {isEditing? (
                <Stack direction="row" spacing={5} justify="center">
                  <Button variant="solid" colorScheme="teal" onClick={handleSaveClick}>
                    Save
                  </Button>
                  <Button variant="outline" colorScheme="teal" onClick={handleCancelClick}>
                    Cancel
                  </Button>
                </Stack>
              ) : (
                <Button variant="solid" colorScheme="teal" onClick={handleEditClick}>
                  Edit
                </Button>
              )}
            </Stack>
          </form>
        </Box>
      </Stack>
    </Center>
  );
}
