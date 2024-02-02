const router = require('express').Router();
const { Blog } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newBlog = await Blog.create({
            text: req.body.text,
            user_id: req.session.user_id,
        });
        console.log(newBlog);
        res.status(200).json(newBlog);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id, {
            include: [
                {
                    model: blog,
                    attributes: ["id", "text", "user_id"],
                },
            ],
        });
        const comment = blogData.get({plain: true});
        res.render("", {
            comment,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

module.exports = router;