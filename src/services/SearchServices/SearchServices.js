export const getAllSongs = async () => {
    try
    {
        const response = await fetch('http://localhost:8080/songs');
        const data = await response.json();
        return data;
    }
    catch(error)
    {
        console.error('Error fetching songs');
        return null;
    }
        
};

export const getAllGenres = async () => {
    try
    {
        const response = await fetch('http://localhost:8080/genre');
        const data = await response.json();
        return data;
    }
    catch(error)
    {
        console.error('Error fetching genres');
        return null;
    }
}