const dotenv = requite('dotenv');
dotenv.config();
const { MongoClient } = require('mongodb');

let db;

const connectToDb = (callback) => {
    if (db) {
        console.log('Database is already initialized');
        return callback(null, db)
    }
    MongoClient.connect(process.env.MONGODB_URI)
        .then((client) => {
            db = client.db();
            callback(null, db);
        })
        .catch((err) => {
            callback(err);
        });
}

const getDb = () => {
    if (!db) {
        throw Error('Database not initialized');
    }
    return db;
}

module.exports = { connectToDb, getDb };