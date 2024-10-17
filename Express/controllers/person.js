let {people} = require('../db/data')

//Get function for all people
const readPeople = (req, res) => {
    res.json({success: true, data: people});
}

//Post function for adding a new person

let length = people.length +1;
const createPeople = (req, res) => {
    const {name, id} = req.body;
    if(!name ||!id){
        return res.status(400).json({success: false, msg: "Please provide name and id"})
    }
    let person = {name:name, id: length++};
    people.push(person);
    res.status(201).json({success: true, data: person})
}

//Put function for updating a person

const updatePeople = (req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    const person = people.find((person) => person.id === Number(id));
    
    if(!person){
        return res.status(404).json({success: false, msg: "Person not found"})
    }

    const newPeople = people.map((person) => {
        if(person.id === Number(id)){
            person.name = name;
        }
        return person
    })
}

const deletePerson = (req, res) => {
    const {id} = req.params;
    const person = people.find((person) => person.id === Number(id));
    
    if(!person){
        return res.status(404).json({success: false, msg: "Person not found"})
    }

    people = people.filter((person_ =>{
        return person.id!== Number(id);
    }))
    res.status(200).json({success: true, data: people})
}

module.exports = {createPeople, readPeople, updatePeople, deletePerson }