const { v1: uuidv1 } = require("uuid");
const { logInfo } = require("../config/logger")


function indexController(req, res) {
    const requestId = `req::${uuidv1()}`
    req.requestId = requestId

    try {
        logInfo({
            level: "info",
            message: "success, received at :GET /",
            source: "Server.js @module app.get('/')",
            user_id: req.user ? req.user.id : null,
            request_id: requestId,
            http_method: req.method,
            request_url: req.originalUrl,
            request_headers: req.headers,
            response_status: res.statusCode
        });
        res.send("Don't hit me again ...🙂")
    }

    catch (error) {
        logInfo({
            level: "info",
            message: "Error at: GET /",
            source: "Server.js @module app.get('/')",
            user_id: req.user ? req.user.id : null,
            stack_trace: error.stack,
            request_id: requestId,
            http_method: req.method,
            request_url: req.originalUrl,
            request_headers: req.headers,
            response_status: res.statusCode
        });
    }
}

module.exports = indexController