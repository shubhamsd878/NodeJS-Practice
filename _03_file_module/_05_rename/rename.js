var fs = require('fs')

fs.rename('fs_writeFile', 'fs_writedFile_renamed', function(err){
    if (err) throw err;
    console.log("File Renamed Successfully")
})