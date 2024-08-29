//Started Operating system process
console.log("First")
setTimeout(() => {
    console.log("Second")
}, 0)
console.log("Third")

// To avoid infinite loops use clearTimeout()