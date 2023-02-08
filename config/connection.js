const { connect, connection } = require('mongoose');

connect('mongodb://localhost/<dbname>', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
