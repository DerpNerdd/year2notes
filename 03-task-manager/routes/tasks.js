const express = require('express');
const router = express.Router();

const {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,

} = require('../controllers/tasks');

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);
router.route('/api/v1/tasks/:id').patch(updateTask);

module.exports = router;