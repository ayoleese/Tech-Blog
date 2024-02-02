// const User = require('./user');
// const Blog = require('./blog');

// User.hasMany(Blog, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });

// Blog.belongsTo(User, {
//     foreignKey: 'user_id'
// });

// module.exports = { User, Blog};
const User = require('./user');
const Blog = require('./Blog');

User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Blog.belongsTo(User); // No need to specify foreign key here

module.exports = { User, Blog };
