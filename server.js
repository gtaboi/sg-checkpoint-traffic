// Minimal static server so the page runs on http://localhost.
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 5174;
const TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css" };

http.createServer((req, res) => {
  const name = req.url === "/" ? "index.html" : path.basename(req.url.split("?")[0]);
  fs.readFile(path.join(__dirname, name), (err, data) => {
    if (err) { res.writeHead(404); return res.end("Not found"); }
    res.writeHead(200, { "Content-Type": TYPES[path.extname(name)] || "application/octet-stream" });
    res.end(data);
  });
}).listen(PORT, () => console.log(`SG checkpoint traffic: http://localhost:${PORT}`));
