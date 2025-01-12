// const http = require("http");

// console.log(http);
// const server = http.createServer((req, res) => {
//   console.log(req, "REq");
// });
// const port = 3030;

// server.listen(port, () => {
//   console.log(`server is running on port ${port}`);
// });

const http = require("http");
const server = http.createServer((req, res) => {
  console.log("res", res);
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World");
});

server.listen(3030, () => {
  console.log("server is running on port 3030");
});
