exports.port = process.env.PORT || 5001
exports.host = process.env.HOST || 'localhost'
exports.origin = process.env.ORIGIN || `http://localhost:${exports.port}`
