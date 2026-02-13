//how much file are iin the directory

const fs = require('fs')
const path = require('path');

const fileName = "fsPromise.txt";
const filePath = path.join(__dirname,__filename);

const file = __dirname;

fs.promises.readdir(file)
.then((data)=> console.log(data) )
.catch((err)=> console.log(err) )


// -------------------------------------------

//how

// const fs = require('fs')
// const path = require('path');

const fileName1 = __dirname;
fs.promises.readdir(fileName1)
.then((data)=> console.log(data))
.catch((err)=> console.log(err))
 

// ------------------------------------------------
//create 
// const fs = require('fs');
// const path = require('path')

// const fileName = "File1.txt";
// const filePath = path.join(__dirname,fileName);

// fs.promises.writeFile(filePath,'this is data of promise','utf-8',)
// .then( console.log('file created succesfully'))
// .catch((err)=> console.log(err))