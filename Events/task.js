
const EventEmmiter = require('events');
const emmiter = new EventEmmiter;
const fs = require('fs');


const eventCount = JSON.parse(  //parse string to object
    fs.readFileSync('data.json','utf-8')
)

//Login
emmiter.on('userLogin',(args)=>{
    eventCount['userLogin']++; 
    console.log(`userName is ${args.name}`)
})
//Purchase
emmiter.on('userPurchase',(args)=>{
    eventCount['userPurchase']++;
    console.log(`Item Purchase ${args.item}`)
})
//update 
emmiter.on('userUpdate',(args)=>{
    eventCount['userUpdate']++;
    console.log(`updated item is : ${args.update}`)
})
//Logout
emmiter.on('userLogout',(args)=>{
    eventCount['userLogout']++;
    console.log(`user loged out ${args.name}`)
})
//summarry 
emmiter.on('userSummary',()=>{
    console.log(eventCount)
})


//call
emmiter.emit('userLogin',{name : "Aman"})
emmiter.emit('userPurchase',{item :"Laptop"})
emmiter.emit('userUpdate',{update : 'Email'})
emmiter.emit('userLogout',{name : 'Aman'})
emmiter.emit('userSummary');

fs.writeFileSync(
    'data.json',
    JSON.stringify(eventCount,null,2) // null 2 are just for make llok good
)
console.log("updated count",eventCount)



