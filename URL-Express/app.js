import { readFile, writeFile } from "fs/promises";
import { createServer } from "http";
import path, { join } from "path";
import crypto from "crypto";
import express from { express }
import fs from "fs/promises"


const app = express();


app.use(express.static("public"))

const PORT = 3002;
const DATA_FILE = path.join("data", 'links.json')

const serveFile = async (res, filepath, contentType) => {
    try {
        const data = await readFile(filepath);
        res.writeHead(200, { "Content-Type": contentType });
        res.end(data);
    } catch (error) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Page Not Found");
    }
};

const loadLinks = async () => {
    try {
        const data = await readFile(DATA_FILE, "utf-8");
        return JSON.parse(data); //convert json into js object
    } catch (error) {
        if (error.code === "ENOENT") {  //ENOENT file doesn't exist
            await writeFile(DATA_FILE, JSON.stringify({})) //an empty object wo convert hojaega json me
            return {};
        }
        throw error;
    }
}

const saveLinks = async (links) => {
    await writeFile(DATA_FILE, JSON.stringify(links)) //beacus links is object
}

app.get("/", async (req, res) => {
    try {
        const file = await fs.readFile(path.join("views", "index.html"));
        const links = await loadLinks();

          const content = file.toString() .replaceAll("{{shortend_url}}",
                Object.entries(links)
                    .map(
                        ([shortCode, url]) =>
                            `<li><a href="/${shortCode}" target="_blank"> ${req.headers.host}/${shortCode}
             </a> -> ${url}
           </li>`
                    )
                    .join("")   // ⭐ IMPORTANT
            );

    } catch (error) {
        console.log(error)
        return res.status(500).send("Internal Server Error")
    }
})

app.post("/", async (req, res) => {
    try {
        const { url, shortCode } = req.body(body);
        const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex");

        if (links[finalShortCode]) {
            return res.status(400).send("short code already exists")
        }
        links[finalShortCode] = url;
        await saveLinks(links);
    } catch (error) {

    }
})

const server = createServer(async (req, res) => {
    console.log(req.url);

    if (req.method === "GET") {
        if (req.url === "/") {
            return serveFile(res, path.join("Public", "index.html"), "text/html");
        } else if (req.url === "/style.css") {
            return serveFile(res, path.join("Public", "style.css"), "text/css");
        } else if (req.url === "/links") {
            const links = await loadLinks();
            res.writeHead(200, { "Content-Type": "application/json" });
            return res.end(JSON.stringify(links));
        } else {
            const links = await loadLinks();
            const shortCode = req.url.slice(1);  // to remove / "/google"
            // console.log("link redirect",req.url)
            if (links[shortCode]) {
                res.writeHead(302, { location: links[shortCode] });
                return res.end();
            }
            res.writeHead(404, { "Content-Type": "text/plain" });
            return res.end("Shortend URL not found");
        }
    }


});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
