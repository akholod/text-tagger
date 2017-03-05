const express = require('express');
const router = express.Router();
const TagsModel = new require('../models/tags');

router.route('/tags').post((req, res) => {
    TagsModel.findOne({'tagName': req.body.tagName}, (err, tag) => {
        if (err) {
            res.status(500).json({error: "Database error"});
            return new Error(err)
        }
        if (tag) {
            return res.json({error: "Tag already added"});
        }
        //save new tag in db
        let tagData = new TagsModel();
        tagData.tagName = req.body.tagName || 'Unknown';
        tagData.save((err) => {
            if (err) {
                res.status(500).send("Database error");
                return new Error(err);
            }
            res.json({ message: "tag" + tagData.tagName + "added"});
            return console.log("tag" + tagData.tagName + "added");
        });
    });
}).get((req,res) => { // get all
    TagsModel.find((err, tags) => {
        if (err) {
            res.status(500).json({error: "Database error"});
            return new Error(err);
        }
        res.json(tags);
    })
})

router.route('/tags/:tag').delete(function(req, res) {  //delete book from db by title
    console.log(req.params.id);
        TagsModel.remove({tagName: req.params.tag}, (err) => {
            if (err) {
                res.status(500).json({error: "Database error"});
                return new Error(err);
            }
            res.json({ message: 'Successfully deleted' });
        });
});

module.exports = router;
