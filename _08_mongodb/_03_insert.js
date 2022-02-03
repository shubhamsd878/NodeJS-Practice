var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/'

MongoClient.connect(url, function (err, db){
    if (err) throw err;

    var dbo = db.db("mydb")
    // id must not start with 0
    myobj =[ 
        {
            _id: 2012,
            name: "Company",
            address: 'highway'
        },
        {
            _id: 2013,
            name: 'yash',
            address:'pahad'
        },
        {
            _id: 2015,
            name: 'anyun',
            address: 'triple-story'
        },
        {
            _id: 2016,
            name: 'Helicopter',
            address: 'helipad'
        },
        {
            _id: 2017,
            name: "Deepak",
            address: 'Ram Nagar'
        },
        {
            _id: 2018,
            name: 'Deepanshu',
            address:'pata-nahi'
        },
        {
            _id: 2019,
            name: 'Deepak',
            address: 'new-story'
        },
        {
            _id: 2020,
            name: 'Dino James',
            address: 'helipad'
        }
    ]
    
    dbo.collection('customers').insertMany(myobj, function(err, res){
        if (err) throw err;
        console.log( res.insertedCount +" document inserted ")
        
        // print res for response of input
        // why object file not printing 
        console.log(res)
        db.close()
    })
})  