const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write("welcome brother")
        res.end();//sending data
    }

    if(req.url === '/source'){
        res.write('this is my source code ');
        res.end();
    }
    if(req.url === '/contact'){
        res.write('Name: Aman , ph:9483728923,mob no.9485455');
        res.end();
    }

}) // createSever method call kiya (like an event emmiter)



const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`Listening on PORT 3000`);
})



