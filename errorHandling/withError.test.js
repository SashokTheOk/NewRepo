const fetchWithError = require('./fetchWithError');

describe('fetchWithError', () => {
  it('повинен повернути повідомлення про помилку при невдалому запиті', async () => {
    const result = await fetchWithError();
    expect(result).toMatch(/^Error: .+/);
  });
});