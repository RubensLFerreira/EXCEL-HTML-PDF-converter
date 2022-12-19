const Reader = require("./controllers/Reader");
const Processor = require("./controllers/Processor");
const Table = require("./controllers/Table");
const HtmlParser = require("./controllers/HtmlParser");

const reader = new Reader();

async function main() {
  const data = await reader.Read("../src/data/users.csv");
  const processedData = Processor.Process(data);

  const users = new Table(processedData);
  const html = await HtmlParser.Parse(users);
}

main();
