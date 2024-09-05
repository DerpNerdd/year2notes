const {readFile, writeFile, readFileSync, writeFileSync} = require('fs');

// //Asynchronous read and write example
// readFile('./content/big.txt', 'utf8', (err, firstData) => {
//     if(err){
//         console.error(err);
//         return
//     }
//     readFile('./content/second.txt', 'utf8', (err, secondData) => {
//         if(err){
//             console.error(err);
//             return
//         }
//         const result = `${firstData} and ${secondData}`;
//         writeFile('./content/result-mind-grenade.txt', result, (err) =>{
//             if(err){
//                 console.error(err);
//                 return
//             }
//             console.log("Asynchronous write completed successfully")
//         })
//     })
// })

// for (let index = 0; index < 100000; index++) {
//     console.log("Testing Server...")
// }

try{
    const firstData = readFileSync('./content/first.txt', 'utf8')
    for (let index = 0; index < 10000; index++){
        console.log("Testing Server...")
    }
    const secondData = readFileSync('./content/second.txt', 'utf8')
    const result = `${firstData} and ${secondData}`;
    writeFileSync('./content/result-mind-grenade.txt', result)
} catch (err){
    console.error(err)
}