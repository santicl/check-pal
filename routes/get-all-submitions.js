const express = require('express');
const getFormAllByIdSubmissions = require('../middleware/getAllSubmitions');
const validateDateMatches = require('../controllers/validateDateMatches');
const getCustomFields = require('../middleware/getCustomField');
const router = express.Router();

router.post('/', 
    getFormAllByIdSubmissions,
    getCustomFields,
    validateDateMatches
);

module.exports = router;
