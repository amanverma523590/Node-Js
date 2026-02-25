import {readFile,writeFile} from "fs/promises";
import crypto from "crypto";
import path from "path";
import { Router } from "express";

const router = Router();


const DATA_FILE = path.join("data", 'links.json')


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

router.get('/report',(req,res)=>{
    const student = {
        name : "aman",
        grade : "10th"
    }
    return res.render("report",{student});
})

router.get("/", async (req, res) => {
    try {
        const file = await readFile(path.join("views", "index.html"));
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
            return res.send(content)

    } catch (error) {
        console.log(error)
        return res.status(500).send("Internal Server Error")
    }
})

router.post("/", async (req, res) => {
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
});

router.get("/:shortCode",async (req,res)=>{
    try{
        const {shortCode} = req.params;
        const links = await loadLinks();

        if(!links[shortCode]){
            return res.status(404).send("404 error occured")
        }
        return res.redirect(links[shortCode]);
    }
    catch(err){
        console.log(err)
        return res.status(500).send("Internal server error");
    }
})

// export default router;
export const shortRoute = router;