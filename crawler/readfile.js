const {readFile} = require ("fs/promises");

(async() => {
    let result = await readFile("stock.txt", "utf-8");
    result = result.split("\r");
    console.log(result);
})();

// \r & \n 在txt文件中是換行文字