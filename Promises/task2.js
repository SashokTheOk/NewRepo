function fetchTodo() {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(todo => {
      console.log('Todo fetched successfully:', todo);
      return todo; 
    })
    .catch(error => {
      console.error('Error fetching todo:', error);
      throw error; 
    });
}

function fetchUser() {
  return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(user => {
      console.log('User fetched successfully:', user);
      return user; 
    })
    .catch(error => {
      console.error('Error fetching user:', error);
      throw error; 
    });
}

async function runPromises() {
  console.log('\n--- Running Promise.all ---');
  let allResults;
  try {
    allResults = await Promise.all([fetchTodo(), fetchUser()]);
    console.log('Promise.all results:', allResults);
  } catch (error) {
    console.error('Promise.all encountered an error:', error);
  }

  console.log('\n--- Running Promise.race ---');
  let raceResult;
  try {
    raceResult = await Promise.race([fetchTodo(), fetchUser()]);
    console.log('Promise.race result (first settled):', raceResult);
  } catch (error) {
    console.error('Promise.race encountered an error:', error);
  }
}
runPromises()