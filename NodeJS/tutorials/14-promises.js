const {readFile, writeFile} = require('fs').promises;
const path = require('path')
let ip = "127.0.0.1"

const myPromise = new Promise((resolve, reject) => {
    // Async Operation goes in here

    if(ip === "127.0.0.1" || ip === "127.0.0.5"){
        resolve("This is the correct IP")
    }else{
        reject("This is not the correct IP")
    }
})
console.log(myPromise)

//Next Promise Example:
let actualFile = path.join(__dirname, "/content/first.txt")
function processData(data){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(data.toUpperCase()) //Process data capitalizes the data
        }, 500) //delay of half a second
    })
}

function saveData(data){
    return new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve(`Data Saved ${data}`)
    }, 500)
})
}

readFile(actualFile, 'utf8')
    .then(content => processData(content))
    .then(processedData => saveData(processedData))
    .then(result => {
        console.log(result) //Outputs Data Saved and the content upperCased
    })
    .catch(err => console.log(err)) //Outputs the error if any occurred during the process