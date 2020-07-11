const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = (request, response, next) => {
    // If next() is called, the middleware allows next step (controller). Otherwise, it doesn't allow to go any further

    const authHeader = request.headers.authorization;

    if (!authHeader) {
        return response.status(400).send({'error': 'No token provided.'});
    }

    // Token format: "Bearer <token>"
    const parts = authHeader.split(' ');

    if (!parts.length === 2) {
        return response.stats(401).send({'error': 'Token error.'});
    }

    const [ scheme, token ] = parts;

    if (!/^Bearer$/i.test(scheme)) {
        return response.status(401).send({'error': 'Token not formatted.'})
    }

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) return response.status(401).send({'error': 'Invalid token.'});

        request.usedId = decoded.id;
        return next();
    });

}