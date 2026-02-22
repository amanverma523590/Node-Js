import express from 'express';

const app = express();

const PORT = 3004;

app.get("/", (req,res)=>{
    res.send("<h1>Hellow world</h1>")
})
app.get("/about", (req,res)=>{
    res.send("<h1>Hellow About Page</h1>")
})
app.get("/contact", (req,res)=>{
   return res.send(` <div class="box">
    <h1 class="heading">URL Shortner</h1>
    <form id="form">
      <div>
        <label for="url">Enter URL :</label>
        <br>
        <input type="url" id="url" name="url" required placeholder="enter url">
      </div> <br>
      <div>
        <label for="shortCode">Enter Shortcode :</label> <br>
        <input type="text" id="shortCode" name="shortCode" required placeholder="enter shortcode">
      </div>
      <button type="submit" class="btn">Shorten</button>
    </form>

    <h2>Shortend URLs</h2>

    <ul id="shortend-url">

    </ul>`)
})

app.listen(PORT, ()=>{
    console.log(`Server running at port: ${PORT}`)
})