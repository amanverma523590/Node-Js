import { readFile } from "fs/promises";
import { createServer } from "http";
import path, { join } from "path";
const PORT = 3002;

const serveFile = async (res,filepath,contenType) => {
  try {
    const data = await readFile (filepath);
    res.writeHead(200, { "Content-Type": contenType });
    res.end(data);
  } catch (error) {
    res.writeHead(404, { "Content-Type": contenType });
    res.end("404 Page Not Found");
  }
};

const server = createServer(async (req, res) => {
  console.log(req.url);

  if (req.method === "GET") {
    if (req.url === "/") {
        return serveFile(
            res,
            path.join("Public", "index.html"),"text/html"
        );
    } else if (req.method === "GET") {
      if (req.url === "/style.css") {
       return serveFile(
        res,
        path.join("Public","style.css"),"text/css"
       )
      }
    }
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
