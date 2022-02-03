var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017'

MongoClient.connect(url, function(err, db){
    if(err) throw err
    var dbo = db.db('mydb')
    dbo.collection('customers').find({}, {projection: {address: 1}}).toArray(function(err, result){
        if (err) throw err
        // result[2] will ouput 3rd form array of result
        console.log(result)
        console.log(result[2])
        db.close()
    })
})