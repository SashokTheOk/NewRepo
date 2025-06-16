const axios = require('axios');

/**
 * Робить GET-запит із кастомними заголовками та параметрами.
 *
 * @param {string} baseUrl - Базова URL-адреса (наприклад, https://example.com/api)
 * @param {object} params - Об'єкт параметрів запиту (наприклад, { search: 'test' })
 * @param {object} headers - Об'єкт заголовків (наприклад, { Authorization: 'Bearer token' })
 * @returns {Promise<object>} - Дані з відповіді сервера
 */
async function fetchData(baseUrl, params, headers) {
  try {
    const response = await axios.get(baseUrl, {
      params: params,
      headers: headers,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

module.exports = { fetchData };