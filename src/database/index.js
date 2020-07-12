const mongoose = require('mongoose');

// Grab MongoDb URI
mongoose.connect('', { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
 });

module.exports = mongoose;