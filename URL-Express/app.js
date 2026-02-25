import express from "express";
import {shortRoute} from "./Routes/shortner.route.js";

const app = express();

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = 3002;

app.use(shortRoute);

app.set("view engine", "ejs");

app.listen(PORT,()=>{
    console.log(`Server running at ${PORT}`)
})