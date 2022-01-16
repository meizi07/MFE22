const http = require("http"); // nodejs內建的模組，不用安裝
require("dotenv").config();

const server = http.createServer(function (request, response) {
  // TODO: 怎麼處理 request, 要負責回復 response
  // status code

  response.statusCode = 200;
  const path = request.url;
  console.log(path);

  switch (path) {
    case "/":
      response.end("Hello, Server EFG");
      break;
    case "/about":
      response.end("Hello, Server EFG");
      break;
    default:
        response.statusCode = 404;
        response.end();
  }
});

// 做預設值
let port = process.env.SERVER_PORT || 3000;
server.listen(port, () => {
  console.log(`簡易版 server 已經啟動，在 port ${port} 上`);
});
