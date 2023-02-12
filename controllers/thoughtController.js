//require model
const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

//aggregate function

//module exports
module.exports = {
    //Get all thought
    getThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err))
    },
    //Get A thought
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .then((thoughts) =>
                !thoughts
                    ? res.status(404).json({ message: 'No thoughts found with that ID' })
                    : res.json(thoughts))
            .catch((err) => res.status(500).json(err))
    },
    //Create A thought
    //because thoughts are associated with Users, we need to update the user who created the thought and add the id of the thoughts to the thought array
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => {
                return User.findOneAndUpdate(
                    { _id: req.body.UserId },
                    { $addToSet: { thoughts: thought._id } },
                    { new: true }
                )
            })
            .then((user) =>
                !user
                    ? res.status(404).json({
                        message: 'Thought created, but no user found with that ID',
                    })
                    : res.json('Created thought!')
            )
            .catch((err) => {
                res.status(500).json(err)
            }
            )
    },
    //Delete A thought
    deleteThought(req, res) {
        Thought.findOneAndRemove({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json(
                        { message: 'No thought found with that ID' }
                    )
                    : User.findOneAndUpdate(
                        { thoughts: req.params.thoughtId },
                        { $pull: { thoughts: req.params.thoughtId } },
                        { new: true },
                    )
            )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'Thought created but no user with this id' })
                    : res.json({ message: 'Thought successfully deleted!' })
            )
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    //Update A thought
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with this id' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err))
    }
}