const BlogPosts = require('./blogPosts');
const Users = require('./Users');
const Comments = require('./Comments');

Users.hasMany(BlogPosts, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

BlogPosts.belongsTo(Users, {
    foreignKey: 'user_id',
});

Users.belongsToMany(BlogPosts, {
    through: {
        model: Comments,
        unique: false
    },
    as: 'comment_user'
});

BlogPosts.belongsToMany(Users, {
    through: {
        model: Comments,
        unique: false
    },
    as: 'blogpost_comment'
});

module.exports = { BlogPosts, Users, Comments };

