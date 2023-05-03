"use strict";
const Models = require("../models");
const multer = require("multer");

const getPosts = (res) => {

    Models.Post.findAll({}).then(function (data) {
        res.send({ result: 200, data: data })
    })
        .catch(err => {
            console.error(err);
            res.status(500).send({ error: 'Unable to get posts. Please try again later.' });
        })
}

const getUserPosts = (req, res) => {

    let userId = req.params.userId

    Models.Post.findAll({ where: { userId } }).then(function (data) {
        res.send({ result: 200, data: data })
    })
        .catch(err => {
            console.error(err);
            res.status(500).send({ error: 'Unable to get posts. Please try again later.' });
        })
}

const getPost = (req, res) => { // get single post to edit

    let id = req.params.id

    Models.Post.findOne({ where: { id } }).then(function (data) {
        res.send({ result: 200, data: data })
    })
        .catch(err => {
            console.error(err);
            res.status(500).send({ error: 'Unable to get post. Please try again later.' });
        })
}

const createPost = (req, res) => {

    const data = req.body
    data.userId = req.params.userId // userId is sent in params so we can use it in the filename

    if (req.file) {
        data.image = '/images/' + data.userId + '-' + req.file.originalname // multer middleware saves uploaded file into req.file
    }

    Models.Post.create(data).then(function (data) { // store post including image path and userId
        res.send({ result: 200, data: data })
    })
        .catch(err => {
            console.error(err);
            res.status(500).send({ error: 'Unable to create post (' + err.message + '). Please try again later.' });
        })
}

const updatePost = (req, res) => {

    console.log(req.body)
    const updatedPost = req.body;
    updatedPost.userId = req.params.userId // userId is sent in params so we can use it in the filename

    if (req.file) {
        updatedPost.image = '/images/' + updatedPost.userId + '-' + req.file.originalname // multer middleware saves uploaded file into req.file
    }
    Models.Post.update(updatedPost, {
        where: { id: req.params.id }
    }).then(function (data) {
        res.send({ result: 200, data: updatedPost }) // send back updated info including new image name
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
    getPosts, createPost, updatePost, deletePost, getUserPosts, getPost
}