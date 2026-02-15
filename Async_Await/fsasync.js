//reading all files present in the folder
// const fs = require('fs');
// const path = require('path');
// const filePath = __dirname;

// const readFile = async ()=>{
//     try{
//         const res = await fs.promises.readdir(filePath);
//         console.log(res)
//     }
//     catch(err) {
//         console.log(err)
//     }
// }
// readFile();


//▶️CRUD with Async Await

//Create 

// const fs = require('fs/promises');
// const path = require('path');

// const fileName = "file1.txt";
// const filePath = path.join(__dirname, fileName);

// const createFile =  async()=>{
//     try {
//       await  fs.writeFile(filePath,'This is data one changed \n new line added','utf-8');
//       console.log('file created succesfully');
//     } catch (error) {
//         console.log(error)
//     }
// }
// createFile();


//Read

// const fs = require('fs/promises');
// const path = require('path');

// const fileName = 'file1.txt';
// const filePath = path.join(__dirname,fileName);

// const readData = async ()=>{
//     try {
//        const data =  await fs.readFile(filePath,'utf-8');
//        console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }
// readData();

// update

// const fs = require('fs/promises');
// const path = require('path');

// const fileName = 'file1.txt';
// const filePath = path.join(__dirname,fileName);

// const updateFile = async ()=>{
//     try {
//         await fs.appendFile(filePath,"this is my new append data",'utf-8');
//         console.log('file updated successfully.....')
//     } catch (error) {
//         console.log(error)
//     }
// }
// updateFile();

//delete

// const fs = require('fs/promises');
// const path = require('path');

// const fileName = 'file1.txt';
// const filePath = path.join(__dirname,fileName);

// const deleteFile = async ()=>{
//     try {
//         await fs.unlink(filePathskjsj);
//         console.log('file deleted successfully')
//     } catch (error) {
//         console.log('ye kya bak rahe ho mc',error)
//     }
// }
// deleteFile();