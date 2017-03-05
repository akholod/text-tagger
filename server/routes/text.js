const express = require('express');
const router = express.Router();
const text = require('./data/dummy-text-for-test')

router.route('/text').get((req,res) => { // get all
        res.json(text);
});

module.exports = router;
