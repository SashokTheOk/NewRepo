async function getTodo() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const todo = await response.json();
    return todo;
  } catch (error) {
    console.error("Error fetching todo:", error);
    throw error;
  }
}


async function getUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const user = await response.json();
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error; 
  }
}

async function main() {
  console.log("Запускаємо запити...");

  try {
    const [todoAll, userAll] = await Promise.all([getTodo(), getUser()]);
    console.log("\nResult of Promise.all:");
    console.log("Todo (Promise.all):", todoAll);
    console.log("User (Promise.all):", userAll);
  } catch (error) {
    console.error("\nError during running Promise.all:", error);
  }

  try {
    const fastestResult = await Promise.race([getTodo(), getUser()]);
    console.log("\nResult of Promise.race (fastest):");
    console.log("Fastest result:", fastestResult);
  } catch (error) {
    console.error("\nError during running Promise.race:", error);
  }
}

main();