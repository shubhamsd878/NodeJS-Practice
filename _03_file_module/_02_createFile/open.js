// where file is opened
var fs = require('fs')

fs.open("fs_open", 'w', function(err){
    if (err) throw err
    console.log("!saved")
})