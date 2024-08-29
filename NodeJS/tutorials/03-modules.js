// CommonJS, every file is a module (by default)
// Modules -  Encapsulated code (only share the minimum)

const name = require('./04-names')
const message = require('./05-utils')
const data = require('./06-alternativeFlavor')
require('./07-mindGrenade')

console.log(name.Shakira)
message(name.Pitbull)
console.log(data.items[0])
console.log(data.marriedPerson)