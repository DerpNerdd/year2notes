const {writeFileSync} = require('fs')

//Every bit of data is written to the end of the file

for(let i =0; i < 100000; i++) {
    writeFileSync('./content/big.txt', `Hello World ${i}\n`, {flag:'a'}) //Writes to the file
}
//Every bit of data overwrites the last bit of data

// for(let i =0; i < 100000; i++) {
//     writeFileSync('./content/big.txt', `Hello World ${i}\n`, {flag:'w'}) //Writes to the file
// }

//Errors because ???????

for(let i =0; i < 100000; i++) {
    writeFileSync('./content/big.txt', `Hello World ${i}\n`, {flag:'r'}) //Writes to the file
}