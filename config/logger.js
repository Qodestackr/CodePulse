const winston = require('winston')
const { v1: uuidv1 } = require("uuid");

const logger = winston.createLogger({
    level: 'info',
    defaultMeta: { service: 'remo-service' },
    format: winston.format.combine(

        winston.format.label({ label: `Label🏷️` }),
        winston.format.timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }),
        winston.format.json(),

    ),
    transports: [
        new winston.transports.File({ filename: `${uuidv1()}-info-logs.log` }),
    ],
});

function logInfo(info) {
    const {
        source,
        user_id,
        request_id,
        message,
        stack_trace,
        http_method,
        request_url,
        request_headers,
        response_status
    } = info

    logger.info({
        level: "info",
        source,
        message,
        user_id,
        request_id,
        stack_trace,
        http_method,
        request_url,
        request_headers,
        response_status
    });
}

function logWarning(info) {
    const {
        source,
        user_id,
        request_id,
        message,
        stack_trace,
        http_method,
        request_url,
        request_headers,
        response_status
    } = info

    logger.warn({
        level: "info",
        source,
        message,
        user_id,
        request_id,
        stack_trace,
        http_method,
        request_url,
        request_headers,
        response_status
    });
}

function logError(info) {
    const {
        source,
        user_id,
        request_id,
        message,
        stack_trace,
        http_method,
        request_url,
        request_headers,
        response_status
    } = info

    logger.error({
        level: "error",
        source,
        message,
        user_id,
        request_id,
        stack_trace,
        http_method,
        request_url,
        request_headers,
        response_status
    });
}

module.exports = {
    logInfo: logInfo,
    logWarning: logWarning,
    logError: logError
}
