// #for reading with CLI

import readline from 'readline'

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

//yaha be array aygea jisme task ayega
const todos = [];

const showMenu = ()=>{
    console.log("\n 1)Add a Task");
    console.log("\n 2)View Task");
    console.log("\n 3)Exit");

    //environment create to select option 
    rl.question("Choose an Option ", handleInput) //terminal me question kare 2 argument question and function
}

const handleInput = (option)=>{  //options
    if(option === "1"){
        rl.question("Enter the Task ",(task)=>{
            todos.push(task);
            console.log("Task added : ",task);
            showMenu();
        })
    }
    else if( option==="2" ){
        console.log("\n Your Todo Taks ")
        todos.forEach( (task,index)=>{
            console.log(`${index+1}. ${task}`)
        } )
        showMenu();
    }
    else if(option==="3"){
        console.log("\n GoodBye ");
        rl.close();
    }
    else{
        console.log("Invalid Option ");
        showMenu();
    }
}

showMenu();