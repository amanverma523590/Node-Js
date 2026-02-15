
const EventEmmiter = require ('events');  //here we are getting class not module so use 
// pascal case

const emmiter = new EventEmmiter(); //eventemmiter class name

emmiter.on('greet',(arg)=>{
    console.log(`hii ${arg.name} and number is ${arg.number}`)
})
emmiter.emit('greet',{name : "aman", number: 5});


