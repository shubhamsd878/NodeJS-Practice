var http = require('http')
var url = require('url')

http.createServer(function (req, res){
    
    res.writeHead(200, {'Content-Type':"text/html"})    // if response was in html
    // var text = req.date + " " + req.something
    // res.write(text)
    
    // 
    var q = url.parse(req.url, true).query
    res.write(q.year + " " + q.month)
    // res.write("hello world\n")
    // res.write(req.url)
    res.end();
}).listen(8080)