const {readFile, writeFile} = require('fs')

console.log('Started the first task')
//Check your file path
readFile('../content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(result)
    console.log('Finished the first task')
})
console.log('Starting the second task')

//THIS IS ASYNCHRONOUS