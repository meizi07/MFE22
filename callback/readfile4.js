// async 版本
const { readFile } = require("fs/promises");
(async ()=>{
    try{
    let result = await readFile("test.txt", "utf-8");
    console.log(`這是內建的 promise版本 ${result}`);
    } catch(err){
        console.error(err);
    }
})();