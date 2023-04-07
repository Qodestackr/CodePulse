const { logInfo } = require("../config/logger")

const python = require("../services/python");
const javascript = require("../services/javascript");
const typescript = require("../services/typescript");

function postCodeController(req, res) {
    var text = req.fields.text;
    var language = req.fields.language;

    if (!text || !(text.length > 1)) {
        res.status(422).send("Write some code!");
    }
    logInfo({
        level: 'info',
        message: `Run ${language} code`,
        source: 'Server.js @module postCodeController',
        user_id: req.user ? req.user.id : null,
        request_id: req.requestId,
        http_method: req.method,
        request_url: req.originalUrl,
        request_headers: req.headers,
        response_status: res.statusCode,
        code: text
    });

    switch (language) {
        case "python":
            python.run(text, function (data) {
                logInfo({
                    level: 'info',
                    message: `Successful ${language} code run`,
                    source: 'Server.js @module postCodeController',
                    user_id: req.user ? req.user.id : null,
                    request_id: req.requestId,
                    http_method: req.method,
                    request_url: req.originalUrl,
                    request_headers: req.headers,
                    response_status: res.statusCode,
                    code: text
                });
                res.status(200).json(data);
            });
            break;
        case "javascript":
            javascript.run(text, function (data) {
                logInfo({
                    level: 'info',
                    message: `Successful ${language} code run`,
                    source: 'Server.js @module postCodeController',
                    user_id: req.user ? req.user.id : null,
                    request_id: req.requestId,
                    http_method: req.method,
                    request_url: req.originalUrl,
                    request_headers: req.headers,
                    response_status: res.statusCode,
                    code: text
                })

                res.status(200).json(data);
            });
            break;
        case "typescript":
            typescript.run(text, function (data) {
                logInfo({
                    level: 'info',
                    message: `Successful ${language} code run`,
                    source: 'Server.js @module postCodeController',
                    user_id: req.user ? req.user.id : null,
                    request_id: req.requestId,
                    http_method: req.method,
                    request_url: req.originalUrl,
                    request_headers: req.headers,
                    response_status: res.statusCode,
                    code: text
                });
                res.status(200).json(data);
            });
            break;

        default:
            logger.warn({
                level: 'warn',
                message: 'Invalid language selected',
                source: 'Server.js @module postCodeController',
                user_id: req.user ? req.user.id : null,
                request_id: req.requestId,
                http_method: req.method,
                request_url: req.originalUrl,
                request_headers: req.headers,
                response_status: res.statusCode,
                code: text
            });
            res.status(422).send("Invalid. Kindly select supported languages.");
    }

}

module.exports = postCodeController