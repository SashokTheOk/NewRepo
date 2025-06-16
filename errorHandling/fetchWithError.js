const axios = require('axios');

async function fetchWithError() {
  try {
    const response = await axios.get('https://invalid.url.example.com/data');
    return response.data;
  } catch (error) {
    return `Error: ${error.message}`;
  }
}

module.exports = fetchWithError;