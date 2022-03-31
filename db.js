var mongoClient = require("mongodb").MongoClient;

mongoClient.connect("mongodb://localhost/workshoptdc")
.then(conn => global.conn = conn.db("workshoptdc"))
.catch(err => console.log(err))

function findAll(callback){
    global.conn.collection("filmes").find
    ({}).toArray(callback);
    }

function insert(customer, callback){
     global.conn.collection("filmes").insertOne(customer);
     }    

function findOne(id) {
    return global.conn.collection("filmes").findOne(new ObjectId(id));
        }

function update(id, customer, callback){
     global.conn.collection("filmes").updateOne({_id:new ObjectId(id)}, customer, callback);
}


function deleteOne(id, callback){
    global.conn.collection("filmes").deleteOne({_id: new ObjectId(id)}, callback);
    }
    module.exports = { findAll, insert, findOne, update, deleteOne }

