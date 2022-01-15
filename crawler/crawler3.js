const axios = require('axios');
const { readFile } = require('fs/promises');
const moment = require('moment');


(async () => {
    try {
        // TODO: 從stock.txt中讀出檔案代碼
        let stockNo = await readFile('stock.txt', 'utf-8');
        console.log(stockNo);
        // let queryDate = moment().format("YYYYMMDD") //用moment.js
        let queryDate = new Date(); //TODO: 自動用今天的日期
        const date = queryDate.getDate();
        const month = queryDate.getMonth();
        const year = queryDate.getFullYear();
        const today = year+month+date;
        let response = await axios.get(
            "https://www.twse.com.tw/exchangeReport/STOCK_DAY", 
            {
                // 這裡可以放一些設定
                // params: 放 query string 的參數
                params: {
                    response: "json",
                    date: today,
                    stockNo,
                },
            }
        );
        console.log(response.data);
    } catch (e) {
        console.error(e);
    }
})();