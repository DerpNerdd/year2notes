/*Node has built in promises for many of their libraries
allowing us to skip a lot of the promise setups but you should how to setup a promise anyway just in case.
*/

const {readFile, writeFile} = require('fs').promises

const start = async() => {
    try {
        const first =  await readFile('../content/first.txt', 'utf8')
        const second =  await readFile('../content/second.txt', 'utf8')
        await writeFile('../content/result-mind-grenade.txt', `This ASYNC AWESOME: ${first} ${second}`, {flag:"a"})
        console.log(first, second)
    } catch (error) {
        console.log("I think youre nice, just stupid. Here:")
        console.log(error)
    }
}
start()