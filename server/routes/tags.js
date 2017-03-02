const express = require('express');
const router = express.Router();

let tags = ['when', 'was'];

router.route('/tags').get((req,res) => { // get all
        res.json([{ tags: tags }]);
});

module.exports = router;
