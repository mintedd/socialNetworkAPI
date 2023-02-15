const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const moment = require('moment');

// create thought
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min: 1,
            max: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => moment(date).format('MMM D, YYYY, h:mm a')
        },
        username: {
            //     {
            //         type: Schema.Types.ObjectId,
            //         String,
            //         required: true,
            //         ref: 'User',
            //     }
            // ],
            type: String,
            required: true,
        },
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
