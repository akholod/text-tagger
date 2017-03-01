var express = require('express');
var router = express.Router();

router.route('/text').get((req,res) => { // get all
        res.json([{ text: `one two three
            vasja i mama
            raz euu uruuro` }]);
});

module.exports = router;
