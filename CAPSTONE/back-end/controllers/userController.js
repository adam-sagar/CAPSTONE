"use strict";
const Models = require("../models");

const getUsers = (res) => {

    Models.User.findAll({}).then(function (data) {
        res.send({ result: 200, data: data })
    })
    .catch(err => {
        console.error(err);
        res.status(500).send({ error: 'Unable to get users. Please try again later.' });
    })
}

const createUsers = (data, res) => {

    Models.User.create(data).then(function (data) {
        res.send({ result: 200, data: data })
    })
    .catch(err => {
        console.error(err);
        res.status(500).send({ error: 'Unable to create user. Please try again later.' });
    })
}

const updateUser = (req, res) => {

    Models.User.update(req.body, {
        where: { id: req.params.id }
    }).then(function (data) {
        res.send({ result: 200, data: data })
    })
    .catch(err => {
        console.error(err);
        res.status(500).send({ error: 'Unable to update user. Please try again later.' });
    })
}

const deleteUser = (req, res) => {

    Models.User.destroy({
        where: { id: req.params.id }
    }).then(function (data) {
        res.send({ result: 200, data: data })
    })
    .catch(err => {
        console.error(err);
        res.status(500).send({ error: 'Unable to delete user. Please try again later.' });
    })
}

module.exports = {
    getUsers, createUsers, updateUser, deleteUser
}