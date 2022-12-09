const exp = require('express')
const router = exp.Router()

const {getAllTasks}= require('../controller/tasks.js')

router.route('/').get(getAllTasks)

module.exports = router