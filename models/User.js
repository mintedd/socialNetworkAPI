const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

// create user
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            //trim?
        },
        email: {
            type: String,
            required: true,
            unique: true,
            // validate: {
            //     validator: 
            //     message: 
            // }
        },
        thoughts: [thoughtSchema],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

//create a virtual "friendCount"
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
})

// Initialize our Post model
const User = model('user', userSchema);

module.exports = User;
