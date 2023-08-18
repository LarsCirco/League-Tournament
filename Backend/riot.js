

const axios = require('axios');

const RIOT_API_KEY = ''; 
const BASE_URL = 'https://americas.api.riotgames.com/lol/tournament-stub/v4';

async function registerProvider(region, callbackUrl) {
    try {
        const response = await axios.post(`${BASE_URL}/providers`, {
            region: region,
            url: callbackUrl
        }, {
            headers: {
                'X-Riot-Token': RIOT_API_KEY
            }
        });
        
        return response.data;
    } catch (error) {
        console.error("Error registering provider:", error.response ? error.response.data : error.message);
        return null;
    }
}

module.exports = {
    registerProvider
};