const express = require('express')
const router = express.Router()

const controller = require('../controllers/seriesController')

router.get('/', controller.getAllSeries)
router.get('/:id', controller.getByID)
router.post('/', controller.postSerie)
// router.put('/', controller.putSerie)
router.delete('/:id', controller.deleteSerie)
// router.patch('/', controller.patchSerie)

module.exports = router