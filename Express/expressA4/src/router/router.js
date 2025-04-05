const express = require('express');
const router = express.Router();
const controller = require('../controller/controller.js');

router.post('/shorten', controller.shortenUrl);
router.get('/:shortCode', controller.redirectUrl);

module.exports = router;