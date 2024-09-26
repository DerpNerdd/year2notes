//ITS TIME FOR NODEMON, POSTMAN and QUERIES/APIs
const express = require('express');
const app = express();
const {products} = require('./db/data')

app.get('/', (req, res) => {
    res.send('<h1>Home page</h1><a href="/api/products">Products</a>');
})

//Return all products
app.get('/api/products', (req, res) => {
    const newProducts = products.map(product =>{
        const {id, name, age} = product
        return {id, name, age}
    })
    res.json(newProducts);
})

//This is how you set up params for the data query

app.get('/api/products/:productID', (req, res) => {
    console.log(req.query)
    const {productID} = req.params
    const singleProduct = products.find((product) => product.id === Number(productID))

    if(!singleProduct){
        return res.status(404).send('Product Does Not Exist')
    } else if(req.query.Life == '42'){
        return res.status(200).send('The answer to life, the universe, and everything is 42')
    }
    return res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params)
    console.log(Number(req.params.productID))
    res.send('This product has been reviewd by a person: ITS AMAZING IM BAUTAKUMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM')
})

app.get('/api/v1/query', (req, res) => {
    console.log(req.query)
    const {search, limit} = req.query
    let sortedProducts = [...products]
    if(search){
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if(sortedProducts.length < 1){
        //res.status(200).send('No products matched your search')
        return res.status(200).json({success: true, data: []})
    }
    res.status(200).json(sortedProducts)
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
});