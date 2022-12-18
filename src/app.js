const Reader = require("./controllers/Reader");
const Processor = require('./controllers/Processor');

const reader = new Reader();

async function main() {
  const data = await reader.Read("../src/data/users.csv");
  const processedData = Processor.Process(data);
  console.log(processedData);
}

main();
