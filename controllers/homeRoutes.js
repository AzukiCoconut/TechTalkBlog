const router = require('express').Router();
const { Users, BlogPosts, Comments } = require('../models');
const withAuth = require('../utils/auth');

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

        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/getPost/:id', async (req, res) => {
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

        res.render('blogpost', {
            singlePost,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/getPost/user/:id', async (req, res) => {
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

        res.render('blogpost-edit', {
            singlePost,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const userData = await Users.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: BlogPosts }],
        });

        const user = userData.get({ plain: true });

        res.render('dashboard', { 
            user,
            loggedIn: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {

    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }
    res.render('login');
});


module.exports = router;

