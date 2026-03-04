import { MongoClient } from "mongodb";

const client = new MongoClient('mongodb://127.0.0.1:27017');

await client.connect() // returns promise so we used top level await

const db = client.db('mongodb_nodejs_db'); // storing the database

const usersCollection = db.collection("users") // createing collection

usersCollection.insertOne({"Name":"Aman","City":"Bangalore"});
usersCollection.insertOne({"Name":"Sanam","City":"Kathmandu"}).then(console.log('done'))