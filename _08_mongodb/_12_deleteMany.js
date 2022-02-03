var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017"

MongoClient.connect(url, function(err, db){
    if(err) throw err;

    var dbo = db.db('mydb')
    var mysort = { name: 1}

    // if query is to search names with first letter D, then delete all letters
    var query = {name: /^y/}


    // deleteMany --> delete all appearances
    dbo.collection("customers").deleteMany(query, function(err, obj){
        if (err) throw err
        console.log(obj.result.n +" deleted succesfully")
        // db.close()
    })

    // also output sorted data  
    dbo.collection('customers').find().sort(mysort).toArray(function(err, result){
        if (err) throw err
        console.log(result)
        db.close()
    })
})