var http = require('http')
var fs = require('fs')

http.createServer(function (req, res){

    fs.readFile('fs_marquee.html', function(err, data){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write(data)      
    })
}).listen(8080)
