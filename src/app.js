const Reader = require("./controllers/Reader");

const reader = new Reader();

async function main() {
  const dates = await reader.Read("../src/dates/users.csv");

  console.log(dates);
}

main();
