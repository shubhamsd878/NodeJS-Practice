// how to return next 5 elements
// limit --> limits no of documents to return
var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017"

MongoClient.connect(url, function(err, db){
    if (err) throw err;

    var dbo = db.db("mydb")

    // myquery 2 ways -->  , by assigning first letter
    

    // how to return next 5 elements
    dbo.collection("customers").find().limit(3).toArray(function(err, result){
        if(err) throw err
        // check what it is returning, on w3schools --> res.result.nModified . but not in my version
        console.log(result)
        db.close()
    })
})
