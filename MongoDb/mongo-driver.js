import { MongoClient } from "mongodb";

const client = new MongoClient('mongodb://127.0.0.1:27017');

await client.connect() // returns promise so we used top level await

const db = client.db('mongodb_nodejs_db'); // storing the database

const usersCollection = db.collection("users") // createing collection


//⛔⛔▶️▶️Create
// usersCollection.insertOne({"Name":"Aman","City":"Bangalore"});
// usersCollection.insertOne({"Name":"Sanam","City":"Kathmandu"}).then(console.log('done'))

// usersCollection.insertMany([ 
//     {"Name":"Sahil","City":"Dubai"},
//     {"Name":"Raj","City":"bangalore"} 
// ]).then(console.log("done"))


//▶️▶️⛔⛔Read
// const user = usersCollection.find();
// console.log(user)  // returns objects so use for of loop

// for await (const students of user){
//     console.log(students)
// }

//find

// const users =await usersCollection.findOne({Name:"Raj"});
// console.log(users)
// console.log(users._id.toHexString())


//⛔⛔👉👉Update

// await usersCollection.updateOne( {Name:'Aman'},{$set:{Name:"Chaman"}} )


//👉⛔⛔Delete

await usersCollection.deleteOne({Name:'Sanam'})