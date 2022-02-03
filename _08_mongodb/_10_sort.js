var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017'

MongoClient.connect(url, function(err, db){
    if (err) throw err

    var dbo = db.db('mydb')
    
    // first showing capital letters name then lowercase letters. 

    var mysort = { name: 1}      // for ascending order
    // var mysort = {name: -1}     // for descending order
    
    dbo.collection('customers').find().sort(mysort).toArray(function (err, result){
        if(err) throw err;
        console.log(result)
        db.close()          //without db.close() the terminal not closing automatically
    })
    
})