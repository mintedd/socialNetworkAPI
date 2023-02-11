const { ObjectId } = require('mongoose').Types;

const { User, Thought } = require('../models');

module.exports = {
    //Get all users
    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    //Get A user
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json(user))
            .catch((err) => res.status(500).json(err))
    },
    //Create A user
    createUser(req, res) {
        User.create(req, res)
            .then((user) => res.json(user))
            .catch((err) => res.json(500).json(err))
    },
    //Delete A user
    deleteUser(req, res) {
        User.findOneAndDelete({ id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : Thought.deleteMany({ _id: { $in: user.thoughts } })
            )
            .then(() => res.json({ message: 'User and thought(s) deleted' }))
            .catch((err) => res.status(500).json(err))
    },
    //Update A user
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with this id' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    }
}