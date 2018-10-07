var User = require('./user');

var userController = function () {

    var addUser = function (req, res) {
        User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        },
            function (err, user) {
                if (err) return res.status(500).send("There was a problem adding the information to the database.");
                res.status(200).send(user);
            });
    }

    var listAllUsers = function (req, res) {
        User.find({}, function (err, users) {
            if (err) return res.status(500).send("There was a problem finding the users.");
            res.status(200).send(users);
        });
    }

    var getSingleUser = function (req, res) {
        User.findById(req.params.userId, function (err, user) {
            if (err) return res.status(500).send("There was a problem finding the user.");
            if (!user) return res.status(404).send("No user found.");
            res.status(200).send(user);
        });
    }

    var updateUser = function (req, res) {

        User.findByIdAndUpdate(req.params.userId, req.body, { new: true }, function (err, user) {
            if (err) return res.status(500).send("There was a problem updating the user.");
            res.status(200).send(user);
        });
    }

    var deleteUser = function (req, res) {
        User.findByIdAndRemove(req.params.userId, function (err, user) {
            if (err) return res.status(500).send("There was a problem deleting the user.");
            res.status(200).send("User " + user.name + " was deleted.");
        });
    }

    return {
        addUser: addUser,
        listAllUsers: listAllUsers,
        getSingleUser: getSingleUser,
        updateUser: updateUser,
        deleteUser: deleteUser
    }
};

module.exports = userController;