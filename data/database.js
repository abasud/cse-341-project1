const { MongoClient } = require('mongodb');
require ('dotenv').config()

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

async function connectDB(app) {
    
        await client.connect();
        console.log("Successfully connected to MongoDB");
        
        const database = client.db('project1');
        
        app.locals.db = database; 
}

module.exports = connectDB;