const fs = require("fs/promises");
const path = requir("path");

// __dirname 是程式碼所在的目錄
console.log("second.js", __dirname);

fs.readFile(path.join(__dirname,".."), "utf-8").then((result) => {
  console.log(result);
});
