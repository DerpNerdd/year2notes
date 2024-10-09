const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(express.static('./public'))
app.use(morgan('short'))

app.get('/', (req, res) => {
    res.send('Welcome Home Chumps!')
})

app.get('/about', (req, res) => {
    res.send('About You: Still a Chump')
})

app.get('/api/products', (req, res) => {
    res.send('Products for Chumps')
})

app.get('/api/items', (req, res) => {
    res.send('Items for Chumps')
})

app.get('*', (req, res) => {
    res.end('404 - Chump Found')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})