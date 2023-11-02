const router = require('express').Router();
const { BlogPosts } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newBlog = await BlogPosts.create({
            ...req.body, 
            user_id: req.session.user_id,
        });

        res.status(200).json(newBlog);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', withAuth, async (req, res) => {
    try {
        const blogPost = await BlogPosts.update({
            title: req.body.title,
            text: req.body.text,
            created_on: req.body.created_on,
            user_id: req.session.user_id,
        },
        {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(blogPost);
    } catch (err) {
        res.status(500).json(err)
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const blogPost = await BlogPosts.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!blogPost) {
            res.status(404).json({ message: 'No blog post found with this id' });
            return;
        }

        res.status(200).json(blogPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;