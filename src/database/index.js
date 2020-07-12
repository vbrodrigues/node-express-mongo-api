const mongoose = require('mongoose');

// Grab MongoDb URI
mongoose.connect('<URI>', { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
 });

module.exports = mongoose;