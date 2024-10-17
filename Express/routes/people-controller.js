const express = require('express');
const router = express.Router();

const {createPeople, readPeople, updatePeople, deletePerson } = require('../controllers/person');

router.get('/', readPeople);
router.post('/', createPeople);
router.put('/:id', updatePeople);
router.delete('/:id', deletePerson);

module.exports = router;