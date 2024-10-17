const express = require('express');
const router = express.Router();

//Below here is to work with the router application

let {people} = require('../db/data')

router.get('/', (req, res) => {
    res.json({success: true, data: people});
})

router.post('/', (req, res) => {
    console.log(req.body)
    const {name} = req.body
    if(name){
        return res.status(201).json({success: true, person: name});
    } else {
        res.status(404)({success: false, message: 'Name is required'})
    }
})

//Put requests
router.put('/:id', (req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    const person = people.find(person => person.id === Number(id));

    if (!person) {
        return res.status(404).json({success: false, message: `No person with id ${id}`})
    }

    const newPeople = people.map(person =>{
        if(person.id === Number(id)){
            person.name = name;
        }
        return person;
    })

    res.status(200).json({success: true, data:newPeople});
})

//Delete requests

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    const person = people.find(person => person.id === Number(id));

    if (!person) {
        return res.status(404).json({success: false, message: `No person with id ${id}`})
    }

    people = people.filter(person => {
        return person.id !== Number(id)
    });

    res.status(200).json({success: true, data: people});
})

module.exports = router;