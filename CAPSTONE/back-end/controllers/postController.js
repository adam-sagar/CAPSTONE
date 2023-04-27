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

const createPosts = (req, res) => {

    const data = req.body

    console.log(data)
    console.log(req.file)
    const storage = multer.diskStorage({
        destination: '/public/images',
        filename: (req, file, cb) => {
            cb(null, data.userId+file.originalname)

        }, 
    })

    const upload = multer({ storage: storage }).single('file')
    if (data.image) {
        upload(req, res, (err) => {
            if (err) {
                res.status(500).json({ result: err.message })
            }
            else {
                data.image = '/images/'+data.userId+req.file.originalname
            }
        })
    }

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