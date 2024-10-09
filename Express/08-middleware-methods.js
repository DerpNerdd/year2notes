const express = require('express')
const app = express()
let {people} = require('./db/data')

// Static assets
app.use(express.static('./public'))

/*
Parse form data build in middleware function in express that parses incoming requests.
If you check req.body without it then you wil see that the value is undefinied */
app.use(express.urlencoded({ extended: false }))

// Parse form data this works similarly to the urlencoded function but handles the json
app.use(express.json())

app.get("/api/people", (req, res) => {
    res.json({success: true, data: people})
})

app.post("/api/people", (req, res) => {
    console.log(req.body)
    const {name} = req.body
    // If the new person has a name 
    if(name){
        return res.status(200).json({success: true, data: name})
    }
    // If the new person does not have a name
    return res.status(404).json({success: false, msg: "Please provide a name"})
})

// Above is for javascript.html
// Below is for index.html

app.post("/login", (req, res) => {
    console.log(req.body)
    const {name} = req.body
    if(name){
        return res.status(201).json({success: true, data: name})
    }
    res.send("Please provide Credentials")
})

// Server Listen
app.listen(3000, () => {
    console.log("Server is running on port 3000")
})