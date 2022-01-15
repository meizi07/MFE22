const axios = require('axios');
const { readFile } = require('fs/promises');


(async () => {
    try {
        // TODO: 從stock.txt中讀出檔案代碼
        let stockNo = await readFile('stock.txt', 'utf-8');
        console.log(stockNo);
        let queryDate = "20220110"; //TODO: 自動用今天的日期

        let response = await axios.get(
            "https://www.twse.com.tw/exchangeReport/STOCK_DAY", 
            {
                // 這裡可以放一些設定
                // params: 放 query string 的參數
                params: {
                    response: "json",
                    date: queryDate,
                    stockNo,
                },
            }
        );
        console.log(response.data);
    } catch (e) {
        console.error(e);
    }
})();