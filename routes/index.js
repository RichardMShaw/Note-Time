const router = require('express').Router()

router.use('/api', require('./reserveRoutes.js'))
router.use('/api', require('./tablesRoutes.js'))
router.use('', require('./htmlRoutes.js'))

module.exports = router
