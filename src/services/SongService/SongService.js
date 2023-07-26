export const getSong = async (songID) => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }

    try {
        const response = await fetch(`http://localhost:8080/song/${songID}`, options);

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching song:', error);
        return null;
    }
}