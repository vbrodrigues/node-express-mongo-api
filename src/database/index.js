const mongoose = require('mongoose');

// Grab MongoDb URI and replace <password> and <dbname> with user password and database name from MongoDB
mongoose.connect('...', { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
 });
mongoose.Promise = global.Promise;

module.exports = mongoose;