//TIME FOR NODEMON, POSTMAN, AND QUERIES/APIS
const express = require('express');
const app = express();
const {products} = require('./db/data')

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
})

// Return all products 
app.get('/api/products', (req, res) => {
    const newProducts = products.map(product => {
        const {id, name, age} = product;
        return {id, name, age};
    })
    res.json(newProducts)
})

// This is how you set up params for the data query
app.get('/api/products/:productID', (req, res) => {
    console.log(req.query)
    const {productID} = req.params;
    const singleProduct = products.find(product => product.id === Number(productID))
    if(!singleProduct) return res.status(404).send('Product not found');
    if(req.query.Life == '42') return res.status(202).send('You have found the easter egg');
    return res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params)
    console.log(Number(req.params.productID))
    res.send("This product has been reviewed by a person: It's the best there is, 10/10 would buy again")
})

// Sets up a query that you can grab 
app.get('/api/v1/query', (req, res) => {
    // console.log(req.query)
    const {search, limit} = req.query
    let sortedProducts = [...products]
    if(search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if(limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1) {
        return res.status(200).json({success:true, data:[]})
    } 
    res.status(200).json(sortedProducts)
})
app.listen(5000, () => console.log('Server running on port 5000'))