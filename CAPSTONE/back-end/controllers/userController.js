"use strict";
const Models = require("../models");
const bcrypt = require('bcryptjs');

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

    if (!data.username || !data.email || !data.password) {
        return res.send({ status: 400, error: 'Please provide all required fields.' });
    } else {
        Models.User.findOne({ where: { username: data.username } }).then(function (existingUser) {
            if (existingUser) {
                return res.send({ status: 400, error: 'Username already taken. Please choose a different username.' });
            } else {
                bcrypt.hash(data.password, 10, function (err, hash) {
                    if (err) {
                        console.error(err);
                        res.send({ status: 500, error: 'Unable to create user. Please try again later.' });
                    } else {
                        data.password = hash;
                        Models.User.create(data)
                            .then(function (data) {
                                res.send({ status: 200, data: data });
                            })
                            .catch(err => {
                                console.error(err);
                                res.send({ status: 500, error: 'Unable to create user. Please try again later.' });
                            });
                    }
                });
            }
        })
            .catch(err => {
                console.error(err);
                res.status(500).send({ error: 'Unable to create user. Please try again later.' });
            });
    }
};

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