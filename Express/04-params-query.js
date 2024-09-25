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
    console.log(req.params)
    const {productID} = req.params
    const singleProduct = products.find((product) => product.id === Number(productID))

    if(!singleProduct){
        return res.status(404).send('Product Does Not Exist')
    }
    return res.json(singleProduct)
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
});