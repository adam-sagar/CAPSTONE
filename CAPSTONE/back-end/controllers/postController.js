"use strict";
const Models = require("../models");

const getPosts = (res) => {

    Models.Post.findAll({}).then(function (data) {
        res.send({ result: 200, data: data })
    })
    .catch(err => {
        console.error(err);
        res.status(500).send({ error: 'Unable to get posts. Please try again later.' });
    })
}

const createPosts = (data, res) => {

    Models.Post.create(data).then(function (data) {
        res.send({ result: 200, data: data })
    })
    .catch(err => {
        console.error(err);
        res.status(500).send({ error: 'Unable to create post. Please try again later.' });
    })
}

const updatePost = (req, res) => {

    Models.Post.update(req.body, {
        where: { id: req.params.id }
    }).then(function (data) {
        res.send({ result: 200, data: data })
    })
    .catch(err => {
        console.error(err);
        res.status(500).send({ error: 'Unable to update post. Please try again later.' });
    })
}

const deletePost = (req, res) => {

    Models.Post.destroy({
        where: { id: req.params.id }
    }).then(function (data) {
        res.send({ result: 200, data: data })
    })
    .catch(err => {
        console.error(err);
        res.status(500).send({ error: 'Unable to delete post. Please try again later.' });
    })
}

module.exports = {
    getPosts, createPosts, updatePost, deletePost
}