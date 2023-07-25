// Function to fetch artist information by ID
export const fetchArtistById = async (id) => {

    try { 
        const response = await fetch(`http://localhost:5000/artist/${id}`);

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching artist:', error);
        return null;   
    }
};

export const getAllSongs = async () => {
    try
    {
        const response = await fetch('http://localhost:5000/songs');
        const data = await response.json();
        return data;
    }
    catch(error)
    {
        console.error('Error fetching songs');
        return null;
    }
        
};

export const deleteSong = async (id) => {
    try
    {
        const deleteOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const response = await fetch(`http://localhost:5000/delete/song/${id}`, deleteOptions);
        const data = await response.json();
        return data;
    }
    catch(error)
    {
        console.error('Error fetching songs');
        return null;
    }
}

