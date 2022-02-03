// filter - limit search
var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017"

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    
    var dbo = db.db('mydb')
    // finding query only if the word is exactly-completey-full matching + case sensitive
    var query = {address: "pahad"}  

    // during query no findOne, findSome. i.e. only find
    dbo.collection('customers').find(query).toArray(function(err, result){
        if (err) throw err;
        console.log(result)
        db.close()
    })
})