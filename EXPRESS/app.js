// //PORT and ZOD

// import express from 'express';
// import {PORT} from "./env.js";

// const app = express();

// // const PORT = process.env.PORT || 3000 ;

// app.get("/", (req,res)=>{
//     res.send("<h1>Hellow world</h1>")
// })
// app.get("/about", (req,res)=>{
//     res.send("<h1>Hellow About Page</h1>")
// })
// app.get("/contact", (req,res)=>{
//    return res.send(` <div class="box">
//     <h1 class="heading">URL Shortner</h1>
//     <form id="form">
//       <div>
//         <label for="url">Enter URL :</label>
//         <br>
//         <input type="url" id="url" name="url" required placeholder="enter url">
//       </div> <br>
//       <div>
//         <label for="shortCode">Enter Shortcode :</label> <br>
//         <input type="text" id="shortCode" name="shortCode" required placeholder="enter shortcode">
//       </div>
//       <button type="submit" class="btn">Shorten</button>
//     </form>

//     <h2>Shortend URLs</h2>

//     <ul id="shortend-url">

//     </ul>`)
// })

// app.listen(PORT, ()=>{
//     console.log(`Server running at port: ${PORT}`)
// })


//sending html and css in express

// import express from "express";
// import {PORT} from "./env.js";
// import path from "path"

// const app = express();

// const staticPath = path.join(import.meta.dirname,"public");
// app.use(express.static(staticPath));
// // app.use(express.static("public"))

// app.get("/",(req,res)=>{
//   // console.log(`dirname is`,import.meta.dirname);
//   // console.log(`url is`,import.meta.url);
//   // const __filename = new URL(import.meta.url).pathname;
//   // console.log(__filename) //getting absolute path
//   // console.log(PORT)

//   // const homePagePath =  path.join(import.meta.dirname,"public", "index.html")

//   // res.sendFile(homePagePath)
// })


// app.listen(PORT,()=>{
//   console.log(`Server starting at ${PORT}`);
// });

//top level await

// import express from "express";
// import {PORT} from './env.js'
// import path from "path"

// const app = express();

// const staticPath = path.join(import.meta.dirname,"public");
// app.use(express.static(staticPath))

// // const response = await fetch(`https://fakestoreapi.com/products`)
// // const data = await response.json();
// // console.log(data);

// console.log(import.meta.dirname)
// console.log(import.meta.filename )

// app.listen(PORT,()=>{
//   console.log(`Server running at ${PORT}`)
// })

// ▶️▶️▶️⛔⛔⛔⛔Route Parameter


import express from "express";
import {PORT} from "./env.js"

const app = express();

app.get("/",(req,res)=>{
  res.send('hiii')
});

app.get("/profile/:username",(req,res)=>{
  console.log(req.params)
  res.send(`<h1>My username is ${req.params.username}</h1>`);
})
app.get("/profile/:username/article/:plug",(req,res)=>{
  const formatPlug = req.params.plug.replace(/-/g, " ")
  res.send(`<h1>My slug is ${formatPlug} and my name is ${req.params.username}</h1>`)
})

app.listen(PORT, ()=>{
  console.log(`listening on port ${PORT}`);
})