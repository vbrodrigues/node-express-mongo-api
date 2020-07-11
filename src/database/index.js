const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vitor:221193Vbr@node-api-test.ravlj.gcp.mongodb.net/node-api-test?retryWrites=true&w=majority', { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
 });
mongoose.Promise = global.Promise;

module.exports = mongoose;