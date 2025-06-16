const axios = require('axios');

async function fetchData(baseUrl, params, headers) {
  try {
    const response = await axios.post(baseUrl, {
      params: params,
      headers: headers,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

module.exports = { fetchData };