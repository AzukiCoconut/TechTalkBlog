const router = require('express').Router();
const { Users, BlogPosts, Comments } = require('../models');

router.get('/', async (req, res) => {
    try {
        const blogPosts = await BlogPosts.findAll({
            include: [
                {
                    model: Users,
                    attributes: {exclude: ['password']},
                },
            ],
        });
        const posts = blogPosts.map((post) => post.get({plain: true}));

        res.render('homepage', {posts});
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/blogpost/:id', async (req, res) => {
    try {
        const blogPost = await BlogPosts.findByPk(req.params.id, {
            include: [
                {
                    model: Users,
                    attributes: {exclude: ['password']},
                },
                {
                    model: Comments,
                    include: [{model: Users, attributes: {exclude: ['password']}},],
                },
            ],
        });

        const singlePost = blogPost.get({plain: true});

        res.render('blogpost', singlePost);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/dashboard', async (req, res) => {
    try {
        const userData = await Users.findByPk("1", {
            attributes: { exclude: ['password'] },
            include: [{ model: BlogPosts }],
        });

        const user = userData.get({ plain: true });

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;

