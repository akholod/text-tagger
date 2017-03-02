var express = require('express');
var router = express.Router();
let paragraphs = [
    `Chapter 1`,
    `When he was nearly thirteen, my brother Jem got his arm badly broken at the elbo

    w. When it healed, and Jem's fears of never being able to play football were ass

    uaged, he was seldom self-conscious about his injury. His left arm was somewhat

    shorter than his right; when he stood or walked, the back of his hand was at rig

    ht angles to his body, his thumb parallel to his thigh. He couldn't have cared l

    ess, so long as he could pass and punt.`,
    `When enough years had gone by to enable us to look back on them, we sometimes di

    scussed the events leading to his accident. I maintain that the Ewells started i

    t all, but Jem, who was four years my senior, said it started long before that.

    He said it began the summer Dill came to us, when Dill first gave us the idea of

    making Boo Radley come out.`,
    `I said if he wanted to take a broad view of the thing, it really began with Andr

    ew Jackson. If General Jackson hadn't run the Creeks up the creek, Simon Finch w

    ould never have paddled up the Alabama, and where would we be if he hadn't? We w

    ere far too old to settle an argument with a fist-fight, so we consulted Atticus

    . Our father said we were both right.`

];
router.route('/text').get((req,res) => { // get all
        res.json([{ text: paragraphs }]);
});

module.exports = router;
