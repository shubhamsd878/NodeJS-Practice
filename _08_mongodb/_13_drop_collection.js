var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017"

MongoClient.connect(url, function(err, db){
    if(err) throw err;

    var dbo = db.db('mydb')
    // 2 ways to drop
    
    // 1. Simple using collection
    dbo.collection('customer').drop(function(err, delOK){
        if (err) throw err
        if (delOK) console.log('Collection Dropped Successfully')
        dbo.close()
    })

})