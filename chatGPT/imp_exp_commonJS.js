// how to export and import js file using common js in node environment ?
// --------------------------
// To export a JavaScript module in CommonJS format in a Node.js environment, you can use the module.exports or exports object.

// For example, if you have a file called myModule.js that contains the following:

// Copy code
function myFunction() {
    console.log("Hello, World!");
}

module.exports = myFunction;


// You can then import this module in another file using the require() function:

// Copy code
const myModule = require('./myModule');
myModule(); // outputs "Hello, World!"


// You can also export multiple functions or variables by attaching them to the exports object:

// Copy code
exports.function1 = function() {};
exports.function2 = function() {};
exports.variable1 = "hello";


// and import them in another file like this:

// Copy code
const { function1, function2, variable1 } = require('./myModule');


// You can also use module.exports to export an object with multiple properties:

// Copy code

module.exports = {
  function1: function() {},
  function2: function() {},
  variable1: "hello"
};


// and import it in another file like this:

// Copy code
const myModule = require('./myModule');
