// /stock-fe/routes/stock.js
// 這裡是 stock 的 router
const express = require("express");
const router = express.Router();

const connection = require("../utils/db");


// RESTful API 的列表
router.get("/", async (req, res, next) => {
  let [data, fields] = await connection.execute("SELECT * FROM stocks");
  console.log(data);
  // res.send ==> 純文字
  // res.render ==> server-side render 會去找樣板
  res.json(data);
});

router.get("/:stockId", async (req, res, next) => {
  // req.params.stockId
  // req.query.page <- 第幾頁
  // /api/stock/:stockId?page=

  // 取得目前在第幾頁
  // 如果沒有設定req.query.page，那就設成1
  let page = req.query.page || 1;
  console.log("aaaa", page);

  // TODO: 取得目前總筆數
  let [total] = await connection.execute(
    "SELECT COUNT(*) AS total FROM stock_prices WHERE stock_id=?",
    [req.params.stockId]
  );
  console.log("bbb", total); // [{total: 15}] 物件型別
  total = total[0].total; // total = 15 轉換成數字型別

  // TODO: 計算總共要有幾頁
  const perPage = 3; // 一頁三筆
  const lastPage = Math.ceil(total / perPage); // 計算總共有幾頁，ceil無條件進位

  // TODO: 計算SQL要用的offset
  // TODO: 取得資料
  // SELECT * FROM stock_prices WHERE stock_id=? ORDER BY date LIMIT 3 OFFSET ?
  let offset = (page - 1) * perPage;
  let [data] = await connection.execute(
    "SELECT * FROM stock_prices WHERE stock_id=? ORDER BY date LIMIT ? OFFSET ?",
    [req.params.stockId, perPage, offset]
  );

  // TODO: 準備要 response
  res.json({
    pagination: { total, perPage, page, lastPage },
    data,
  });
});

module.exports = router;
