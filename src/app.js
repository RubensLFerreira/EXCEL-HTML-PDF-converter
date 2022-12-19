const Reader = require("./controllers/Reader");
const Processor = require('./controllers/Processor');
const Table = require('./controllers/Table');

const reader = new Reader();

async function main() {
  const data = await reader.Read("../src/data/users.csv");
  const processedData = Processor.Process(data);
  // console.log(processedData);

  const users = new Table(processedData);
  console.log(users);
}

main();
