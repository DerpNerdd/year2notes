const {createReadStream, createWriteStream} = require('fs');

//default size of a chunk in bytes is 64kb
//last buffer - The remainder of the data that is left after the last chunk is read
//highwaterMark - The high water mark is the maximum number of bytes that can be read into the buffer at once (Controls the size of the chunks)

const stream = createReadStream('./content/big.txt', {encoding: 'utf8'}, {highWaterMark: 90000});
stream.on('data', function(chunk){
    console.log(chunk)
    console.log("OwOwOwOwOwOwOwOwOwOwOwOwOwOwOwOwOwOwOwOwOwOwOwOwOwOwOwOwOwOwO")
})
stream.on("error", function(err){
    console.log("An error occurred:", err)
})