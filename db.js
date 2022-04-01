var mongoClient = require("mongodb").MongoClient;

mongoClient.connect("mongodb://localhost/workshoptdc")
.then(conn => global.conn = conn.db("workshoptdc"))
.catch(err => console.log(err))

function findAll(){
    global.conn.collection("filmes").find().toArray();
    }

function insert(customer){
     global.conn.collection("filmes").insertOne(customer);
     }    

const ObjectId  = require("workshoptdc").ObjectId;

function findOne(id) {
    return global.conn.collection("filmes").findOne(new ObjectId(id));
        }

function update(id, customer){
     global.conn.collection("filmes").updateOne({_id:new ObjectId(id)}, customer);
}


function deleteOne(id){
    global.conn.collection("filmes").deleteOne({_id: new ObjectId(id)});
    }
    module.exports = { findAll, insert, findOne, update, deleteOne }

