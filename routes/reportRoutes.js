const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportcontroller');

router.post('/', reportController.createReport);
router.get('/', reportController.getReports);
router.put('/:id', reportController.updateReport);

module.exports = router;
