'use strict'
const User = require('./user')
const Post = require('./post')
const Comment = require('./comment') //require the model

async function init() {
    await User.sync(); //sync the model
    await Post.sync();
    await Comment.sync();
};
init();

module.exports = {
    User, Post, Comment //export the model
};