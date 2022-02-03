
var fs = require('fs')

fs.writeFile('fs_writeFile', "this is written from write file", function(err){
    if (err) throw err;
    console.log('!saved')
})