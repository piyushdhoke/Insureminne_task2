const express = require('express');
const {scheduleMsg} = require('../Controller/msgController')

const router = express.Router();

router.post('/scheduleMessage', scheduleMsg);

module.exports = router;
