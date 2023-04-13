const winston = require('winston');
const fluentLogger = require('fluent-logger');
const { v1: uuidv1 } = require("uuid");

// Configure Fluentd logger
fluentLogger.configure({
  host: '192.168.1.100',   // Fluentd host IP address
  port: 24224,            // Fluentd port
  timeout: 3.0,           // Timeout for socket connection in seconds (optional, default: 3.0)
  reconnectInterval: 600000 // Reconnect interval in milliseconds (optional, default: 600000)
});

// Create a Fluentd transport for Winston
const fluentTransport = new winston.transports.Fluent({
  tag: 'myapp',         // Fluentd tag for identifying logs (optional, default: 'winston')
  timeout: 3.0,         // Timeout for socket connection in seconds (optional, default: 3.0)
  reconnectInterval: 600000 // Reconnect interval in milliseconds (optional, default: 600000)
});

// Create a logger with Fluentd transport
const logger = winston.createLogger({
  level: 'info',
  defaultMeta: { service: 'remo-service' },
  format: winston.format.combine(
    winston.format.label({ label: `Log label🏷️` }),
    winston.format.timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }),
    winston.format.json(),
  ),
  transports: [
    fluentTransport, // Add Fluentd transport to transports array
    new winston.transports.File({ filename: `logs/${uuidv1()}-info-logs.log` }),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
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
        response_status,
        code
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
        response_status,
        code
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
