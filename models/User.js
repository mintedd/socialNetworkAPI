const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

const validateEmail = function(email) {
    var valEmail = [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/];
    return valEmail.test(email);
};


// create user
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: [true, 'User Email required'],
            unique: true,
            validate: {
                validator: validateEmail,
                message: 'Please enter valid email'
            }
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
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
