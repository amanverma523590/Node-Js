// const {add,sub} = require("./math")

// console.log(add(5,10));
// console.log(sub(5,10));

// *------------------------------------------------------------------*

// const os = require('os');


// console.log('Type',os.type());
// console.log('Platform',os.platform());
// console.log('Architecture',os.arch());
// console.log('Relase',os.release());
// console.log('Version',os.version());
// console.log('Machine',os.machine());
// console.log('Freemem',os.freemem());
// console.log('Totalmem',os.totalmem());


// *--------------------------------------------------------------------*
//create file

const fs = require('fs');
fs.unlinkSync('File4.txt')
// fs.appendFile('File1.txt','naya data without override ?','utf-8',(err,data)=>{
//     if(err) throw err;
//     console.log('data writeen succesfully')
// })
// const fs = require('fs');

// fs.appendFile('./File2.txt','This is File 2 content \n', (err,data)=>{
//     if(err) throw err;
//     console.log('data written succesfuly')
// })

//file apne ap bana dega...aur content likh dega

//read file

// const fs = require('fs')

// fs.readFile('./File3.txt', 'utf-8',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data);
// })

//comibining data 1 and 2

// const fs = require('fs')

// const data1 = fs.readFileSync('./File2.txt','utf-8');
// const data2 = fs.readFileSync('./File3.txt','utf-8');
// fs.writeFileSync('./File4.txt', `${data1} ${data2}`);
// console.log('Done')