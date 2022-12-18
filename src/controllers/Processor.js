class Processor {
  static Process(data) {
    const array = data.split("\r\n");
    const rows = [];

    array.forEach((row) => {
      let arr = row.split(",");
      rows.push(arr);
    });
    return rows;
  }
}

module.exports = Processor;
