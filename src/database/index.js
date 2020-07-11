const mongoose = require('mongoose');

// Replace <password> and <dbname> with user password and database name from MongoDB
mongoose.connect('mongodb+srv://vitor:<password>@node-api-test.ravlj.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority', { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
 });
mongoose.Promise = global.Promise;

module.exports = mongoose;