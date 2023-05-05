"use strict";
const Models = require("../models");
const bcrypt = require("bcrypt");

const validateLogin = async (req, res) => {

    const data = req.body;

    // checks user has entered all the required fields
    if (!data.username || !data.password) {
        return res.send({ status: 400, error: 'Please provide all required fields.' });
    }

    try {
        // find the user
        const user = await Models.User.findOne({ where: { username: data.username } });

        // return error if user not found
        if (!user) {
            return res.send({ status: 401, error: 'That username does not exist.' });
        }
 
        // compare bcrtpt hashed password with provided password
        const passwordMatches = await bcrypt.compare(data.password, user.password);

        // return error if password doesn't match
        if (!passwordMatches) {
            return res.send({ status: 401, error: 'Incorrect password. Please try again.' });
        }

        // return success message if everything is valid
        return res.send({ status: 200, message: 'Login successful.', user });

    } catch (error) {
        console.error(error);
        return res.send({ status: 500, error: 'An error occurred while logging in.' });
    }
}

module.exports = {
    validateLogin
}
