const { Schema, model } = require('mongoose');

// create thought
const thoughtSchema = new Schema (
    {

    }
);

//create a virtual "thoughtCount"

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
