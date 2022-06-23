// Listens to HTTP requests
// createServer function takes optional callback function as parameter
var server = http.createServer(function(request, response) {
    var body = "Hello World"
    // Callback function handles incoming request messages and provide responses
    // Anonymous callback function 
    response.writeHead(200, {
        'Content-Length': body.length, 
        'Content-Type': 'text/plain'
    })
    response.end(body)
})
// Listen to port 
server.listen(8080)