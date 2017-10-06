const DbError    = require('./exception').DbError;
const {MongoClient}    = require('mongodb');
const promisify    = require('es6-promisify');

let _connection;

const connection = () => {
    if (!_connection) {
        _connection = connect();
    }

    return _connection;
};


/**
 * Returns a promise of a `db` object. Subsequent calls to this function returns
 * the **same** promise, so it can be called any number of times without setting
 * up a new connection every time.
 */
const connect = () => {
    if (!process.env.MONGO_CONNECTION_STRING) {
        throw new DbError('MongoDbError', 'Environment variable MONGO_CONNECTION_STRING must be set to use API.');
    }

    return promisify(MongoClient.connect)(process.env.MONGO_CONNECTION_STRING);
};

/**
 * Returns a ready-to-use `collection` object from MongoDB.
 *
 * Usage:
 *
 *   (await getCollection('users')).find().toArray().then( ... )
 */
const getCollection = async (collectionName) => {

    try {
        const db = await connection();
        return db.collection(collectionName);
    } catch (err) {
        throw new DbError('DatabaseError', err.toString());
    }
};

module.exports = {connect, getCollection};