const {readFileSync, writeFileSync} = require('fs')
const path = require('path')
console.log("Winter Is Here...")

const first = readFileSync(path.join(__dirname, '/content/first.txt'), 'utf8')
const second = readFileSync(path.join(__dirname, '/content/second.txt'), 'utf8')
const third = readFileSync(path.join(__dirname, '/content/first.txt'), 'utf8')

/*
ascii
base64
base64url (Node v14+)
hex
ucs2/ucs-2/utf16le/utf-16le
utf8/utf-8
binary/latin1 (ISO8859-1, latin1 only in node 6.4.0+)
*/

// https://nodejs.org/docs/latest/api/fs.html#file-system-flags for info on the file system flags
writeFileSync(path.join(__dirname, '/content/result-async.txt'), `Here is the result: ${first} \n${second}`, {flag: 'a'})
console.log("Task Completed")
console.log(third)
