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

router.put('/:id', async (req, res) => {
    try {
        const comment = await Comments.update({
            text: req.body.text,
            blogpost_id: req.body.post_id,
            user_id: req.body.user_id,
        },
        {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(comment);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const comment = await Comments.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!comment) {
            res.status(404).json({message: 'No comment found with this id' });
            return;
        }

        res.status(200).json(comment);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;