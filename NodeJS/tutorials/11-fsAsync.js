const {readFile, writeFile, readFileSync, writeFileSync, read, write} = require('fs')
const path = require('path')
console.log("Winter is Boring")

// readFile and writeFIle are asynchronous, allowing for the program to continue execution until the other process has completed 

// readSync and writeSync are syncronous, and will stop to execute the process before executing the rest of the code

readFile(path.join(__dirname, '/content/first.txt'), 'utf8', (err, result) => {
    if(err) {
        console.log(err)
        return
    }
    const first = result
    console.log(first)
    readFile(path.join(__dirname, '/content/first.txt'), 'utf8', (err, result) => {
        if(err) {
            console.log(err)
            return
        }
        const second = result
        console.log(second)
    })
})