//core modules of node.
//http:- Hyper Text Transfer Protocol
// https:- Hyper Text Transfer Protocol Secure
// fs:- File System
// path
// os

//creating our first node server

const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req);
  //   console.log(res);
});

server.listen(2000);
