const express = require('express');
const router = express.Router();
let paragraphs = [
    `Chapter 1`,
    `When he was nearly thirteen, my brother Jem got his arm badly broken at the elbo

    w. When it healed, and Jem's fears of never being able to play football were ass

    uaged, he was seldom self-conscious about his injury. His left arm was somewhat

    shorter than his right; when he stood or walked, the back of his hand was at rig

    ht angles to his body, was his thumb parallel to his thigh. He couldn't have cared l

    ess, so long as he could pass and punt.`,
    `When enough years had gone by to enable us to look back on them, we sometimes di

    scussed the events leading to his accident. I maintain that the Ewells started i

    t all, but Jem, who was four years my senior, said it started long before that.

    He said it began the summer Dill came to us, when Dill first gave us the idea of

    making Boo Radley come out.`,
    `I said if he wanted to take a broad view of the thing, it really began with Andr

    ew Jackson. If General Jackson hadn't run the Creeks up the creek, Simon Finch w

    ould never have paddled up the Alabama, his and where would we be if he hadn't? We w

    ere far too old to settle an argument with a fist-fight, so we consulted Atticus

    . Our father said we were both right.`,
    `Being Southerners, it was a source of shame to some members of the family that w

e had no recorded ancestors on either side of the Battle of Hastings. All we had

was Simon Finch, a fur-trapping apothecary from Cornwall whose piety was exceed

ed only by his stinginess. In England, Simon was irritated by the persecution of

those who called themselves Methodists at the hands of their more liberal breth

ren, and as Simon called himself a Methodist, he worked his way across the Atlan

tic to Philadelphia, thence to Jamaica, thence to Mobile, and up the Saint Steph

ens. Mindful of John Wesley's strictures on the use of many words in buying and

selling, Simon made a pile practicing medicine, but in this pursuit he was unhap

py lest he be tempted into doing what he knew was not for the glory of God, as t

he putting on of gold and costly apparel. So Simon, having forgotten his teacher

's dictum on the possession of human chattels, bought three slaves and with thei

r aid established a homestead on the banks of the Alabama River some forty miles

above Saint Stephens. He returned to Saint Stephens only once, to find a wife,

and with her established a line that ran high to daughters. Simon lived to an im

pressive age and died rich.`,
`It was customary for the men in the family to remain on Simon's homestead, Finch

's Landing, and make their living from cotton. The place was self-sufficient: mo

dest in comparison with the empires around it, the Landing nevertheless produced

everything required to sustain life except ice, wheat flour, and articles of cl

othing, supplied by river- boats from Mobile.`,
`Simon would have regarded with impotent fury the disturbance between the North a

nd the South, as it left his descendants stripped of everything but their land,

yet the tradition of living on the land remained unbroken until well into the tw

entieth century, when my father, Atticus Finch, went to Montgomery to read law,

and his younger brother went to Boston to study medicine. Their sister Alexandra

was the Finch who remained at the Landing: she married a taciturn man who spent

most of his time lying in a hammock by the river wondering if his trot-lines we

re full.`

];
router.route('/text').get((req,res) => { // get all
        res.json([{ text: paragraphs }]);
});

module.exports = router;
