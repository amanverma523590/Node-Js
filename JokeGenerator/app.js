

//if u want to deal with API in node js then impoort https

import https from 'https'
import chalk from 'chalk'
import { error } from 'console';

const getJoke = () =>{
    const url = "https://official-joke-api.appspot.com/random_joke";

    https.get(url,(response)=>{ //.get method give object incoming msg we can call respone her data,end,error
        let data = " "
        response.on('data',(chunk)=>{  //data mil raha hai as chunk
            data += chunk;
        })
        response.on('end',()=>{  //no more data left so end connection
            const joke = JSON.parse(data);
            // console.log(joke) give 3 type, setup puchline
            console.log(`Here is a Random ${joke.type} Joke : `);
            console.log(chalk.red(`${joke.setup}`));
            console.log(chalk.blue.bgRed.bold(`${joke.punchline}`))
        })  
        response.on('error', ()=>{
            console.log(`Failed to connect`,error)
        })
    })
}

getJoke();