import {createReadStream, createWriteStream} from "fs";
import path from "path";

const inputFilePath = path.join(import.meta.dirname,"input.txt");
const outputFilePath = path.join(import.meta.dirname,"output.txt")

//reading file from input.txt
const readableStream = createReadStream(inputFilePath,{encoding:"utf-8",
    highWaterMark:16, //16 charcter read then load
});

//creating my output file + copying data
const writeableStream = createWriteStream(outputFilePath);

//listen for data chunk
readableStream.on("data",(chunk)=>{
    console.log("Buffer (chunk):", Buffer.from(chunk));
    console.log("Recieved Chunk",chunk)
    writeableStream.write(chunk)
})
//hanlde strean end
readableStream.on("end",()=>{
    console.log("File read complete");
    writeableStream.end();
})

// readableStream.pipe(writeableStream);  //conncet read to write

writeableStream.on("error",(err)=>{
    console.log("Error",err);
})
readableStream.on("error",(err)=>{
    console.log("Error",err);
})