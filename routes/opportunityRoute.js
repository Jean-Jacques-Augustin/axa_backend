const express = require('express');
const opportunityController = require('./../middleware/opportunity');
const multer = require("multer");
const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images');
    }, filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage: storage, fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Only images are allowed.'));
        }
    }
});

router.post('/', upload.array('images', 10), opportunityController.createOpportunity);
router.get('/', opportunityController.getOpportunities);
router.get('/:id', opportunityController.getOpportunity);
router.patch('/:id', opportunityController.updateOpportunity);
router.delete('/:id', opportunityController.deleteOpportunity);

module.exports = router;