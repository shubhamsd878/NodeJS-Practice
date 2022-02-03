var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017"

MongoClient.connect(url, function(err, db){
    if (err) throw err;

    var dbo = db.db("mydb")

    // myquery 2 ways -->  , by assigning first letter
    var myquery = {name: "deepak"}
    var newvalue = { $set : {name: "harry"}}

    // update 2 ways --> updateOne, updateMany
    dbo.collection("customers").updateMany(myquery, newvalue, function(err, res){
        if(err) throw err
        // check what it is returning, on w3schools --> res.result.nModified . but not in my version
        console.log('all documents updated')
        db.close()
    })
})


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   var myquery = { name: 'Deepak' };
//   var newvalues = {$set: {name: "Harry"} };
//   dbo.collection("customers").updateMany(myquery, newvalue, function(err, res){
    // if (err) throw err
//     console.log(" document(s) updated");
//     db.close();
//   });
// });