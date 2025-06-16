const axios = require('axios');

test ("get incorrect URL", async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/incorrect-url')
}
)
console.log(response.data);
expect(response.status).toBe(404);