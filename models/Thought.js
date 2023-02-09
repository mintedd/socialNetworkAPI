const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// create thought
const thoughtSchema = new Schema(
    {
        thoughtText: {
            String,
            required: true,
            min: 1,
            max: 280,
        },
        createdAt: {
            Date,
            default: Date.now,
        },
        username: [
            {
                type: Schema.Types.ObjectId,
                String,
                required: true,
                ref: 'User',
            }
        ],
        reactions: [reactionSchema],
    },
    { //getter method to format time 
        toJSON: {
            getters: true,
        },
        id: false,
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

//create a virtual "thoughtCount"
reactionSchema
    .virtual('reactionCount').get(function () {
        return this.reactions.length;
    })

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
