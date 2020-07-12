const fs = require('fs');
const path = require('path');

// To automatically import every controller by importing this index.js
module.exports = app => {
    fs
        .readdirSync(__dirname)
        // Filter out every file that starts with a dot and this very file index.js. All that's left are the controllers
        .filter(file => ((file.indexOf('.')) !== 0 && (file !== 'index.js')))
        // For each file, import, remembering that every controller expects an app as argument, so we pass the app that was passed on module.exports
        .forEach(file => require(path.resolve(__dirname, file))(app));
}