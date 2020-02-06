const userService = require('../service/user');


exports.create = function (req, res, next) {
    const body = new User(req.body);
    if (!body.email) {
        res.status(400).send('Email is missing');
        return;
    }
    userService.createUser(body, function (error, response) {
        if (response) {
            res.status(201).send(response);
        } else if (error) {
            res.status(400).send(error);
        }
    });
};

exports.find = function (req, res) {
    const params = req.params || {};
    const query = {
        email: params.email
    };
    if (!query) {
        res.status(400).send('Bad Request');
        return;
    }
    userService.findUser(query, function (error, response) {
        if (error) {
            res.status(404).send(error);
            return;
        }
        if (response) {
            res.status(200).send(response);
            return;
        }
        if (!response) {
            res.status(204).send('No Data Found');
        }
    });
};


exports.updateById = function (req, res) {
    const body = req.body;

    if (!body.email) {
        res.status(400).send('Id is missing');
        return;
    }
    const updateData = body.data || {}
    userService.updateUserById(body.email, updateData, (err, response) => {
        if (response) {
            res.status(200).send(response);
        } else if (err) {
            res.status(400).send(err);
        }
    });
}


exports.update = function (req, res) {
    const body = req.body;
    const query = body.query;
    const data = body.data;
    const options = body.options
    if (!query) {
        res.status(400).send('Bad request');
        return;
    }

    userService.updateUser(query, data, options, (err, response) => {
        if (response) {
            res.status(200).send(response);
        } else if (err) {
            res.status(400).send(err);
        }
    });
}


exports.delete = function (req, res) {
    const key = req.params;
    const body = req.body || {};
    const {query} = body;
    console.log(query);
    if (!query) {
        res.status(400).send('Bad Request');
        return;
    }
    userService.deleteUser(query, function (error, response) {
        if (error) {
            res.status(400).send(error);
            return;
        }
        if (response) {
            if (response.n === 1 && response.ok === 1) {
                res.status(202).send(body);
            }
            if (response.n === 0 && response.ok === 1) {
                res.status(204).send({
                    message: 'No data found'
                });
            }
        }
    });
}


class User {
    constructor(userData) {
        this.email = userData.email || '';
        this.firstName = userData.firstName || '';
        this.lastName = userData.lastName || '';
        this.address = userData.address || '';
        this.phone = userData.phone || '';
    }
}
