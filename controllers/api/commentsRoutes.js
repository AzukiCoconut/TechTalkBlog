const router = require('express').Router();
const { Comments } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newComment = await Comments.create({
            text: req.body.text,
            blogpost_id: req.body.blogpost_id,
            user_id: 1,
        });

        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;