//Routing requests :- working
//Redirecting requests
//Parsing requests

const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Home page</title></head>");
    res.write("<body><h1>This is home route</h1></body>");
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Context-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>server page</title></head>");
  res.write("<body><h1>Hellow from node.js server</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);

//doing this we will get error cannot set headers after they are sent to the client
//to resolve this we have to add return before the res.end();
