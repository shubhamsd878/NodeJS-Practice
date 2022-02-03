var fs = require('fs')

// saved most outside opened folder
fs.appendFile("fs_append", "i am created appended text", function(err){
    if (err) throw err;
    console.log('!saved')
})