const { readFile } = require("fs");
let readfilePromise = new Promise((resolve, reject) => {
    readFile("test.txt", "utf-8", (err, data) => {
        if (err) {
            reject(err);
            return;
        }
        resolve(data);
        // insert to myasql
    })
});
console.log(readfilePromise);
readfilePromise.then((result) => {
    //接住resolve的結果
    console.log(`這裡是 Promise 的 result: ${result}`)

    // insert data to db
}).catch((err) => {
    console.log(`這裡是 Promise 的 catch:)`, err)
})


readfilePromise
    .then((result) => {
        //接住resolve的結果
        console.log(`這裡是 Promise 的 result: ${result}`)

        // insert data to db
    })
    .catch((err) => {
        console.log(`這裡是 Promise 的 catch:)`, err)
    })