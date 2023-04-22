"use strict";
const Models = require("../models");

const getComments = (res) => {
    Models.Comment.findAll({}).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const createComments = (data, res) => {
    Models.Comment.create(data).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const updateComment = (req, res) => {
    Models.Comment.update(req.body, {
        where: { id: req.params.id }
    }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const deleteComment = (req, res) => {
    Models.Comment.destroy({
        where: { id: req.params.id }
    }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

module.exports = {
    getComments, createComments, updateComment, deleteComment
}