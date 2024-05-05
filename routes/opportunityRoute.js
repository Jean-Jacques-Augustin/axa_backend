const express = require('express');
const opportunityController = require('./../middleware/opportunity');
const router = express.Router();

router.post('/', opportunityController.createOpportunity);
router.get('/', opportunityController.getOpportunities);
router.get('/:id', opportunityController.getOpportunity);
router.patch('/:id', opportunityController.updateOpportunity);
router.delete('/:id', opportunityController.deleteOpportunity);

module.exports = router;