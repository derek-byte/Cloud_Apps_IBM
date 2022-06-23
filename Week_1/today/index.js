// Every Node.js file needs a package.json file 

var date = new Date()
var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

// exports needed to make function or value available to node.js app
exports.dayOfWeek = function () {
    return days[date.getDay() - 1];
}