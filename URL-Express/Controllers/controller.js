import crypto from "crypto";
import { loadLinks,saveLinks } from "../models/shortner.model.js";
import { readFile } from "fs/promises";
import path from "path";

export const getShortnerPage = async (req, res) => {
    try {
        const file = await readFile(path.join("views", "index.html"));
        const links = await loadLinks();

        const content = file.toString().replaceAll("{{shortend_url}}",
            Object.entries(links)
                .map(
                    ([shortCode, url]) =>
                        `<li><a href="/${shortCode}" target="_blank"> ${req.headers.host}/${shortCode}
              </a> -> ${url}
            </li>`
                )
                .join("")   // ⭐ IMPORTANT
        );
        return res.send(content)

    } catch (error) {
        console.log(error)
        return res.status(500).send("Internal Server Error")
    }
}

    export const postURLShortner = async (req, res) => {
        try {
            const { url, shortCode } = req.body;
            const links = await loadLinks();

            const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex");

            if (links[finalShortCode]) {
                return res.status(400).send("short code already exists");
            }

            links[finalShortCode] = url;
            await saveLinks(links);

            return res.redirect("/");
        } catch (error) {
            console.log(error);
            return res.status(500).send("Internal Server Error");
        }
    }

    export const redirectToShorLink =  async (req, res) => {
    try {
        const { shortCode } = req.params;
        const links = await loadLinks();

        if (!links[shortCode]) {
            return res.status(404).send("404 error occured")
        }
        return res.redirect(links[shortCode]);
    }
    catch (err) {
        console.log(err)
        return res.status(500).send("Internal server error");
    }
}