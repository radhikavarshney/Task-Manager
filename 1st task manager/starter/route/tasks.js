const exp = require('express')
const router = exp.Router()

const {getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask}= require('../controller/tasks.js')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)
module.exports = router