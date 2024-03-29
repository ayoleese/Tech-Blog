const router = require('express').Router();
const blog = require('./blog');
const user = require('./user');

router.use('/user', user);
router.use('/blog', blog);

module.exports = router;