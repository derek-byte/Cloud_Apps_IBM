// Look for .js file named today or directory with index.js 
var today = require('./today')

// Call function from Noed.js file
console.log("Happy %s!", today.dayOfWeek())

// PARSING JSON
// JSON.parse() and JSON.stringify() are two methods used to handle JSON objects
var json = '{"result":true, "count":42}'
obj = JSON.parse(json)
// Output: 42
console.log(obj.count)
// Output: true
console.log(obj.result)
