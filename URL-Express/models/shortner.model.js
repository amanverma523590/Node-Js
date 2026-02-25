import { readFile, writeFile } from "fs/promises";
import path from "path";

const DATA_FILE = path.join("data", 'links.json')

export const loadLinks = async () => {
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

export const saveLinks = async (links) => {
    await writeFile(DATA_FILE, JSON.stringify(links)) //beacus links is object
}