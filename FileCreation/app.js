import readline from 'readline';
import fs from 'fs'


const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const fileCreation = ()=>{
    rl.question("Enter the fileName " , (filename)=>{
        rl.question("Enter Content ", (content)=>{
            fs.writeFile(`${filename}.txt`,content,"utf-8",(err)=>{
                if(err){
                    console.log(`Error writing file`,err)
                }else{
                    console.log(`File "${filename}.txt" created succesfuly`)
                }
                rl.close();
            })
        })
    });

}
fileCreation();