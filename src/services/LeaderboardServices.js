// LeaderboardServices.js

async function fetchLeaderboardData() {
    try {
        const response = await fetch('http://localhost:5000/leaderboard');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching leaderboard data:', error);
        return [];
    }
}

export default fetchLeaderboardData;
