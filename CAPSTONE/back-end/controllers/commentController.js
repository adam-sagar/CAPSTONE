"use strict";
const Models = require("../models");

const getComments = (res) => {

    Models.Comment.findAll({}).then(function (data) {
        res.send({ result: 200, data: data })
    })
        .catch(err => {
            console.error(err);
            res.status(500).send({ error: 'Unable to get comments. Please try again later.' });
        })
}

const createComments = (data, res) => {

    Models.Comment.create(data).then(function (data) {
        res.send({ result: 200, data: data })
    })
        .catch(err => {
            console.error(err);
            res.status(500).send({ error: 'Unable to create comment. Please try again later.' });
        })
}

const updateComment = (req, res) => {

    Models.Comment.update(req.body, {
        where: { id: req.params.id }
    }).then(function (data) {
        res.send({ result: 200, data: data })
    })
        .catch(err => {
            console.error(err);
            res.status(500).send({ error: 'Unable to update comment. Please try again later.' });
        })
}

const deleteComment = (req, res) => {

    Models.Comment.destroy({
        where: { id: req.params.id }
    }).then(function (data) {
        res.send({ result: 200, data: data })
    })
        .catch(err => {
            console.error(err);
            res.status(500).send({ error: 'Unable to delete comment. Please try again later.' });
        })
}

module.exports = {
    getComments, createComments, updateComment, deleteComment
}