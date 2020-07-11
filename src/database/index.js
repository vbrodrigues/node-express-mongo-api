const mongoose = require('mongoose');

// Grab MongoDb URI and replace <password> and <dbname> with user password and database name from MongoDB
mongoose.connect('mongodb+srv://vitor:221193Vbr@node-api-test.ravlj.gcp.mongodb.net/node-api-test?retryWrites=true&w=majority', { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
 });
mongoose.Promise = global.Promise;

module.exports = mongoose;