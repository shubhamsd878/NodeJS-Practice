var fs = require('fs')

fs.unlink('myNewFile1.txt', function(err){
    if (err) throw err
    console.log("File deleted successfully")
})