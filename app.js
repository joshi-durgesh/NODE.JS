//Sending Response

const http = require("http");
const server = http.createServer((req, res) => {
  //   console.log(req.url, req.method, req.headers);
  res.setHeader("Context-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Node.js</title></head>");
  res.write(
    "<body><h1>Hello this is created form our node.js server</h1></body>"
  );
  res.write("</html>");
  res.end(); //after res.end() if we write res.write then node is gonna throw error
});

server.listen(2000);
