const axios = require('axios');
const { fetchData } = require('./api');

// Мокаємо axios.get
jest.mock('axios');

describe('fetchData', () => {
  it('should make GET request with custom headers and URL params', async () => {
    const baseUrl = 'https://example.com/api';
    const params = { search: 'test', page: 2 };
    const headers = { Authorization: 'Bearer test-token', 'X-Custom-Header': 'MyHeaderValue' };

    const mockResponse = { data: { result: 'success' } };
    axios.get.mockResolvedValue(mockResponse);

    const result = await fetchData(baseUrl, params, headers);

    // Перевірка правильності виклику axios.get
    expect(axios.get).toHaveBeenCalledWith(baseUrl, {
      params: params,
      headers: headers,
    });

    // Перевірка повернених даних
    expect(result).toEqual(mockResponse.data);
  });
});