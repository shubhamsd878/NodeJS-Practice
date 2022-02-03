// Note: database not visible, until some document not inserted
// var mongo = require('mongodb')
var MongoClient = require('mongodb').MongoClient
// don't know from where the url come, copied from w3schools example
var url ="mongodb://localhost:27017/mydb"

MongoClient.connect(url, function (err, db){
    if(err) throw err;
    console.log("Database Created")
    db.close()
})